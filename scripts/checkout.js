document.querySelector("form").addEventListener("submit", function (event) {
    // form input values
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    const cardOwner = document.getElementById("cardOwner").value.trim();

    // Input validation
    const cardNumberPattern = /^\d{16}$/; // Exactly 16 digits
    const cvvPattern = /^\d{3}$/;         // Exactly 3 digits
    const namePattern = /^[a-zA-Z\s]+$/;  // Letters and spaces only

    // Validation flags
    let isValid = true;
    let errorMessage = "";
    let checkoutMessage ="";

    // Card Number validation
    if (!cardNumberPattern.test(cardNumber)) {
        isValid = false;
        errorMessage += "Card Number must be 16 digits.\n";
    }

    // CVV validation
    if (!cvvPattern.test(cvv)) {
        isValid = false;
        errorMessage += "CVV must be exactly 3 digits.\n";
    }

    // Card Owner Name validation
    if (!namePattern.test(cardOwner)) {
        isValid = false;
        errorMessage += "Card Owner Name must only contain letters and spaces.\n";
    }

    // Ensure all fields are filled
    if (!cardNumber || !cvv || !cardOwner) {
        isValid = false;
        errorMessage += "All fields are required.\n";
    }

    // Prevent form submission and show errors If validation fails,
    if (!isValid) {
        event.preventDefault(); // Prevent form submission
        alert(errorMessage);    // Show validation error messages
    } else {
        // If validation passes, show "system down" message
        event.preventDefault(); // Prevent submission temporarily for demonstration
        alert("The Payment system is down for the moment " + cardOwner + ". Please try again later."+ "THANK YOU.");
    }
    
});