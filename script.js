let cart = [];
document.addEventListener("DOMContentLoaded", loadProducts);

function loadProducts() {
    fetch("products.json")
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById("product-container");
            data.forEach((product, index) => {
                const div = document.createElement("div");
                div.className = "product";
                div.innerHTML = `
                    <img src="images/${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>৳${product.price}</p>
                    <button onclick="addToCart(${index})">Add to Cart</button>
                `;
                container.appendChild(div);
            });
            window.products = data;
        });
}

function addToCart(index) {
    cart.push(window.products[index]);
    document.getElementById("cart-count").innerText = cart.length;
}

function showCart() {
    const cartSection = document.getElementById("cart");
    const items = document.getElementById("cart-items");
    const total = document.getElementById("cart-total");
    items.innerHTML = "";
    let sum = 0;
    cart.forEach((item, i) => {
        sum += item.price;
        const li = document.createElement("li");
        li.textContent = `${item.name} - ৳${item.price}`;
        items.appendChild(li);
    });
    total.innerText = sum;
    cartSection.classList.remove("hidden");
}

function hideCart() {
    document.getElementById("cart").classList.add("hidden");
}

function checkout() {
    document.getElementById("checkout-form").classList.remove("hidden");
}
