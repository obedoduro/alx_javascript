
function welcome(firstName, lastname) {

    let fullName = `${firstName}  ${lastname}`;

    function displayFullName() {
        alert(`Welcome ${fullName}!`);
    }
    displayFullName();
}
welcome('Holberton', 'School');