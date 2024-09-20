document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password are correct
    if (username === "user" && password === "password") {
        // Hide the login form
        document.querySelector('.login-container').style.display = 'none';
        // Show the website content
        document.getElementById('websiteContent').style.display = 'block';
    } else {
        alert("Invalid login credentials. Please use 'user' as username and 'password' as password.");
    }
});
