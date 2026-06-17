// Register Function
function reguser() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!name || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    // Email Validation
    let parts = email.split('@');
    let username = parts[0];
    let domain = parts[1];

    // Rule: Must end with @gmail.com
    if (domain !== "gmail.com") {
        alert("Email must end with @gmail.com");
        return;
    }

    // Rule: Length between 6 and 30 characters
    if (username.length < 6 || username.length > 30) {
        alert("Username must be between 6 and 30 characters long.");
        return;
    }

    // Rule: Only letters (a-z), numbers (0-9), and periods (.)
    // Rule: No underscores, dashes, or plus signs
    const validChars = /^[a-z0-9.]+$/i;
    if (!validChars.test(username)) {
        alert("Username can only contain letters, numbers, and periods.");
        return;
    }

    let user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

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
        
        localStorage.setItem("loginuser", JSON.stringify(registeredUser));
        alert("Login successful!");
        window.location.href = "home.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }   
}