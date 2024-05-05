document.addEventListener('DOMContentLoaded', function() {
    const totalPriceDisplay = document.getElementById('totalPrice');
    const updateCartBtn = document.getElementById('updateCartBtn');

    // Function to calculate total price
    function calculateTotalPrice() {
        const itemQuantities = document.querySelectorAll('.itemQuantity');
        let totalPrice = 0;

        itemQuantities.forEach(function(quantityElement) {
            const itemName = quantityElement.name;
            const quantity = parseInt(quantityElement.value);
            const itemPrice = getItemPrice(itemName);
            totalPrice += quantity * itemPrice;
        });

        return totalPrice.toFixed(2);
    }

    // Function to update total price display
    function updateTotalPriceDisplay() {
        const totalPrice = calculateTotalPrice();
        totalPriceDisplay.textContent = `Total Price: $${totalPrice}`;
    }

    // Function to retrieve item price
    function getItemPrice(itemName) {
        // Define item prices for each item
        const itemPrices = {
            'Coffee': 2.99,
            'Burger': 5.99,
            'Pizza': 8.99,
            'Salad': 4.99,
            'Alfredo Pasta': 7.99,
            'Peach Smoothie': 3.99,
            'Club Sandwich': 6.99,
            'Sushi': 9.99,
            'Tacos': 5.49,
            'Tomato Soup': 3.49 
        };
        return itemPrices[itemName];
    }

    // Event listener for clicking the "Update Cart" button
    updateCartBtn.addEventListener('click', function() {
        updateTotalPriceDisplay();
    });
});
