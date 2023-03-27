const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login");

loginButton.addEventListener("click", () => {
  chrome.storage.local.get("password", ({ password }) => {
    if (passwordInput.value === password) {
      // Authentication successful
      // TODO: Add logic to display saved passwords
    } else {
      // Authentication failed
      alert("Incorrect password. Please try again.");
    }
  });
});
