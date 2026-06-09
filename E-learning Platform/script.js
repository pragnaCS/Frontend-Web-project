// Register Function
function reguser() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Simple validation check to prevent empty submissions
    if (!name || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    let user = {
        name: name,
        email: email,
        password: password
    };
    
    // Save account credentials
    localStorage.setItem("user", JSON.stringify(user));
    
    // Clear any previous active login session so they are forced to go through the login page
    localStorage.removeItem("loginuser");
    
    alert("Registration successful! Please login to continue.");
    window.location.href = "login.html";
}

// Login Function
function loginuser() {
    let email = document.getElementById("loginemail").value;
    let password = document.getElementById("loginpassword").value;

    // Fetch the registered user from localStorage
    let registeredUser = JSON.parse(localStorage.getItem("user"));

    // Check if a user exists and credentials match perfectly
    if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
        // Set the active login session token
        localStorage.setItem("loginuser", JSON.stringify(registeredUser));
        alert("Login successful!");
        window.location.href = "home.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }   
}