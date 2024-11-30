// Author: Timos

const books = [
    { title: "Computer and Information Security Handbook", author: "John R. Vacca", price: " EUR 199.97", genre: "computing & it", img: "https://images-eu.ssl-images-amazon.com/images/I/51KNZoUbBjL._AC_UL400_SR300,400_.jpg" },
    { title: "Probabilistic Machine Learning ", author: "Kevin P. Murphy", price: " EUR 105", genre: "technology", img: "https://images-eu.ssl-images-amazon.com/images/I/71GaJ8soqhL._AC_UL400_SR300,400_.jpg" },
    { title: "Space Mathematics: Math Problems Based on Space Science ", author: "Kastner Kastner", price: " EUR 17.13", genre: "mathematics & science", img: "https://images-eu.ssl-images-amazon.com/images/I/810eICMpXaL._AC_UL400_SR300,400_.jpg" },
    { title: "Cracking the MRCS Part A  ", author: "Olivia A M Smith", price: " EUR 56.8", genre: "medicine", img: "https://images-eu.ssl-images-amazon.com/images/I/618rkGJoE5L._AC_UL400_SR300,400_.jpg" },
    { title: "The Science of the Earth: The Secrets of Our Planet Revealed", author: "Chris Packham", price: " EUR 23.25", genre: "earth sciences", img: "https://images-eu.ssl-images-amazon.com/images/I/91crBOULSoL._AC_UL400_SR300,400_.jpg" },
    { title: "Mathematics for Economics and Finance: Methods and Modelling  ", author: "Martin Anthon", price: " EUR 46.71", genre: "economics & finance", img: "https://m.media-amazon.com/images/I/6138NeSv0GL._AC_UY327_FMwebp_QL65_.jpg" }
];

const bookList = document.getElementById('book-list');

// Function to display books
function displayBooks(filteredBooks) {
    // Clear the current list
    bookList.innerHTML = "";
    filteredBooks.forEach(book => {
        const bookCard =
            `<div class="col-md-2">
                    <div class="card">
                        <img src="${book.img}" class="card-img-top" alt="${book.img}">
                        <div class="card-body">
                            <h5 class="card-title">"${book.title}</h5>
                            <p class="card-text">${book.genre}</p>
                            <a href="html/booksListingPage.html" class="btn btn-primary">Shop</a>
                        </div>
                    </div>
                </div>`
        bookList.innerHTML += bookCard;
    });
}
// // Call the function to display books on page load
displayBooks(books);

// Search function
function searchBooks() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();

    // Filter books based on the search input
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchInput)
    );

    // Display the filtered books
    displayBooks(filteredBooks);
    document.getElementById("home").style.display = "none";
    document.getElementById("slider").style.display = "none";
}

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
