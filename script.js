let totalAmount = 0;

function addItem() {
    const itemInput = document.getElementById('item');
    const priceInput = document.getElementById('price');
    const cartItems = document.getElementById('cart-items');
    const totalAmountSpan = document.getElementById('total-amount');
    const paymentSource = document.getElementById('payment-source');
    const paymentLink = document.getElementById('payment-link');

    const itemName = itemInput.value.trim();
    const itemPrice = parseFloat(priceInput.value);

    if (itemName && !isNaN(itemPrice) && itemPrice > 0) {
        // Create new list item
        const listItem = document.createElement('li');
        listItem.textContent = `${itemName}: $${itemPrice.toFixed(2)}`;

        // Add item to cart
        cartItems.appendChild(listItem);

        // Update total amount
        totalAmount += itemPrice;
        totalAmountSpan.textContent = totalAmount.toFixed(2);

        // Show payment source
        paymentSource.classList.remove('hidden');
        paymentLink.href = '#'; // Replace with your actual payment gateway link

        // Clear input fields
        itemInput.value = '';
        priceInput.value = '';
    } else {
        alert('Please enter a valid item name and price.');
    }
}
