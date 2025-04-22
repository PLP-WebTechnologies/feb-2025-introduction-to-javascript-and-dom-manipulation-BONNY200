// Change text content dynamically
document.getElementById("change-text").addEventListener("click", function() {
    const textElement = document.getElementById("text-content");
    textElement.textContent = "The text content has been changed!";
});

// Modify CSS styles
document.getElementById("change-style").addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});

// Add or remove elements
let elementCount = 0;
document.getElementById("add-element").addEventListener("click", function() {
    const newElement = document.createElement("p");
    newElement.textContent = "This is a dynamically added element " + (++elementCount);
    document.body.appendChild(newElement);
});

document.getElementById("remove-element").addEventListener("click", function() {
    const lastElement = document.querySelector("body > p:last-of-type");
    if (lastElement) {
        lastElement.remove();
    }
});
