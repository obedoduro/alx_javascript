document.addEventListener('DOMContentLoaded', function () {
    const dynamicForm = document.getElementById('dynamicForm');
    const numFields = document.getElementById('numFields');
    const inputContainer = document.getElementById('inputContainer');
    const errorElement = document.getElementById('error');

    numFields.addEventListener('change', function () {
        generateInputFields(parseInt(numFields.value));
    });

    dynamicForm.addEventListener('submit', function (e) {
        if (!validateForm()) {
            e.preventDefault(); // Prevent form submission
            errorElement.textContent = "Please fill in all fields.";
        }
    });

    function generateInputFields(num) {
        inputContainer.innerHTML = ''; // Clear the previous fields

        for (let i = 1; i <= num; i++) {
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.name = 'field' + i;
            inputField.placeholder = 'Field ' + i;
            inputContainer.appendChild(inputField);
        }
    }

    function validateForm() {
        const inputFields = inputContainer.querySelectorAll('input');
        for (const inputField of inputFields) {
            if (inputField.value.trim() === '') {
                return false; // Field is empty
            }
        }
        return true; // All fields are filled
    }
});
