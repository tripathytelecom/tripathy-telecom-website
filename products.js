fetch("products.json")
.then(r=>r.json())
.then(data=>{
  const box = document.getElementById("product-list");

  data.forEach(p=>{
    box.innerHTML += `
      <div class="product-box">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <b>₹ ${p.price}</b>
      </div>
    `;
  });
});
