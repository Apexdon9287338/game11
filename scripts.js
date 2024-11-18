// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            if (!button.disabled) {
                console.log(`Joining ${button.parentElement.querySelector("h3").textContent}`);
            }
        });
    });
});