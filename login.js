const loginForm = document.querySelector(".auth-form");
const loginError = document.getElementById("login-error");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const email = loginForm.querySelector("input[type='email']").value.trim();
    const password = loginForm.querySelector("input[type='password']").value.trim();
    if (email === "" || password === "") {
        loginError.textContent = "Please fill all fields!";
        return;
    }

    if (password.length < 4) {
        loginError.textContent = "Password should be at least 4 characters!";
        return;
    }

    loginError.textContent = ""; 
    alert("Login Successful!");

    window.location.href = "index.html";
});
