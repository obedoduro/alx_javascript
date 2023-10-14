document.addEventListener('DOMContentLoaded', function () {
    const passwordForm = document.getElementById('passwordForm');
    const passwordInput = document.getElementById('password');
    const errorElement = document.getElementById('error');

    passwordForm.addEventListener('submit', function (e) {
        const password = passwordInput.value;
        if (!validatePassword(password)) {
            errorElement.textContent = "Password does not meet the criteria.";
            e.preventDefault(); // Prevent form submission
        }
    });

    function validatePassword(password) {
        const lengthRegex = /.{8,}/;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /\d/;
        const specialCharRegex = /[!@#$%^&*]/;

        return (
            lengthRegex.test(password) &&
            uppercaseRegex.test(password) &&
            lowercaseRegex.test(password) &&
            digitRegex.test(password) &&
            specialCharRegex.test(password)
        );
    }
});
