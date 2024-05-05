// Sample product data (for demonstration)
const products = [
    { id: 1, name: 'Product 1', price: 25, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 30, imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 40, imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: 20, imageUrl: 'https://via.placeholder.com/150' }
];

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Render products
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });

    let cart = [];
    updateCart();

    // Add product to cart
    window.addToCart = (productId) => {
        const productToAdd = products.find(product => product.id === productId);
        if (productToAdd) {
            cart.push(productToAdd);
            updateCart();
        }
    };

    // Update cart summary
    function updateCart() {
        cartCount.textContent = cart.length;
        const totalAmount = cart.reduce((total, product) => total + product.price, 0);
        cartTotal.textContent = totalAmount.toFixed(2);
    }

    // Checkout button click event
    checkoutBtn.addEventListener('click', () => {
        alert(`Checkout - Total: $${cartTotal.textContent}`);
        cart = []; // Empty the cart after checkout
        updateCart();
    });
});
