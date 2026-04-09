    const categories = [
      { id: "all", name: "All Products", icon: "★", description: "Browse the full collection" },
      { id: "fashion", name: "Fashion", icon: "◒", description: "Clothing and accessories" },
      { id: "electronics", name: "Electronics", icon: "⌁", description: "Devices and smart gear" },
      { id: "home", name: "Home", icon: "⌂", description: "Decor and living picks" },
      { id: "beauty", name: "Beauty", icon: "✦", description: "Self-care essentials" }
    ];

    const products = [
      {
        id: 1,
        category: "fashion",
        title: "Tailored Linen Blazer",
        shortDescription: "Breathable statement layer for modern daywear.",
        fullDescription: "A lightweight linen blazer with a relaxed tailored fit, soft inner lining, and versatile neutral tone designed for both formal and smart casual styling.",
        originalPrice: 129.99,
        offerPrice: 89.99,
        images: [
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80"
        ]
      },
      {
        id: 2,
        category: "electronics",
        title: "Aurora Wireless Headphones",
        shortDescription: "Immersive audio with all-day comfort and battery life.",
        fullDescription: "Noise-isolating wireless headphones featuring plush ear cups, intuitive touch controls, and a battery tuned for long work sessions, travel, and deep listening.",
        originalPrice: 199.99,
        offerPrice: 149.99,
        images: [
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=80"
        ]
      },
      {
        id: 3,
        category: "home",
        title: "Sculpted Ceramic Vase",
        shortDescription: "Textured centerpiece for shelves and dining tables.",
        fullDescription: "Hand-finished ceramic vase with a matte texture and sculptural silhouette, perfect for adding quiet elegance to contemporary interiors.",
        originalPrice: 64.99,
        offerPrice: 46.99,
        images: [
          "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1616627456409-0f2c7cb4bf43?auto=format&fit=crop&w=900&q=80"
        ]
      },
      {
        id: 4,
        category: "beauty",
        title: "Botanical Skin Ritual Set",
        shortDescription: "Daily hydration trio with a soft floral finish.",
        fullDescription: "A three-step skincare set featuring cleanser, serum, and moisturizer infused with botanical extracts to refresh, soften, and brighten the skin.",
        originalPrice: 84.99,
        offerPrice: 59.99,
        images: [
          "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80"
        ]
      },
      {
        id: 5,
        category: "fashion",
        title: "Signature Leather Tote",
        shortDescription: "Structured everyday bag with polished hardware.",
        fullDescription: "Crafted with a clean silhouette and roomy interior, this leather tote balances workday practicality with elevated, refined styling.",
        originalPrice: 159.99,
        offerPrice: 119.99,
        images: [
          "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80"
        ]
      },
      {
        id: 6,
        category: "electronics",
        title: "Minimal Smart Watch",
        shortDescription: "Track movement, focus, and sleep in style.",
        fullDescription: "A slim smart watch with a bright display, fitness metrics, message alerts, and a timeless band design that pairs with work and weekend looks.",
        originalPrice: 249.99,
        offerPrice: 189.99,
        images: [
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80"
        ]
      },
      {
        id: 7,
        category: "home",
        title: "Cloud Knit Throw",
        shortDescription: "Soft woven comfort for sofas and reading corners.",
        fullDescription: "A generously sized knit throw blanket with plush texture, warm tone, and cozy weight for evenings indoors and layered styling.",
        originalPrice: 74.99,
        offerPrice: 52.99,
        images: [
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&w=900&q=80"
        ]
      },
      {
        id: 8,
        category: "beauty",
        title: "Glow Mist Perfume",
        shortDescription: "Warm citrus and amber blend for everyday wear.",
        fullDescription: "A balanced fragrance with bright top notes, floral heart, and soft amber base, designed to feel fresh, subtle, and easy to layer.",
        originalPrice: 69.99,
        offerPrice: 49.99,
        images: [
          "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1615634262417-7f02d0d83d5f?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80"
        ]
      },
      {
        id: 9,
        category: "fashion",
        title: "Classic White Sneakers",
        shortDescription: "Clean silhouette with soft cushioning for daily wear.",
        fullDescription: "Everyday sneakers finished with a low-profile shape, padded sole, and crisp detailing that works across casual wardrobes.",
        originalPrice: 99.99,
        offerPrice: 74.99,
        images: [
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80"
        ]
      },
      {
        id: 10,
        category: "electronics",
        title: "Portable Bluetooth Speaker",
        shortDescription: "Compact room-filling sound with grab-and-go design.",
        fullDescription: "A durable wireless speaker with a balanced sound profile, strong battery life, and portable build for home, work, or outdoor moments.",
        originalPrice: 139.99,
        offerPrice: 104.99,
        images: [
          "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1512446816042-444d64126727?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1558537348-c0f8e733989d?auto=format&fit=crop&w=900&q=80"
        ]
      },
      {
        id: 11,
        category: "home",
        title: "Oak Side Table",
        shortDescription: "Compact accent table with natural wood finish.",
        fullDescription: "A small-footprint oak side table with rounded edges and a warm finish, ideal for living rooms, bedside spaces, or reading nooks.",
        originalPrice: 149.99,
        offerPrice: 112.99,
        images: [
          "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
        ]
      },
      {
        id: 12,
        category: "beauty",
        title: "Silk Hair Care Duo",
        shortDescription: "Nourishing care set for shine and softness.",
        fullDescription: "A salon-inspired shampoo and conditioner duo formulated to smooth strands, reduce dryness, and leave hair feeling light and healthy.",
        originalPrice: 58.99,
        offerPrice: 39.99,
        images: [
          "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1626014056703-8c6b86b6c9d2?auto=format&fit=crop&w=900&q=80"
        ]
      }
    ];

    const state = {
      activeCategory: "all",
      currentPage: 1,
      perPage: 6,
      cart: []
    };

    const categoryGrid = document.getElementById("categoryGrid");
    const productGrid = document.getElementById("productGrid");
    const pagination = document.getElementById("pagination");
    const activeFilter = document.getElementById("activeFilter");
    const resultsMeta = document.getElementById("resultsMeta");
    const cartItems = document.getElementById("cartItems");
    const summaryList = document.getElementById("summaryList");
    const headerCartCount = document.getElementById("headerCartCount");
    const summaryItems = document.getElementById("summaryItems");
    const summarySubtotal = document.getElementById("summarySubtotal");
    const summaryShipping = document.getElementById("summaryShipping");
    const summaryTotal = document.getElementById("summaryTotal");
    const thankYouMessage = document.getElementById("thankYouMessage");
    const checkoutForm = document.getElementById("checkoutForm");
    const cartModal = document.getElementById("cartModal");
    const openCartScreen = document.getElementById("openCartScreen");
    const productModal = document.getElementById("productModal");
    const productModalMainImage = document.getElementById("productModalMainImage");
    const productModalThumbs = document.getElementById("productModalThumbs");
    const productModalName = document.getElementById("productModalName");
    const productModalDescription = document.getElementById("productModalDescription");
    const productModalOldPrice = document.getElementById("productModalOldPrice");
    const productModalNewPrice = document.getElementById("productModalNewPrice");
    const productModalDiscount = document.getElementById("productModalDiscount");
    const productModalQty = document.getElementById("productModalQty");
    const SHIPPING_CHARGE = 9.99;
    const productModalState = {
      productId: products[0].id,
      imageIndex: 0,
      quantity: 1
    };

    function formatCurrency(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(value);
    }

    function getDiscount(product) {
      return Math.round(((product.originalPrice - product.offerPrice) / product.originalPrice) * 100);
    }

    function getFilteredProducts() {
      if (state.activeCategory === "all") {
        return products;
      }

      return products.filter((product) => product.category === state.activeCategory);
    }

    function renderCategories() {
      categoryGrid.innerHTML = categories.map((category) => {
        const productCount = category.id === "all"
          ? products.length
          : products.filter((product) => product.category === category.id).length;

        return `
          <button class="category-card ${state.activeCategory === category.id ? "active" : ""}" type="button" data-category="${category.id}">
            <span class="category-icon">${category.icon}</span>
            <strong>${category.name}</strong>
            <span>${category.description} • ${productCount} items</span>
          </button>
        `;
      }).join("");
    }

    function renderProducts() {
      const filtered = getFilteredProducts();
      const totalPages = Math.max(1, Math.ceil(filtered.length / state.perPage));

      if (state.currentPage > totalPages) {
        state.currentPage = totalPages;
      }

      const start = (state.currentPage - 1) * state.perPage;
      const currentItems = filtered.slice(start, start + state.perPage);
      const categoryLabel = categories.find((item) => item.id === state.activeCategory)?.name || "All Products";

      resultsMeta.textContent = `${filtered.length} product${filtered.length === 1 ? "" : "s"} available`;
      activeFilter.textContent = `Showing: ${categoryLabel}`;

      productGrid.innerHTML = currentItems.map((product) => `
        <article class="product-card">
          <div class="product-image">
            <img src="${product.images[0]}" alt="${product.title}">
            <span class="discount-badge">${getDiscount(product)}% OFF</span>
          </div>
          <div class="product-body">
            <h3>${product.title}</h3>
            <p>${product.shortDescription}</p>
            <div class="price-row">
              <span class="price-old">${formatCurrency(product.originalPrice)}</span>
              <span class="price-new">${formatCurrency(product.offerPrice)}</span>
            </div>
            <div class="actions-row">
              <button class="btn btn-ghost" type="button" data-action="details" data-id="${product.id}">View Details</button>
              <button class="btn btn-primary" type="button" data-action="add" data-id="${product.id}">Add to Cart</button>
            </div>
          </div>
        </article>
      `).join("");

      renderPagination(totalPages);
    }

    function renderPagination(totalPages) {
      const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

      pagination.innerHTML = `
        <button class="page-btn" type="button" ${state.currentPage === 1 ? "disabled" : ""} data-page="${state.currentPage - 1}">
          Previous
        </button>
        ${pageNumbers.map((page) => `
          <button class="page-btn ${page === state.currentPage ? "active" : ""}" type="button" data-page="${page}">
            ${page}
          </button>
        `).join("")}
        <button class="page-btn" type="button" ${state.currentPage === totalPages ? "disabled" : ""} data-page="${state.currentPage + 1}">
          Next
        </button>
      `;
    }

    function addToCart(productId, quantity = 1) {
      const existingItem = state.cart.find((item) => item.productId === productId);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cart.push({ productId, quantity });
      }

      renderCart();
    }

    function openCartModal() {
      cartModal.classList.add("open");
      cartModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeCartModal() {
      cartModal.classList.remove("open");
      cartModal.setAttribute("aria-hidden", "true");
      if (!productModal.classList.contains("open")) {
        document.body.style.overflow = "";
      }
    }

    function renderProductModal() {
      const product = products.find((item) => item.id === productModalState.productId) || products[0];
      const modalImage = product.images[productModalState.imageIndex] || product.images[0];

      productModalMainImage.src = modalImage;
      productModalMainImage.alt = product.title;
      productModalName.textContent = product.title;
      productModalDescription.textContent = product.fullDescription;
      productModalOldPrice.textContent = formatCurrency(product.originalPrice);
      productModalNewPrice.textContent = formatCurrency(product.offerPrice);
      productModalDiscount.textContent = `${getDiscount(product)}% OFF`;
      productModalQty.textContent = productModalState.quantity;

      productModalThumbs.innerHTML = product.images.map((src, index) => `
        <button class="thumb-btn ${index === productModalState.imageIndex ? "active" : ""}" type="button" data-modal-thumb-index="${index}">
          <img src="${src}" alt="${product.title} preview ${index + 1}">
        </button>
      `).join("");
    }

    function openProductModal(productId) {
      productModalState.productId = productId;
      productModalState.imageIndex = 0;
      productModalState.quantity = 1;
      renderProductModal();
      productModal.classList.add("open");
      productModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeProductModal() {
      productModal.classList.remove("open");
      productModal.setAttribute("aria-hidden", "true");
      if (!cartModal.classList.contains("open")) {
        document.body.style.overflow = "";
      }
    }

    function updateCartQuantity(productId, quantity) {
      const item = state.cart.find((entry) => entry.productId === productId);
      if (!item) return;

      if (quantity <= 0) {
        state.cart = state.cart.filter((entry) => entry.productId !== productId);
      } else {
        item.quantity = quantity;
      }

      renderCart();
    }

    function renderCart() {
      if (!state.cart.length) {
        cartItems.innerHTML = `<div class="empty-state">Your cart is empty. Add products from the listing or detail section to continue.</div>`;
        summaryList.innerHTML = `<div class="empty-state">No products added yet.</div>`;
        headerCartCount.textContent = "0";
        summaryItems.textContent = "0";
        summarySubtotal.textContent = formatCurrency(0);
        summaryShipping.textContent = formatCurrency(0);
        summaryTotal.textContent = formatCurrency(0);
        return;
      }

      const enrichedCart = state.cart.map((item) => {
        const product = products.find((entry) => entry.id === item.productId);
        return {
          ...item,
          product,
          lineTotal: product.offerPrice * item.quantity
        };
      });

      const totalItems = enrichedCart.reduce((sum, item) => sum + item.quantity, 0);
      const subtotal = enrichedCart.reduce((sum, item) => sum + item.lineTotal, 0);
      const shipping = SHIPPING_CHARGE;
      const total = subtotal + shipping;

      cartItems.innerHTML = enrichedCart.map(({ product, quantity, lineTotal }) => `
        <article class="cart-item">
          <div class="cart-item-image">
            <img src="${product.images[0]}" alt="${product.title}">
          </div>
          <div>
            <h4>${product.title}</h4>
            <p>Unit Price: ${formatCurrency(product.offerPrice)}</p>
            <div class="qty-control">
              <button type="button" data-cart-action="decrease" data-id="${product.id}">-</button>
              <span>${quantity}</span>
              <button type="button" data-cart-action="increase" data-id="${product.id}">+</button>
            </div>
          </div>
          <div class="cart-item-actions">
            <strong>${formatCurrency(lineTotal)}</strong>
            <button class="remove-btn" type="button" data-cart-action="remove" data-id="${product.id}">Remove</button>
          </div>
        </article>
      `).join("");

      summaryList.innerHTML = enrichedCart.map(({ product, quantity, lineTotal }) => `
        <div class="summary-row">
          <span>${product.title} × ${quantity}</span>
          <strong>${formatCurrency(lineTotal)}</strong>
        </div>
      `).join("");

      headerCartCount.textContent = totalItems;
      summaryItems.textContent = totalItems;
      summarySubtotal.textContent = formatCurrency(subtotal);
      summaryShipping.textContent = formatCurrency(shipping);
      summaryTotal.textContent = formatCurrency(total);
    }

    categoryGrid.addEventListener("click", (event) => {
      const button = event.target.closest("[data-category]");
      if (!button) return;

      state.activeCategory = button.dataset.category;
      state.currentPage = 1;

      renderCategories();
      renderProducts();
    });

    productGrid.addEventListener("click", (event) => {
      const actionButton = event.target.closest("[data-action]");
      if (!actionButton) return;

      const productId = Number(actionButton.dataset.id);
      if (actionButton.dataset.action === "details") {
        openProductModal(productId);
      }

      if (actionButton.dataset.action === "add") {
        addToCart(productId, 1);
      }
    });

    pagination.addEventListener("click", (event) => {
      const pageButton = event.target.closest("[data-page]");
      if (!pageButton || pageButton.disabled) return;

      state.currentPage = Number(pageButton.dataset.page);
      renderProducts();
      document.getElementById("products").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    document.getElementById("closeProductModal").addEventListener("click", closeProductModal);

    productModal.addEventListener("click", (event) => {
      if (event.target === productModal) {
        closeProductModal();
      }
    });

    productModalThumbs.addEventListener("click", (event) => {
      const thumb = event.target.closest("[data-modal-thumb-index]");
      if (!thumb) return;
      productModalState.imageIndex = Number(thumb.dataset.modalThumbIndex);
      renderProductModal();
    });

    document.getElementById("productModalQtyDecrease").addEventListener("click", () => {
      productModalState.quantity = Math.max(1, productModalState.quantity - 1);
      productModalQty.textContent = productModalState.quantity;
    });

    document.getElementById("productModalQtyIncrease").addEventListener("click", () => {
      productModalState.quantity += 1;
      productModalQty.textContent = productModalState.quantity;
    });

    document.getElementById("productModalAddToCart").addEventListener("click", () => {
      addToCart(productModalState.productId, productModalState.quantity);
      closeProductModal();
    });

    document.getElementById("closeModal").addEventListener("click", closeCartModal);

    cartModal.addEventListener("click", (event) => {
      if (event.target === cartModal) {
        closeCartModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && cartModal.classList.contains("open")) {
        closeCartModal();
      }
      if (event.key === "Escape" && productModal.classList.contains("open")) {
        closeProductModal();
      }
    });

    openCartScreen.addEventListener("click", openCartModal);

    document.querySelectorAll("[data-open-cart='true']").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        openCartModal();
      });
    });

    cartItems.addEventListener("click", (event) => {
      const button = event.target.closest("[data-cart-action]");
      if (!button) return;

      const productId = Number(button.dataset.id);
      const item = state.cart.find((entry) => entry.productId === productId);
      if (!item) return;

      if (button.dataset.cartAction === "increase") {
        updateCartQuantity(productId, item.quantity + 1);
      }

      if (button.dataset.cartAction === "decrease") {
        updateCartQuantity(productId, item.quantity - 1);
      }

      if (button.dataset.cartAction === "remove") {
        updateCartQuantity(productId, 0);
      }
    });

    checkoutForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!state.cart.length) {
        alert("Add at least one product to the cart before placing an order.");
        return;
      }

      thankYouMessage.style.display = "block";
      checkoutForm.reset();
      state.cart = [];
      renderCart();
      window.scrollTo({ top: document.getElementById("checkout").offsetTop - 70, behavior: "smooth" });
    });

    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    navMenu.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        navMenu.classList.remove("open");
      }
    });

    const slides = Array.from(document.querySelectorAll(".slide"));
    const sliderDots = document.getElementById("sliderDots");
    let slideIndex = 0;
    let slideInterval;

    function renderDots() {
      sliderDots.innerHTML = slides.map((_, index) => `
        <button class="dot ${index === slideIndex ? "active" : ""}" type="button" data-slide="${index}" aria-label="Go to slide ${index + 1}"></button>
      `).join("");
    }

    function showSlide(index) {
      slideIndex = (index + slides.length) % slides.length;
      slides.forEach((slide, currentIndex) => {
        slide.classList.toggle("active", currentIndex === slideIndex);
      });
      renderDots();
    }

    function startSlider() {
      clearInterval(slideInterval);
      slideInterval = setInterval(() => {
        showSlide(slideIndex + 1);
      }, 5000);
    }

    document.getElementById("prevSlide").addEventListener("click", () => {
      showSlide(slideIndex - 1);
      startSlider();
    });

    document.getElementById("nextSlide").addEventListener("click", () => {
      showSlide(slideIndex + 1);
      startSlider();
    });

    sliderDots.addEventListener("click", (event) => {
      const dot = event.target.closest("[data-slide]");
      if (!dot) return;
      showSlide(Number(dot.dataset.slide));
      startSlider();
    });

    renderCategories();
    renderProducts();
    renderCart();
    renderDots();
    startSlider();
