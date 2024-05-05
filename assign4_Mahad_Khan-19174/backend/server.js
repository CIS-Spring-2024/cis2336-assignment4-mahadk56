// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes

// GET request handler for serving the menu page
app.get('/order', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'html', 'orderpage.html'));
});

// POST request handler for processing the order form data
app.post('/process-order', (req, res) => {
    const formData = req.body;

    // Validate form data (quantity should be positive)
    const quantities = Object.values(formData).map(Number);
    if (quantities.some(qty => qty < 0)) {
        return res.status(400).send('Quantity of items should be positive.');
    }

    // Calculate total amount
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

    let totalAmount = 0;
    for (const [item, qty] of Object.entries(formData)) {
        totalAmount += itemPrices[item] * qty;
    }

    // Redirect to order confirmation page with total amount
    res.redirect(`/order-confirmation?totalAmount=${totalAmount}`);
});

// GET request handler for serving the order confirmation page
app.get('/order-confirmation', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'html', 'order-confirmation.html'));
});

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});