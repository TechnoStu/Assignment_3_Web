const $=selector=>document.querySelector(selector)
document.addEventListener("DOMContentLoaded", function () {
    // Define processEntries function
    function processEntries() {
      var subtotal = parseFloat(document.getElementById("subtotal").value);
      var taxRate = parseFloat(document.getElementById("taxRate").value);
      
      // Data validation
      if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
        alert("Subtotal must be > 0 and < 10000");
        return;
      }
      if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        alert("Tax Rate must be > 0 and < 12");
        return;
      }
      
      var taxAmount = subtotal * (taxRate / 100);
      var total = subtotal + taxAmount;
      
      document.getElementById("salesTax").value = taxAmount.toFixed(2);
      document.getElementById("total").value = total.toFixed(2);
    }
  
    // Attach processEntries to Calculate button
    document.getElementById("calculate").addEventListener("click", function () {
      processEntries();
      document.getElementById("subtotal").focus(); // Move cursor to Subtotal field
    });
  
    // Add event handler for Clear button
    document.getElementById("clear").addEventListener("click", function () {
      var inputs = document.querySelectorAll("input[type='text']");
      inputs.forEach(function (input) {
        input.value = "";
      });
      document.getElementById("subtotal").focus(); // Move cursor to Subtotal field
    });
  
    // Add event handlers for Subtotal and Tax Rate text boxes
    document.getElementById("subtotal").addEventListener("click", clearTextbox);
    document.getElementById("taxRate").addEventListener("click", clearTextbox);
  
    // Function to clear text box
    function clearTextbox() {
      this.value = "";
    }
  });
  