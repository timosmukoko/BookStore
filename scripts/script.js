// Image Slider
//required('dotenv').config();
let currentIndex = 0;
const slides = document.querySelectorAll("#slider .slides img");
const totalSlides = slides.length;

function showSlide(index) {
    const slider = document.querySelector("#slider .slides");
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000);

//Login Form Validation

const maxAttempts = 3; //Maximum allowed login attempts
let attempts = 0;

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //Check if login attempts exceeded
    if (attempts >= maxAttempts) {
        document.getElementById('message').textContent = "Too many failed attempts. Login disabled.";
        document.getElementById('message').style.color = "red";
        return;
    }

    if (username === 'admin' && password === 'password') {

        localStorage.setItem("username", username);
        document.getElementById('massage').textContent = "Login successful! Redirecting...";
        document.getElementById('massage').style.color = "green";
        attempts = 0; // Reset attempts on success
        
        //Redirect after 2 seconds (2000 milliseconds)
        setTimeout(() => {
            window.location.href = 'account.html';
        }, 2000);

    } else {
        attempts++;
        const remainingAttempts = maxAttempts - attempts;
        document.getElementById("massage").textContent = `Invalid login. You have ${remainingAttempts} attempts remaining.`;
        document.getElementById('massage').style.color = "red";
        document.getElementById('username').value = ''; // clear user input
        document.getElementById('password').value = ''; // clear user input

        if (attempts >= maxAttempts) {
            document.getElementById('massage').textContent = "Too many failed attempts. Login disabled.";
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
        }
    }
});

// Search Functionality
document.getElementById('search-bar').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const title = product.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(query)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
});


