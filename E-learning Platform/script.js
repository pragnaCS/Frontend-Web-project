// Register Function
function reguser() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!name || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    let parts = email.split('@');
    let username = parts[0];
    let domain = parts[1];

    if (domain !== "gmail.com") {
        alert("Email must end with @gmail.com");
        return;
    }

    if (username.length < 6 || username.length > 30) {
        alert("Username must be between 6 and 30 characters long.");
        return;
    }

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

    let registeredUser = JSON.parse(localStorage.getItem("user"));

    if (!registeredUser) {
        alert("No account found. Please register first.");
        return;
    }

    // Verify email first, then password for specific feedback
    if (registeredUser.email === email) {
        if (registeredUser.password === password) {
            localStorage.setItem("loginuser", JSON.stringify(registeredUser));
            alert("Login successful!");
            window.location.href = "home.html";
        } else {
            alert("Password invalid.");
        }
    } else {
        alert("Invalid email address.");
    }   
}

// Show the reset section
function showResetForm() {
    document.getElementById("resetSection").classList.remove("hidden");
}

// Logic to process the password update
function processReset() {
    let email = document.getElementById("resetEmail").value;
    let newPassword = document.getElementById("newPassword").value;
    let registeredUser = JSON.parse(localStorage.getItem("user"));

    // Check if account exists
    if (!registeredUser) {
        alert("No account found.");
        return;
    }

    // Verify the email
    if (registeredUser.email === email) {
        registeredUser.password = newPassword; // Update the password
        localStorage.setItem("user", JSON.stringify(registeredUser)); // Save updated object
        alert("Password updated successfully! You can now sign in.");
        
        document.getElementById("resetSection").classList.add("hidden");
        document.getElementById("loginemail").value = email; // Keep email for convenience
        document.getElementById("loginpassword").value = "";
    } else {
        alert("Email does not match our records.");
    }
}
