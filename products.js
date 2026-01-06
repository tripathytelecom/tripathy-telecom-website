/* =========================
   CART SYSTEM
========================= */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCountEl = document.getElementById("cartCount");
if (cartCountEl) {
  cartCountEl.innerText = cart.length;
}

function addToCart(product) {
  cart.push({
    name: product.name,
    price: product.price,
    image: product.image,
    qty: 1
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  if (cartCountEl) {
    cartCountEl.innerText = cart.length;
  }

  alert("Product added to cart");
}

/* =========================
   GLOBAL STATE
========================= */
let allProducts = [];
let currentCategory = "all";

/* =========================
   LOAD PRODUCTS
========================= */
fetch("products.json?v=" + Date.now())
  .then(res => res.json())
  .then(data => {
    allProducts = data;
    renderProducts();
  });

/* =========================
   RENDER PRODUCTS
========================= */
function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const searchInput = document.getElementById("searchInput");
  const query = searchInput ? searchInput.value.toLowerCase() : "";

  grid.innerHTML = "";

  const filtered = allProducts.filter(p => {
    const matchCategory =
      currentCategory === "all" || p.category === currentCategory;

    const matchSearch =
      p.name.toLowerCase().includes(query) ||
      (p.desc || "").toLowerCase().includes(query);

    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = "<p>No products found</p>";
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      ${p.stock === 0 ? `<div class="badge">Out of Stock</div>` : ""}

      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.desc || ""}</p>

      ${p.oldPrice ? `<div class="old-price">₹ ${p.oldPrice}</div>` : ""}
      <div class="price">₹ ${p.price}</div>

      <button class="cart-btn" ${p.stock === 0 ? "disabled" : ""}>
        🛒 Add to Cart
      </button>

      <a class="whatsapp-btn" target="_blank"
        href="https://wa.me/918670244552?text=${encodeURIComponent(
          "Buy " + p.name + " ₹" + p.price
        )}">
        📲 Buy on WhatsApp
      </a>
    `;

    const btn = card.querySelector(".cart-btn");
    if (btn && p.stock !== 0) {
      btn.onclick = () => addToCart(p);
    }

    grid.appendChild(card);
  });
}

/* =========================
   CATEGORY FILTER
========================= */
document.querySelectorAll(".filters button").forEach(btn => {
  btn.onclick = () => {
    document
      .querySelectorAll(".filters button")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");
    currentCategory = btn.dataset.cat;
    renderProducts();
  };
});

/* =========================
   SEARCH
========================= */
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", renderProducts);
}
