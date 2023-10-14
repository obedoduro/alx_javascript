document.addEventListener('DOMContentLoaded', function () {
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('email');
    const errorElement = document.getElementById('error');

    emailForm.addEventListener('submit', function (e) {
        const email = emailInput.value;
        if (!validateEmail(email)) {
            errorElement.textContent = "Please enter a valid email address.";
            e.preventDefault(); // Prevent form submission
        }
    });

    function validateEmail(email) {
        // Regular expression to check the email format
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
});
