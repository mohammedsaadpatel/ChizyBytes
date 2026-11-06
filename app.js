// ================================
// 1. FOOD ITEMS
// ================================

const foods = [
  {
    id: 1,
    name: "Classic Burger",
    category: "Burgers",
    price: 199,
    rating: 4.8,
    description: "Juicy burger with cheese and fresh lettuce.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 299,
    rating: 4.9,
    description: "Cheesy pizza topped with tomato and basil.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Paneer Tikka",
    category: "Indian",
    price: 229,
    rating: 4.7,
    description: "Smoky paneer with aromatic Indian spices.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Hakka Noodles",
    category: "Asian",
    price: 179,
    rating: 4.6,
    description: "Stir-fried noodles with crunchy vegetables.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Chocolate Cake",
    category: "Desserts",
    price: 149,
    rating: 4.9,
    description: "Rich chocolate cake for your sweet cravings.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Mango Smoothie",
    category: "Drinks",
    price: 129,
    rating: 4.7,
    description: "Refreshing mango smoothie, blended fresh.",
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Chicken Burger",
    category: "Burgers",
    price: 249,
    rating: 4.8,
    description: "Crispy chicken with creamy burger sauce.",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Cheese Pizza",
    category: "Pizza",
    price: 349,
    rating: 4.9,
    description: "Golden crust loaded with melted cheese.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    name: "Masala Dosa",
    category: "Indian",
    price: 159,
    rating: 4.7,
    description: "Crispy dosa with potato masala and chutney.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    name: "Iced Coffee",
    category: "Drinks",
    price: 139,
    rating: 4.6,
    description: "Chilled coffee with smooth and creamy milk.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    name: "Veg Fried Rice",
    category: "Asian",
    price: 189,
    rating: 4.5,
    description: "Fragrant fried rice with fresh vegetables.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    name: "Chocolate Brownie",
    category: "Desserts",
    price: 119,
    rating: 4.8,
    description: "Soft chocolate brownie with a rich flavour.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
  }
];


// ================================
// 2. VARIABLES
// ================================

const foodGrid = document.getElementById("foodGrid");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const emptyMessage = document.getElementById("emptyMessage");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartSummary = document.getElementById("cartSummary");

let activeCategory = "All";
let searchTerm = "";
let cart = {};


// ================================
// 3. HELPER FUNCTIONS
// ================================

function money(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

let toastTimer;

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2300);
}


// ================================
// 4. DISPLAY FOOD ITEMS
// ================================

function displayFoods() {
  const filteredFoods = foods.filter(food => {
    const matchesCategory =
      activeCategory === "All" ||
      food.category === activeCategory;

    const query = searchTerm.trim().toLowerCase();

    const matchesSearch =
      food.name.toLowerCase().includes(query) ||
      food.category.toLowerCase().includes(query) ||
      food.description.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  resultCount.textContent =
    `${filteredFoods.length} dishes`;

  emptyMessage.hidden = filteredFoods.length !== 0;

  foodGrid.innerHTML = filteredFoods.map(food => `
    <article class="food-card">

      <div class="food-image-wrap">
        <img
          class="food-image"
          src="${escapeHTML(food.image)}"
          alt="${escapeHTML(food.name)}"
          loading="lazy"
          onerror="this.style.visibility='hidden'"
        >

        <span class="food-badge">
          ${escapeHTML(food.category)}
        </span>
      </div>

      <div class="food-details">

        <div class="food-title-row">
          <h3 class="food-title">
            ${escapeHTML(food.name)}
          </h3>

          <span class="food-rating">
            <span>★</span> ${food.rating}
          </span>
        </div>

        <p class="food-description">
          ${escapeHTML(food.description)}
        </p>

        <div class="food-bottom">
          <span class="food-price">
            ${money(food.price)}
          </span>

          <button
            class="add-button"
            data-add="${food.id}"
            aria-label="Add ${escapeHTML(food.name)} to cart">
            +
          </button>
        </div>

      </div>
    </article>
  `).join("");
}


// ================================
// 5. SEARCH FOOD
// ================================

searchInput.addEventListener("input", event => {
  searchTerm = event.target.value;
  displayFoods();
});


// ================================
// 6. FILTER CATEGORIES
// ================================

document.getElementById("categories").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");

  if (!button) return;

  activeCategory = button.dataset.category;

  document.querySelectorAll(".category").forEach(category => {
    category.classList.toggle("active", category === button);
  });

  displayFoods();
});


// ================================
// 7. ADD FOOD TO CART
// ================================

foodGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");

  if (!button) return;

  const foodId = Number(button.dataset.add);
  addToCart(foodId);
});

function addToCart(foodId) {
  const food = foods.find(item => item.id === foodId);

  if (!food) return;

  if (cart[foodId]) {
    cart[foodId].quantity++;
  } else {
    cart[foodId] = {
      food: food,
      quantity: 1
    };
  }

  renderCart();

  showToast(`${food.name} added to your cart!`);
}


// ================================
// 8. CART CALCULATIONS
// ================================

function getCartEntries() {
  return Object.values(cart);
}

function getCartCount() {
  return getCartEntries().reduce(
    (sum, item) => sum + item.quantity,
    0
  );
}

function getSubtotal() {
  return getCartEntries().reduce(
    (sum, item) =>
      sum + item.food.price * item.quantity,
    0
  );
}

function getDeliveryFee() {
  if (getSubtotal() === 0 || getSubtotal() >= 499) {
    return 0;
  }

  return 30;
}

function getTotal() {
  return getSubtotal() + getDeliveryFee();
}


// ================================
// 9. DISPLAY CART
// ================================

function renderCart() {
  const entries = getCartEntries();

  cartCount.textContent = getCartCount();

  if (entries.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <p style="font-size: 40px;">🛒</p>
        <p>Your cart is empty!</p>
        <p>Add something delicious from the menu.</p>
      </div>
    `;

    cartSummary.innerHTML = "";
    return;
  }

  cartItems.innerHTML = entries.map(({ food, quantity }) => `
    <div class="cart-line">

      <img
        src="${escapeHTML(food.image)}"
        alt="${escapeHTML(food.name)}"
        onerror="this.style.visibility='hidden'"
      >

      <div>
        <h4>${escapeHTML(food.name)}</h4>
        <p>${money(food.price)} each</p>

        <div class="quantity-control">
          <button
            data-qty="${food.id}"
            data-delta="-1"
            aria-label="Remove one ${escapeHTML(food.name)}">
            −
          </button>

          <span>${quantity}</span>

          <button
            data-qty="${food.id}"
            data-delta="1"
            aria-label="Add one ${escapeHTML(food.name)}">
            +
          </button>
        </div>
      </div>

      <span class="line-total">
        ${money(food.price * quantity)}
      </span>

    </div>
  `).join("");

  cartSummary.innerHTML = `
    <div class="summary-row">
      <span>Subtotal</span>
      <span>${money(getSubtotal())}</span>
    </div>

    <div class="summary-row">
      <span>Delivery fee</span>
      <span>
        ${getDeliveryFee() === 0 ? "FREE" : money(getDeliveryFee())}
      </span>
    </div>

    <div class="summary-row total">
      <span>Total</span>
      <span>${money(getTotal())}</span>
    </div>

    <button id="checkoutButton" class="primary-btn full-width">
      Place Demo Order →
    </button>

    <p class="cart-note">
      Demo only. No real order or payment will be processed.
    </p>
  `;
}


// ================================
// 10. INCREASE / DECREASE QUANTITY
// ================================

cartItems.addEventListener("click", event => {
  const button = event.target.closest("[data-qty]");

  if (!button) return;

  const foodId = Number(button.dataset.qty);
  const delta = Number(button.dataset.delta);

  changeQuantity(foodId, delta);
});

function changeQuantity(foodId, delta) {
  if (!cart[foodId]) return;

  cart[foodId].quantity += delta;

  if (cart[foodId].quantity <= 0) {
    delete cart[foodId];
  }

  renderCart();
}


// ================================
// 11. OPEN / CLOSE CART
// ================================

const cartOverlay = document.getElementById("cartOverlay");

function openCart() {
  renderCart();

  cartOverlay.hidden = false;
  document.body.classList.add("no-scroll");
}

function closeCart() {
  cartOverlay.hidden = true;
  document.body.classList.remove("no-scroll");
}

document.getElementById("cartButton").addEventListener("click", openCart);

document.querySelectorAll("[data-close-cart]").forEach(button => {
  button.addEventListener("click", closeCart);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !cartOverlay.hidden) {
    closeCart();
  }
});


// ================================
// 12. DEMO CHECKOUT
// ================================

cartSummary.addEventListener("click", event => {
  if (!event.target.closest("#checkoutButton")) return;

  if (getCartCount() === 0) return;

  showToast(
    `Demo order total: ${money(getTotal())}. No payment was taken.`
  );

  cart = {};
  renderCart();
});


// ================================
// 13. DARK / LIGHT MODE
// ================================

const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;

  themeToggle.textContent =
    theme === "dark" ? "☀️" : "🌙";

  themeToggle.setAttribute(
    "aria-label",
    theme === "dark"
      ? "Switch to light mode"
      : "Switch to dark mode"
  );

  try {
    localStorage.setItem("quickbite-theme", theme);
  } catch (error) {
    // The theme still works if browser storage is unavailable.
  }
}

let savedTheme = "light";

try {
  savedTheme = localStorage.getItem("quickbite-theme") || "light";
} catch (error) {
  // Use light mode by default.
}

setTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme =
    document.documentElement.dataset.theme || "light";

  setTheme(currentTheme === "light" ? "dark" : "light");
});


// ================================
// 14. FOOTER YEAR
// ================================

document.getElementById("year").textContent =
  new Date().getFullYear();


// ================================
// 15. START THE WEBSITE
// ================================

displayFoods();
renderCart();