// // Author: Timos
// //Login Form Validation

// const maxAttempts = 3; //Maximum allowed login attempts
// let attempts = 0;
// let users = [];

// // Fetch user data from the file. Using .gitignore Stop tracking users.json"
// fetch('users.json') // 
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Failed to load user data.");
//         }
//         return response.json();
//     })
//     .then(data => {
//         users = data;
//     })
//     .catch(error => {
//         console.error(error);
//         document.getElementById("message").textContent = "Error loading user data.";
//     });


// document.getElementById('login-form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // Validate user credentials
//     const validUser = users.find(user => user.username === username && user.password === password);

//     //Check if login attempts exceeded
//     if (attempts >= maxAttempts) {
//         document.getElementById('message').textContent = "Too many failed attempts. Wait 10 seconds...";
//         document.getElementById('message').style.color = "red";
//         return;
//     }

//     // if (username === 'admin' && password === 'password') 
//     if (validUser) {
//         localStorage.setItem("username", username);
//         document.getElementById('massage').textContent = "Login successful! Redirecting...";
//         document.getElementById('massage').style.color = "green";
//         attempts = 0; // Reset attempts on success

//         //Redirect after 2 seconds (2000 milliseconds)
//         setTimeout(() => {
//             window.location.href = 'account.html';
//         }, 2000);

//     } else {
//         attempts++;
//         const remainingAttempts = maxAttempts - attempts;
//         document.getElementById("massage").textContent = `Invalid login. You have ${remainingAttempts} attempts remaining.`;
//         document.getElementById('massage').style.color = "red";
//         document.getElementById('username').value = ''; // clear user input
//         document.getElementById('password').value = ''; // clear user input
//         //;

//         if (attempts >= maxAttempts) {
//             document.getElementById('massage').textContent = "Too many failed attempts. Wait 10 seconds...";
//             document.getElementById("username").disabled = true;
//             document.getElementById("password").disabled = true;
//             document.getElementById("loginButton").style.visibility = "hidden";

//             //refreshing the login page after 10 seconds 
//             setTimeout(() => {
//                 window.location.href = 'login.html';
//             }, 10000);
//         }
//     }
// });

const maxAttempts=3;let attempts=0,users=[];fetch("users.json").then(e=>{if(!e.ok)throw Error("Failed to load user data.");return e.json()}).then(e=>{users=e}).catch(e=>{console.error(e),document.getElementById("message").textContent="Error loading user data."}),document.getElementById("login-form").addEventListener("submit",function(e){e.preventDefault();let t=document.getElementById("username").value,s=document.getElementById("password").value,n=users.find(e=>e.username===t&&e.password===s);if(attempts>=3){document.getElementById("message").textContent="Too many failed attempts. Wait 10 seconds...",document.getElementById("message").style.color="red";return}if(n)localStorage.setItem("username",t),document.getElementById("massage").textContent="Login successful! Redirecting...",document.getElementById("massage").style.color="green",attempts=0,setTimeout(()=>{window.location.href="account.html"},2e3);else{attempts++;let a=3-attempts;document.getElementById("massage").textContent=`Invalid login. You have ${a} attempts remaining.`,document.getElementById("massage").style.color="red",document.getElementById("username").value="",document.getElementById("password").value="",attempts>=3&&(document.getElementById("massage").textContent="Too many failed attempts. Wait 10 seconds...",document.getElementById("username").disabled=!0,document.getElementById("password").disabled=!0,document.getElementById("loginButton").style.visibility="hidden",setTimeout(()=>{window.location.href="login.html"},1e4))}});