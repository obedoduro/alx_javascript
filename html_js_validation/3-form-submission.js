document.addEventListener('DOMContentLoaded', function () {
    const myForm = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const errorElement = document.getElementById('error');
    const successElement = document.getElementById('success');

    myForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        const name = nameInput.value;
        const email = emailInput.value;

        if (name.trim() === '' || email.trim() === '') {
            errorElement.textContent = "Please fill in all required fields.";
            successElement.textContent = ""; // Clear success message
        } else {
            errorElement.textContent = ""; // Clear error message
            successElement.textContent = "Form submitted successfully!";
        }
    });
});
