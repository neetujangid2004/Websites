document.addEventListener("DOMContentLoaded", function() {
    // Variables for the slider
    let currentIndex = 0;
    const texts = [
        "GET START YOUR FAVRIOT SHOPING",
        "DISCOVER NEW ARRIVALS",
        "ENJOY EXCLUSIVE OFFERS"
    ];
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const textElement = document.querySelector("header div p");

    // Functions for the slider
    function showText(index) {
        textElement.innerHTML = texts[index];
    }

    function showPrevText() {
        currentIndex = (currentIndex - 1 + texts.length) % texts.length;
        showText(currentIndex);
    }

    function showNextText() {
        currentIndex = (currentIndex + 1) % texts.length;
        showText(currentIndex);
    }

    // Event listeners for the slider
    prevButton.addEventListener("click", showPrevText);
    nextButton.addEventListener("click", showNextText);

    // Initial text
    showText(currentIndex);
});

// Dummy search function
function search() {
    alert("Search functionality is not implemented yet.");
}
