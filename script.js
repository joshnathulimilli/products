function getStoredUsers(){
    try {
        let stored = localStorage.getItem("registeredUsers");
        return stored ? JSON.parse(stored) : {};
    } catch(error) {
        localStorage.removeItem("registeredUsers");
        return {};
    }
}

function saveStoredUsers(users){
    localStorage.setItem("registeredUsers", JSON.stringify(users));
}

function registerUser(){
    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("registerEmail").value.trim().toLowerCase();
    let password = document.getElementById("registerPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if(!fullName || !email || !password || !confirmPassword){
        alert("Please fill in all registration fields.");
        return;
    }

    if(password.length < 6){
        alert("Password must be at least 6 characters long.");
        return;
    }

    if(password !== confirmPassword){
        alert("Passwords do not match.");
        return;
    }

    let users = getStoredUsers();
    if(users[email]){
        alert("This email is already registered. Please login instead.");
        return;
    }

    users[email] = {name:fullName,password:password};
    saveStoredUsers(users);
    alert("Account created successfully. Please login.");
    window.location.href = "index.html";
}

function loginUser(){
    let email = document.getElementById("email").value.trim().toLowerCase();
    let password = document.getElementById("password").value;
    let users = getStoredUsers();
    let stored = users[email];

    if(!email || !password){
        alert("Please fill in both email and password.");
        return;
    }

    if(!stored || stored.password !== password){
        alert("Invalid email or password. Please register or try again.");
        return;
    }

    localStorage.setItem("loggedInUser", email);
    window.location.href = "home.html";
}

function logout(){
    localStorage.removeItem("loggedInUser");
}

function checkAuth(){
    if(document.body.dataset.auth === "required" && !localStorage.getItem("loggedInUser")){
        window.location.href = "index.html";
    }
}

function updateAuthLink(){
    let logoutLink = document.getElementById("logoutLink");

    if(!logoutLink){
        return;
    }

    if(localStorage.getItem("loggedInUser")){
        logoutLink.textContent = "Logout";
        logoutLink.href = "index.html";
    } else {
        logoutLink.textContent = "Login";
        logoutLink.href = "index.html";
    }
}

function togglePassword(){
    let password = document.getElementById("password");
    let toggle = document.getElementById("togglePassword");

    if(password.type === "password"){
        password.type = "text";
        toggle.textContent = "Hide";
        toggle.setAttribute("aria-label", "Hide password");
    } else {
        password.type = "password";
        toggle.textContent = "Show";
        toggle.setAttribute("aria-label", "Show password");
    }
}

function submitContact(){
    let name = document.getElementById("contactName").value.trim();
    let email = document.getElementById("contactEmail").value.trim();
    let subject = document.getElementById("contactSubject").value.trim();
    let message = document.getElementById("contactMessage").value.trim();

    if(!name || !email || !subject || !message){
        alert("Please fill in all fields.");
        return;
    }

    alert("Thank you for your message! We will get back to you soon.");
    document.getElementById("contactForm").reset();
}

function addToCart(event){
    let productName = event.target.closest(".card").querySelector("h3").textContent;
    alert(productName + " added to cart.");
}

document.addEventListener("DOMContentLoaded", function(){
    checkAuth();
    updateAuthLink();

    let loginForm = document.getElementById("loginForm");
    let registerForm = document.getElementById("registerForm");
    let contactForm = document.getElementById("contactForm");
    let toggle = document.getElementById("togglePassword");
    let logoutLink = document.getElementById("logoutLink");
    let cartButtons = document.querySelectorAll(".cart-btn");

    if(loginForm){
        loginForm.addEventListener("submit", function(event){
            event.preventDefault();
            loginUser();
        });
    }

    if(registerForm){
        registerForm.addEventListener("submit", function(event){
            event.preventDefault();
            registerUser();
        });
    }

    if(contactForm){
        contactForm.addEventListener("submit", function(event){
            event.preventDefault();
            submitContact();
        });
    }

    if(toggle){
        toggle.addEventListener("click", togglePassword);
    }

    if(logoutLink){
        logoutLink.addEventListener("click", logout);
    }

    cartButtons.forEach(function(button){
        button.addEventListener("click", addToCart);
    });
});
