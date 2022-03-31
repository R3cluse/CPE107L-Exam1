const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "admin") {
        alert("You have successfully logged in.");
        location.href="index.html";
    } 
    else if (username === "student1" && password === "1234") {
        alert("You have successfully logged in.");
        location.href="student_home.html";
    }
    else if (username === "teacher1" && password === "1234") {
        alert("You have successfully logged in.");
        location.href="teacher_home.html";
    }
    else {
        loginErrorMsg.style.opacity = 1;
    }
})