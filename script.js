let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("total");
    const count = document.getElementById("cart-count");

    cartItems.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - ₱${item.price}`;
        cartItems.appendChild(li);
    });

    totalDisplay.textContent = total;
    count.textContent = cart.length;
}

function checkout() {
    if (cart.length === 0) {
        alert("Cart is empty!");
    } else {
        alert("Thank you for your purchase!");
        cart = [];
        total = 0;
        updateCart();
    }
}

function scrollToProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}
