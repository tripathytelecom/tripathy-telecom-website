fetch("services.json?v=" + Date.now())
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("services-container");
        if (!container) return;

        container.innerHTML = "";

        data.forEach(service => {
            const isLink = service.link && service.link !== "#";
            const tag = isLink ? "a" : "div";
            const hrefAttr = isLink ? `href="${service.link}"` : "";

            const cardHTML = `
        <${tag} ${hrefAttr} class="service-card">
          <img src="${service.image}" alt="${service.name}">
          <h3>${service.name}</h3>
        </${tag}>
      `;

            container.innerHTML += cardHTML;
        });
    })
    .catch(err => console.error("Error loading services:", err));
