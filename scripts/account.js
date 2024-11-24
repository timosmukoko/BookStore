// account.js

// Retrieve the username from localStorage
const username = localStorage.getItem('username');

// Display the username on the account page
if (username) {
    document.getElementById('user-display').textContent = username;
    document.getElementById('user-display-1').textContent = username;
} else {
    // If no username is found, redirect to the login page
    alert('Please log in first!');
    window.location.href = 'index.html';
}

// Logout functionality
document.getElementById('logout-btn').addEventListener('click', () => {
    // Remove the username from localStorage
    localStorage.removeItem('username');

    // Redirect to the login page
    window.location.href = 'login.html';
});

