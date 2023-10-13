document.getElementById("logInButton").addEventListener("click", setCookies);
document.getElementById("showCookiesButton").addEventListener("click", showCookies);

function setCookies() {
    const firstNameInput = document.getElementById("firstname");
    const emailInput = document.getElementById("email");

    const firstNameValue = firstNameInput.value;
    const emailValue = emailInput.value;

    // Calculate the expiration date 10 days from the current date
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 10);

    // Set cookies with an expiration date
    document.cookie = `firstname=${firstNameValue}; expires=${expirationDate.toUTCString()}`;
    document.cookie = `email=${emailValue}; expires=${expirationDate.toUTCString()}`;
}

function showCookies() {
    const cookies = document.cookie;
    const cookieContainer = document.getElementById("cookieContainer");

    const paragraph = document.createElement("p");
    paragraph.textContent = `Cookies: ${cookies}`;
    cookieContainer.appendChild(paragraph);
}
