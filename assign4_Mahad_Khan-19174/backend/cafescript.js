window.onload = function() {
    const previousButton = document.getElementById('previous-button');
    const nextButton = document.getElementById('next-button');

    // Define an array of menu items
    const menuItems = [
        document.getElementById('item1'),
        document.getElementById('item2'),
        document.getElementById('item3'),
        document.getElementById('item4'),
        document.getElementById('item5'),
        document.getElementById('item6'),
        document.getElementById('item7'),
        document.getElementById('item8'),
        document.getElementById('item9'),
        document.getElementById('item10')
    ];

    // Set the initial index to 0
    let currentIndex = 0;

    // Function to show the current menu item
    function showMenuItem() {
        // Hide all menu items
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].style.display = 'none';
        }

        // Show the current menu item
        menuItems[currentIndex].style.display = 'block';
    }

    // Function to go to the previous menu item
    function goToPrevious() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = menuItems.length - 1;
        }
        showMenuItem();
    }

    // Function to go to the next menu item
    function goToNext() {
        currentIndex++;
        if (currentIndex >= menuItems.length) {
            currentIndex = 0;
        }
        showMenuItem();
    }

    // Add event listeners to the buttons
    previousButton.addEventListener('click', goToPrevious);
    nextButton.addEventListener('click', goToNext);

    // Show the initial menu item
    showMenuItem();
}