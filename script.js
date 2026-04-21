// SCROLL TO PRODUCTS
function scrollToProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

// PRODUCT DATA
const products = [
    { name: "Minimalist Hoodie", price: "Php 500" },
    { name: "Minimalist Hoodie", price: "Php 500" },
    { name: "Minimalist Hoodie", price: "Php 500" },
    { name: "Minimalist Hoodie", price: "Php 500" },
    { name: "Minimalist Hoodie", price: "Php 500" },
    { name: "Minimalist Hoodie", price: "Php 500" },
    { name: "Minimalist Hoodie", price: "Php 500" },
    { name: "Minimalist Hoodie", price: "Php 500" }
];

// LOAD PRODUCTS
const grid = document.getElementById("productGrid");

products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
        <img src="https://via.placeholder.com/200" alt="hoodie">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button onclick="buyNow()">Buy Now</button>
    `;

    grid.appendChild(div);
});

// BUY BUTTON FUNCTION
function buyNow() {
    alert("Product added! (You can connect this to checkout later)");
}

// MENU BUTTON (for future mobile nav)
document.getElementById("menuBtn").addEventListener("click", () => {
    alert("Menu coming soon!");
});
