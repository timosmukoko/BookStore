const books = [

    {title:"Computer and Information Security Handbook",author:"John R. Vacca", price:" EUR 199.97",genre:"computing & it",img:"https://images-eu.ssl-images-amazon.com/images/I/51KNZoUbBjL._AC_UL400_SR300,400_.jpg"},
    {title:"Probabilistic Machine Learning ",author:"Kevin P. Murphy", price:" EUR 105",genre:"technology",img:"https://images-eu.ssl-images-amazon.com/images/I/71GaJ8soqhL._AC_UL400_SR300,400_.jpg"},
    {title:"Space Mathematics: Math Problems Based on Space Science ",author:"Kastner Kastner", price:" EUR 17.13",genre:"mathematics & science",img:"https://images-eu.ssl-images-amazon.com/images/I/810eICMpXaL._AC_UL400_SR300,400_.jpg"},
    {title:"Cracking the MRCS Part A  ",author:"Olivia A M Smith", price:" EUR 56.8",genre:"medicine",img:"https://images-eu.ssl-images-amazon.com/images/I/618rkGJoE5L._AC_UL400_SR300,400_.jpg"},
    {title:"The Science of the Earth: The Secrets of Our Planet Revealed",author:"Chris Packham", price:" EUR 23.25",genre:"earth sciences",img:"https://images-eu.ssl-images-amazon.com/images/I/91crBOULSoL._AC_UL400_SR300,400_.jpg"},
    {title:"Mathematics for Economics and Finance: Methods and Modelling  ",author:"Martin Anthon", price:" EUR 46.71",genre:"economics & finance",img:"https://m.media-amazon.com/images/I/6138NeSv0GL._AC_UY327_FMwebp_QL65_.jpg"},
    {title:"Essentials of Irish ",author:"Dáithí Mac Cárthaigh", price:" EUR 36.34",genre:"law",img:"https://images-eu.ssl-images-amazon.com/images/I/41eS1ctMSaL._AC_UL400_SR300,400_.jpg"},
    {title:"The Usborne Book of the Future  ",author:"Kenneth Gatland and David Jefferis", price:" EUR 12.05",genre:"sci-fi",img:"https://images-eu.ssl-images-amazon.com/images/I/81JHgTFeZTL._AC_UL400_SR300,400_.jpg"},
    {title:"An Introduction to Literature, Criticism and Theory ",author:"Andrew Bennett  and Nicholas Royle", price:" EUR 27.11",genre:"literature & literary studies",img:"https://images-eu.ssl-images-amazon.com/images/I/81OyNVID54L._AC_UL400_SR300,400_.jpg"},
    {title:"The Ascent of Humanity: Civilization and the Human Sense of Self  ",author:"Charles Eisenstein", price:" EUR 20.45",genre:"humanities books",img:"https://images-eu.ssl-images-amazon.com/images/I/81x5rYmTCAL._AC_UL400_SR300,400_.jpg"},
    {title:"The Unfolding Of Language ",author:"Guy Deutscher", price:" EUR 12.01",genre:"language",img:"https://images-eu.ssl-images-amazon.com/images/I/81emDTJDH7L._AC_UL400_SR300,400_.jpg"},
    {title:"Quantitative Social Science Data with R ",author:"Brian J. Fogarty", price:" EUR 46.53",genre:"social sciences",img:"https://images-eu.ssl-images-amazon.com/images/I/71QdFhhlJkL._AC_UL400_SR300,400_.jpg"},
    {title:"Art: The Definitive Visual Guide",author:"Andrew Graham Dixon", price:" EUR 35.1",genre:"arts books",img:"https://images-eu.ssl-images-amazon.com/images/I/616vYWwf0aL._AC_UL400_SR300,400_.jpg"},
    {title:"The Dark Side of the Mind: True Stories from My Life as a Forensic Psychologist",author:"Kerry Daynes", price:" EUR 7.74",genre:"biography & true stories",img:"https://images-eu.ssl-images-amazon.com/images/I/81GzRyo-GDL._AC_UL400_SR300,400_.jpg"},
    {title:"AQA AS and A Level English Language Student Book",author:"Dan Clayton and Angela Goddard", price:" EUR 32.34",genre:"english language teaching",img:"https://images-eu.ssl-images-amazon.com/images/I/71gMisfJMlL._AC_UL400_SR300,400_.jpg"},
    {title:"The Economics of Health and Health Care ",author:"Sherman Folland and Allen Charles Goodman", price:" EUR 71.18",genre:"health & personal development",img:"https://images-eu.ssl-images-amazon.com/images/I/61soNCyS4JL._AC_UL400_SR300,400_.jpg"},
    {title:"The HBD Cookbook: Life-changing recipes for long-term health and perfect weight",author:"Petronella Ravenshear", price:" EUR 12.02",genre:"lifestyle, cooking & leisure",img:"https://images-eu.ssl-images-amazon.com/images/I/71zMk4ujb1L._AC_UL400_SR300,400_.jpg"},
    {title:"Othello: A Routledge Study Guide and Sourcebook ",author:"Andrew Hadfield", price:" EUR 22.24",genre:"reference books",img:"https://m.media-amazon.com/images/I/31eO3x5MgTL._SY445_SX342_.jpg"}

  ];

  let cart = [];

  function renderBooks(filterGenre = "all") {
    const grid = $("#bookGrid");
    grid.empty();
    const filteredBooks = filterGenre === "all" ? books : books.filter(book => book.genre === filterGenre);
    filteredBooks.forEach(book => {
      const bookCard = `
        <div class="col-md-3 mb-4">
          <div class="card h-100">
            <img src="${book.img}" class="card-img-top" alt="${book.title}">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">Author: ${book.author}</p>
              <p class="card-text">Price: €${book.price}</p>
              <button class="btn btn-primary add-to-cart" data-title="${book.title}">Add to Cart</button>
            </div>
          </div>
        </div>`;
      grid.append(bookCard);
    });
  }

  function updateCartDisplay() {
    const cartItemsDiv = $("#cartItems");
    const cartCount = $("#cartCount");
    if (cart.length === 0) {
      cartItemsDiv.html("Your cart is empty.");
      cartCount.text(0);
    } else {
      const itemsHtml = cart.map(item => `<div>${item}</div>`).join("");
      cartItemsDiv.html(itemsHtml);
      cartCount.text(cart.length);
    }
  }

  $(document).ready(function() {
    // Render all books initially
    renderBooks();

    // Genre Click Event
    $(".genre-item").click(function() {
      $(".genre-item").removeClass("active");
      $(this).addClass("active");
      const genre = $(this).data("genre");
      renderBooks(genre);
    });

    // Add to Cart
    $(document).on("click", ".add-to-cart", function() {
      const bookTitle = $(this).data("title");
      cart.push(bookTitle);
      updateCartDisplay();
    });

    // Clear Cart
    $("#clearCart").click(function() {
      cart = [];
      updateCartDisplay();
    });
  });