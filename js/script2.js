const $=selector=>document.querySelector(selector)
document.addEventListener('DOMContentLoaded', function () {
    const calculateBtn = document.getElementById('calculateBtn');
     // Add event listener to the calculate button for click events, triggering the processEntry function
    calculateBtn.addEventListener('click', processEntry);
});
// Function to process user input and calculate change
function processEntry() {
    const amountInput = document.getElementById('amount');
    const amount = parseInt(amountInput.value);
    
    if (!isNaN(amount) && amount >= 0 && amount <= 99) {
        makeChange(amount);
    } else {
        alert('Please enter a valid number between 0 and 99.');
    }
}
// Function to calculate the number of quarters, dimes, nickels, and pennies
function makeChange(amount) {
    const quarters = Math.floor(amount / 25);
    amount %= 25;
    const dimes = Math.floor(amount / 10);
    amount %= 10;
    const nickels = Math.floor(amount / 5);
    const pennies = amount % 5;

    displayChange(quarters, dimes, nickels, pennies);
}
// Function to display the calculated change in the corresponding input fields
function displayChange(quarters, dimes, nickels, pennies) {
    document.getElementById('quarters').value = quarters;
    document.getElementById('dimes').value = dimes;
    document.getElementById('nickels').value = nickels;
    document.getElementById('pennies').value = pennies;
}
