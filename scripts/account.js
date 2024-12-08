// // Author: Timos
// // Retrieve the username from localStorage
// const username = localStorage.getItem('username');

// // Display the username on the account page
// if (username) {

//     const greetings = `<p>Hello ${username}</p>`;

//     const myAcc =
//         `<h2>Welcome, ${username}</h2>
//         <p>Your account details:</p>
//         <ul>
//             <li>Username: <strong>${username}</strong></li>
//             <li>Email: <strong>user@example.com</strong></li>
//             <li>Member since: <strong>2024</strong></li>
//         </ul>`;

//     document.getElementById('greetUser').innerHTML += greetings;
//     document.getElementById('user').innerHTML += myAcc;

// } else {
//     // If no username is found, redirect to the login page
//     alert('Please log in first!');
//     window.location.href = 'index.html';
// }

// // Logout functionality
// document.getElementById('logout-btn').addEventListener('click', () => {
//     // Remove the username from localStorage
//     localStorage.removeItem('username');

//     // Redirect to the login page
//     window.location.href = 'login.html';
// });

const username=localStorage.getItem("username");if(username){let e=`<p>Hello ${username}</p>`,n=`<h2>Welcome, ${username}</h2>
        <p>Your account details:</p>
        <ul>
            <li>Username: <strong>${username}</strong></li>
            <li>Email: <strong>user@example.com</strong></li>
            <li>Member since: <strong>2024</strong></li>
        </ul>`;document.getElementById("greetUser").innerHTML+=e,document.getElementById("user").innerHTML+=n}else alert("Please log in first!"),window.location.href="index.html";document.getElementById("logout-btn").addEventListener("click",()=>{localStorage.removeItem("username"),window.location.href="login.html"});