// const books = [

//     {title:"Computer and Information Security Handbook",author:"John R. Vacca", price:" EUR 199.97",genre:"computing & it",img:src="../images/img1.jpg"},
//     {title:"Probabilistic Machine Learning ",author:"Kevin P. Murphy", price:" EUR 105",genre:"technology",img:src="../images/img2.jpg"},
//     {title:"Space Mathematics: Math Problems Based on Space Science ",author:"Kastner Kastner", price:" EUR 17.13",genre:"mathematics & science",img:src="../images/img3.jpg"},
//     {title:"Cracking the MRCS Part A  ",author:"Olivia A M Smith", price:" EUR 56.8",genre:"medicine",img:src="../images/img4.jpg"},
//     {title:"The Science of the Earth: The Secrets of Our Planet Revealed",author:"Chris Packham", price:" EUR 23.25",genre:"earth sciences",img:src="../images/img5.jpg"},
//     {title:"Mathematics for Economics and Finance: Methods and Modelling  ",author:"Martin Anthon", price:" EUR 46.71",genre:"economics & finance",img:src="../images/img6.jpg"},
//     {title:"Essentials of Irish ",author:"Dáithí Mac Cárthaigh", price:" EUR 36.34",genre:"law",img:src="../images/img7.jpg"},
//     {title:"The Usborne Book of the Future  ",author:"Kenneth Gatland and David Jefferis", price:" EUR 12.05",genre:"sci-fi",img:src="../images/img8.jpg"},
//     {title:"An Introduction to Literature, Criticism and Theory ",author:"Andrew Bennett  and Nicholas Royle", price:" EUR 27.11",genre:"literature & literary studies",img:src="../images/img9.jpg"},
//     {title:"The Ascent of Humanity: Civilization and the Human Sense of Self  ",author:"Charles Eisenstein", price:" EUR 20.45",genre:"humanities books",img:src="../images/img10.jpg"},
//     {title:"The Unfolding Of Language ",author:"Guy Deutscher", price:" EUR 12.01",genre:"language",img:src="../images/img11.jpg"},
//     {title:"Quantitative Social Science Data with R ",author:"Brian J. Fogarty", price:" EUR 46.53",genre:"social sciences",img:src="../images/img12.jpg"},
//     {title:"Art: The Definitive Visual Guide",author:"Andrew Graham Dixon", price:" EUR 35.1",genre:"arts books",img:src="../images/img13.jpg"},
//     {title:"The Dark Side of the Mind: True Stories from My Life as a Forensic Psychologist",author:"Kerry Daynes", price:" EUR 7.74",genre:"biography & true stories",img:src="../images/img14.jpg"},
//     {title:"AQA AS and A Level English Language Student Book",author:"Dan Clayton and Angela Goddard", price:" EUR 32.34",genre:"english language teaching",img:src="../images/img15.jpg"},
//     {title:"The Economics of Health and Health Care ",author:"Sherman Folland and Allen Charles Goodman", price:" EUR 71.18",genre:"health & personal development",img:src="../images/img16.jpg"},
//     {title:"The HBD Cookbook: Life-changing recipes for long-term health and perfect weight",author:"Petronella Ravenshear", price:" EUR 12.02",genre:"lifestyle, cooking & leisure",img:src="../images/img17.jpg"},
//     {title:"Othello: A Routledge Study Guide and Sourcebook ",author:"Andrew Hadfield", price:" EUR 22.24",genre:"reference books",img:src="../images/img18.jpg"}

//   ];

//   let cart = [];

//   function renderBooks(filterGenre = "all") {
//     const grid = $("#bookGrid");
//     grid.empty();
//     const filteredBooks = filterGenre === "all" ? books : books.filter(book => book.genre === filterGenre);
//     filteredBooks.forEach(book => {
//       const bookCard = `
//         <div class="col-md-3 mb-4">
//           <div class="card h-100">
//             <img src="${book.img}" class="card-img-top" alt="${book.title}">
//             <div class="card-body">
//               <h5 class="card-title">${book.title}</h5>
//               <p class="card-text">Author: ${book.author}</p>
//               <p class="card-text">Price: €${book.price}</p>
//               <button class="btn btn-primary add-to-cart" data-title="${book.title}">Add to Cart</button>
//             </div>
//           </div>
//         </div>`;
//       grid.append(bookCard);
//     });
//   }

//   function updateCartDisplay() {
//     const cartItemsDiv = $("#cartItems");
//     const cartCount = $("#cartCount");
//     if (cart.length === 0) {
//       cartItemsDiv.html("Your cart is empty.");
//       cartCount.text(0);
//     } else {
//       const itemsHtml = cart.map(item => `<div>${item}</div>`).join("");
//       cartItemsDiv.html(itemsHtml);
//       cartCount.text(cart.length);
//     }
//   }

//   $(document).ready(function() {
//     // Render all books initially
//     renderBooks();

//     // Genre Click Event
//     $(".genre-item").click(function() {
//       $(".genre-item").removeClass("active");
//       $(this).addClass("active");
//       const genre = $(this).data("genre");
//       renderBooks(genre);
//     });

//     // Add to Cart
//     $(document).on("click", ".add-to-cart", function() {
//       const bookTitle = $(this).data("title");
//       cart.push(bookTitle);
//       updateCartDisplay();
//     });

//     // Clear Cart
//     $("#clearCart").click(function() {
//       cart = [];
//       updateCartDisplay();
//     });

//     // Checkout button logic
//     $("#checkoutButton").click(function () {
//     if (cart.length > 0) {
//         alert(" Redirecting to Bookstore checkout.");
//         window.location.href = "../html/checkoutPage.html"; 
//          } else {
//                 alert("Your cart is empty. Please add items before checking out.");
//         }
    
//             });
//         });



const books=[{title:"Computer and Information Security Handbook",author:"John R. Vacca",price:" EUR 199.97",genre:"computing & it",img:src="../images/img1.jpg"},{title:"Probabilistic Machine Learning ",author:"Kevin P. Murphy",price:" EUR 105",genre:"technology",img:src="../images/img2.jpg"},{title:"Space Mathematics: Math Problems Based on Space Science ",author:"Kastner Kastner",price:" EUR 17.13",genre:"mathematics & science",img:src="../images/img3.jpg"},{title:"Cracking the MRCS Part A \xa0",author:"Olivia A M Smith",price:" EUR 56.8",genre:"medicine",img:src="../images/img4.jpg"},{title:"The Science of the Earth: The Secrets of Our Planet Revealed",author:"Chris Packham",price:"\xa0EUR 23.25",genre:"earth sciences",img:src="../images/img5.jpg"},{title:"Mathematics for Economics and Finance: Methods and Modelling \xa0",author:"Martin Anthon",price:" EUR 46.71",genre:"economics & finance",img:src="../images/img6.jpg"},{title:"Essentials of Irish ",author:"D\xe1ith\xed Mac C\xe1rthaigh",price:" EUR 36.34",genre:"law",img:src="../images/img7.jpg"},{title:"The Usborne Book of the Future \xa0",author:"Kenneth Gatland\xa0and\xa0David Jefferis",price:" EUR 12.05",genre:"sci-fi",img:src="../images/img8.jpg"},{title:"An Introduction to Literature, Criticism and Theory ",author:"Andrew Bennett\xa0 and Nicholas Royle",price:" EUR 27.11",genre:"literature & literary studies",img:src="../images/img9.jpg"},{title:"The Ascent of Humanity: Civilization and the Human Sense of Self\xa0 ",author:"Charles Eisenstein",price:" EUR 20.45",genre:"humanities books",img:src="../images/img10.jpg"},{title:"The Unfolding Of Language ",author:"Guy Deutscher",price:" EUR 12.01",genre:"language",img:src="../images/img11.jpg"},{title:"Quantitative Social Science Data with R ",author:"Brian J. Fogarty",price:" EUR 46.53",genre:"social sciences",img:src="../images/img12.jpg"},{title:"Art: The Definitive Visual Guide",author:"Andrew Graham Dixon",price:" EUR 35.1",genre:"arts books",img:src="../images/img13.jpg"},{title:"The Dark Side of the Mind: True Stories from My Life as a Forensic Psychologist",author:"Kerry Daynes",price:" EUR 7.74",genre:"biography & true stories",img:src="../images/img14.jpg"},{title:"AQA AS and A Level English Language Student Book",author:"Dan Clayton and\xa0Angela Goddard",price:" EUR 32.34",genre:"english language teaching",img:src="../images/img15.jpg"},{title:"The Economics of Health and Health Care ",author:"Sherman Folland and Allen Charles Goodman",price:" EUR 71.18",genre:"health & personal development",img:src="../images/img16.jpg"},{title:"The HBD Cookbook: Life-changing recipes for long-term health and perfect weight",author:"Petronella Ravenshear",price:" EUR 12.02",genre:"lifestyle, cooking & leisure",img:src="../images/img17.jpg"},{title:"Othello: A Routledge Study Guide and Sourcebook ",author:"Andrew Hadfield",price:" EUR 22.24",genre:"reference books",img:src="../images/img18.jpg"}];let cart=[];function renderBooks(e="all"){let t=$("#bookGrid");t.empty();let i="all"===e?books:books.filter(t=>t.genre===e);i.forEach(e=>{let i=`
        <div class="col-md-3 mb-4">
          <div class="card h-100">
            <img src="${e.img}" class="card-img-top" alt="${e.title}">
            <div class="card-body">
              <h5 class="card-title">${e.title}</h5>
              <p class="card-text">Author: ${e.author}</p>
              <p class="card-text">Price: €${e.price}</p>
              <button class="btn btn-primary add-to-cart" data-title="${e.title}">Add to Cart</button>
            </div>
          </div>
        </div>`;t.append(i)})}function updateCartDisplay(){let e=$("#cartItems"),t=$("#cartCount");if(0===cart.length)e.html("Your cart is empty."),t.text(0);else{let i=cart.map(e=>`<div>${e}</div>`).join("");e.html(i),t.text(cart.length)}}$(document).ready(function(){renderBooks(),$(".genre-item").click(function(){$(".genre-item").removeClass("active"),$(this).addClass("active");let e=$(this).data("genre");renderBooks(e)}),$(document).on("click",".add-to-cart",function(){let e=$(this).data("title");cart.push(e),updateCartDisplay()}),$("#clearCart").click(function(){cart=[],updateCartDisplay()}),$("#checkoutButton").click(function(){cart.length>0?(alert(" Redirecting to Bookstore checkout."),window.location.href="../html/checkoutPage.html"):alert("Your cart is empty. Please add items before checking out.")})});