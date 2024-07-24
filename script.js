document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const products = document.querySelectorAll('.product');
    const cartItems = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total-price');

    products.forEach(product => {
        product.querySelector('.add-to-cart').addEventListener('click', () => {
            const id = product.getAttribute('data-id');
            const price = parseFloat(product.getAttribute('data-price'));
            const name = product.querySelector('h2').innerText;

            const cartItem = cart.find(item => item.id === id);
            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }
            renderCart();
        });
    });

    function renderCart() {
        cartItems.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('cart-item');
            li.innerHTML = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
            cartItems.appendChild(li);

            totalPrice += item.price * item.quantity;
        });

        totalPriceElement.innerText = totalPrice.toFixed(2);
    }
});
