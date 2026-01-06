let cart = JSON.parse(localStorage.getItem("cart")) || [];
document.getElementById("cartCount").innerText = cart.length;

function addToCart(p){
  cart.push(p);
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("cartCount").innerText = cart.length;
  alert("Added to cart");
}

let allProducts = [];
let currentCategory = "all";

fetch("products.json?v=" + Date.now())
.then(res => res.json())
.then(data=>{
  allProducts = data;
  renderProducts();
});

function renderProducts(){
  const q = document.getElementById("searchInput").value.toLowerCase();
  const grid = document.getElementById("productGrid");
  grid.innerHTML="";

  allProducts.filter(p=>{
    return (currentCategory==="all" || p.category===currentCategory) &&
      (p.name.toLowerCase().includes(q) || (p.desc||"").toLowerCase().includes(q));
  }).forEach(p=>{
    const card = document.createElement("div");
    card.className="card";

    card.innerHTML=`
      ${p.stock===0?'<div class="badge">Out of Stock</div>':""}
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>${p.desc||""}</p>
      ${p.oldPrice?`<div class="old-price">₹ ${p.oldPrice}</div>`:""}
      <div class="price">₹ ${p.price}</div>
      <button class="cart-btn" ${p.stock===0?"disabled":""}>🛒 Add to Cart</button>
      <a class="whatsapp-btn" target="_blank"
        href="https://wa.me/918670244552?text=${encodeURIComponent(
          'Buy '+p.name+' ₹'+p.price
        )}">
        📲 Buy on WhatsApp
      </a>
    `;

    card.querySelector(".cart-btn").onclick = ()=>addToCart(p);
    grid.appendChild(card);
  });
}

/* category click */
document.querySelectorAll(".filters button").forEach(btn=>{
  btn.onclick=()=>{
    document.querySelectorAll(".filters button").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.cat;
    renderProducts();
  };
});

/* search */
document.getElementById("searchInput")
  .addEventListener("input", renderProducts);
