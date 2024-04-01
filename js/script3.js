const $=selector=>document.querySelector(selector)
//DOMContentLoaded event, which indicates that the initial HTML document has been completely loaded and parsed
document.addEventListener('DOMContentLoaded', function() {
    
    const calculateButton = document.getElementById('calculateButton'); // Button to trigger calculation
    const incomeInput = document.getElementById('incomeInput'); // Input field for income
    const taxOutput = document.getElementById('taxOutput'); // Output field for tax amount

    incomeInput.focus();

    calculateButton.addEventListener('click', processEntry);

    function processEntry() {
        const income = parseFloat(incomeInput.value);

        if (isNaN(income) || income <= 0) {

            taxOutput.value = 'Invalid input. Please enter a valid number greater than zero.';
        } else {
            // Calculate tax based on the provided income using the calculateTax function
            const taxAmount = calculateTax(income);
            // Display the calculated tax amount in the taxOutput field with two decimal places
            taxOutput.value = taxAmount.toFixed(2);
        }
        incomeInput.focus();
    }

    // Function to calculate tax based on income
    function calculateTax(income) {
        // Initialize the tax variable
        let tax = 0;

        
        if (income <= 9875) {
            tax = income * 0.1;
        } else if (income <= 40125) {
            tax = 987.50 + (income - 9875) * 0.12;
        } else if (income <= 85525) {
            tax = 4617.50 + (income - 40125) * 0.22;
        } else if (income <= 163300) {
            tax = 14605.50 + (income - 85525) * 0.24;
        } else if (income <= 207350) {
            tax = 33271.50 + (income - 163300) * 0.32;
        } else if (income <= 518400) {
            tax = 47367.50 + (income - 207350) * 0.35;
        } else {
            tax = 156235.00 + (income - 518400) * 0.37;
        }

        // Return the calculated tax amount
        return tax;
    }
});
