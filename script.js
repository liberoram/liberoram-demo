const products = [
  {
    id: 1,
    name: "Aurora Lamp",
    price: 2499,
    description: "A soft ambient table lamp with a calming warm glow for cozy corners.",
    image: "linear-gradient(135deg, #ffd7b8, #c66b45)"
  },
  {
    id: 2,
    name: "Luna Chair",
    price: 5999,
    description: "A compact lounge chair with a sculpted silhouette and rich texture.",
    image: "linear-gradient(135deg, #d8d0c5, #7c5d4d)"
  },
  {
    id: 3,
    name: "Moss Vase",
    price: 1499,
    description: "A handcrafted ceramic vase designed for fresh stems and clean styling.",
    image: "linear-gradient(135deg, #d5e6d1, #5f8264)"
  },
  {
    id: 4,
    name: "Sienna Throw",
    price: 1899,
    description: "A woven throw blanket with earthy tones and a luxurious soft finish.",
    image: "linear-gradient(135deg, #f4d3b4, #a64d2f)"
  }
];

const state = {
  activeItems: [],
  modalMode: "buy"
};

const productGrid = document.getElementById("productGrid");
const orderModal = document.getElementById("orderModal");
const modalContent = document.querySelector(".modal-content");
const modalProductName = document.getElementById("modalProductName");
const modalProductDescription = document.getElementById("modalProductDescription");
const modalProductPrice = document.getElementById("modalProductPrice");
const modalProductQuantity = document.getElementById("modalProductQuantity");
const orderSummaryList = document.getElementById("orderSummaryList");
const orderForm = document.getElementById("orderForm");
const detailCheckoutButton = document.getElementById("detailCheckoutButton");
const thankYouBox = document.getElementById("thankYouBox");
const thankYouMessage = document.getElementById("thankYouMessage");

function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(price);
}

function renderProducts() {
  productGrid.innerHTML = products.map((product) => `
    <article class="product-card">
      <div class="product-image" style="background:${product.image};"></div>
      <h3>${product.name}</h3>
      <p class="product-description">${product.description}</p>
      <div class="price-row">
        <strong class="product-price">${formatPrice(product.price)}</strong>
        <span>Fast delivery</span>
      </div>
      <div class="product-actions">
        <button class="action-button details" type="button" data-action="details" data-id="${product.id}">Details</button>
        <!-- <button class="action-button cart" type="button" data-action="cart" data-id="${product.id}">Add to cart</button> -->
        <button class="action-button buy-now" type="button" data-action="buy" data-id="${product.id}">Buy now</button>
      </div>
    </article>
  `).join("");
}

function updateModalLayout() {
  const isDetailsOnly = orderForm.classList.contains("hidden") && thankYouBox.classList.contains("hidden");
  const isThankYouOnly = !thankYouBox.classList.contains("hidden");
  modalContent.classList.toggle("details-only", isDetailsOnly);
  modalContent.classList.toggle("thank-you-only", isThankYouOnly);
}

function showCheckoutForm() {
  orderForm.classList.remove("hidden");
  detailCheckoutButton.classList.add("hidden");
  updateModalLayout();
}

function openOrderModal(items, mode = "buy") {
  state.activeItems = items.map((item) => ({ ...item }));
  state.modalMode = mode;
  modalProductName.textContent = state.activeItems.length === 1
    ? state.activeItems[0].name
    : "Your selected items";
  modalProductDescription.textContent = state.activeItems.length === 1
    ? state.activeItems[0].description
    : "You are ordering multiple products in one smooth checkout.";
  orderForm.reset();
  thankYouBox.classList.add("hidden");
  orderForm.classList.toggle("hidden", mode === "details");
  detailCheckoutButton.classList.toggle("hidden", mode !== "details");
  orderModal.classList.add("open");
  orderModal.setAttribute("aria-hidden", "false");
  renderOrderSummary();
  updateModalLayout();
}

function closeOrderModal() {
  orderModal.classList.remove("open");
  orderModal.setAttribute("aria-hidden", "true");
}

function renderOrderSummary() {
  const quantity = state.activeItems.reduce((sum, item) => sum + item.quantity, 0);
  const total = state.activeItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  orderSummaryList.innerHTML = state.activeItems.map((item) => `
    <div class="summary-item">
      <div>
        <h4>${item.name}</h4>
        <p>${formatPrice(item.price)} each</p>
      </div>
      <div class="summary-controls">
        <button class="qty-button" type="button" data-summary-action="decrement" data-id="${item.id}">-</button>
        <span class="qty-value">${item.quantity}</span>
        <button class="qty-button" type="button" data-summary-action="increment" data-id="${item.id}">+</button>
      </div>
    </div>
  `).join("");

  modalProductPrice.textContent = formatPrice(total);
  modalProductQuantity.textContent = `Qty ${quantity}`;
}

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button) {
    return;
  }

  const productId = Number(button.dataset.id);
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return;
  }

  if (button.dataset.action === "details") {
    openOrderModal([{ ...product, quantity: 1 }], "details");
  }

  if (button.dataset.action === "buy") {
    openOrderModal([{ ...product, quantity: 1 }], "buy");
  }
});

document.getElementById("closeModal").addEventListener("click", closeOrderModal);
document.getElementById("continueShopping").addEventListener("click", closeOrderModal);
detailCheckoutButton.addEventListener("click", showCheckoutForm);

document.getElementById("browseDeals").addEventListener("click", () => {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});

orderSummaryList.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button) {
    return;
  }

  const productId = Number(button.dataset.id);
  const activeItem = state.activeItems.find((item) => item.id === productId);

  if (!activeItem) {
    return;
  }

  if (button.dataset.summaryAction === "increment") {
    activeItem.quantity += 1;
  }

  if (button.dataset.summaryAction === "decrement") {
    activeItem.quantity -= 1;

    if (activeItem.quantity <= 0) {
      state.activeItems = state.activeItems.filter((item) => item.id !== productId);
    }
  }

  if (!state.activeItems.length) {
    closeOrderModal();
    return;
  }

  renderOrderSummary();
});

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(orderForm);
  const customerName = formData.get("customerName");
  const customerPhone = formData.get("customerPhone");
  const customerAddress = formData.get("customerAddress");
  const orderedNames = state.activeItems.map((item) => item.name).join(", ");

  thankYouMessage.textContent = `${customerName}, your order for ${orderedNames} is confirmed. We will contact you at ${customerPhone} and deliver to ${customerAddress}.`;

  orderForm.classList.add("hidden");
  detailCheckoutButton.classList.add("hidden");
  thankYouBox.classList.remove("hidden");
  updateModalLayout();
});

orderModal.addEventListener("click", (event) => {
  if (event.target === orderModal) {
    closeOrderModal();
  }
});

renderProducts();
