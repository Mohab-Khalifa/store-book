// const minusButton = document.getElementById('minus');
// const plusButton = document.getElementById('plus');
// const inputField = document.getElementById('input');

// minusButton.addEventListener('click', event => {
//   event.preventDefault();
//   const currentValue = Number(inputField.value) || 0;
//   inputField.value = currentValue - 1;
// });

// plusButton.addEventListener('click', event => {
//   event.preventDefault();
//   const currentValue = Number(inputField.value) || 0;
//   inputField.value = currentValue + 1;
// });

searchBar = document.querySelector("#searchBar")

searchBar.addEventListener("submit", bookSearch)



function bookSearch(e) {
    e.preventDefault()
    searchString = e.target.searchInput.value
    console.log(searchString);
    const books = document.querySelectorAll(".bookItem")
    console.log(books);
    for (let i=0;i<books.length;i++) {
        books[i].style.display = "none"
        if ((books[i].innerHTML.toLocaleLowerCase()).includes(searchString.toLowerCase())){
            books[i].style.display = "inline"
        }
    }
}   

// FICTION / NON-FICTION FILTER
const fictionCheck = document.querySelector("#fictionCheck");
const nonFictionCheck = document.querySelector("#nonFictionCheck");

// Function to apply genre filtering
function applyGenreFilter() {
    const books = document.querySelectorAll(".bookItem");

    books.forEach(book => {

        const fictionText = book.querySelector(".fictionOrNon")
            .innerText
            .toLowerCase()
            .replace(/\s|-/g, "");  // handles "Non - Fiction" into "nonfiction"

        let show = true;

        // If at least one checkbox is checked
        if (fictionCheck.checked || nonFictionCheck.checked) {

            show = false; // assume hidden unless matched

            if (fictionCheck.checked && fictionText === "fiction") {
                show = true;
            }
            if (nonFictionCheck.checked && fictionText === "nonfiction") {
                show = true;
            }
        }
        book.style.display = show ? "inline" : "none"; // If 'show' is true, display the book; if false, hide it
    });
}

// Run filter when either checkbox changes
fictionCheck.addEventListener("change", applyGenreFilter);
nonFictionCheck.addEventListener("change", applyGenreFilter);


// AGE RATING FILTERS 
const childrenCheck = document.querySelector("#childrenCheck");
const teenCheck = document.querySelector("#teenCheck");
const adultCheck = document.querySelector("#adultCheck");

function applyAgeFilter() {
    const books = document.querySelectorAll(".bookItem");

    books.forEach(book => {
        
        const ageText = book.querySelector(".ageRating")
        .innerText
        .toLowerCase()
        .trim() //removes whitespace

        let show = true;

        if (childrenCheck.checked || teenCheck.checked || adultCheck.checked) {
            show = false;

            if (childrenCheck.checked && ageText === "children") {
                show = true;
            }
            if (teenCheck.checked && ageText === "teen") {
                show = true;
            }
            if (adultCheck.checked && ageText === "adult") {
                show = true;
            }
            book.style.display = show ? "inline" : "none"; // If 'show' is true, display the book; if false, hide it
        }
    })
}

// Run filter when either checkbox changes
childrenCheck.addEventListener("change", applyAgeFilter);
teenCheck.addEventListener("change", applyAgeFilter);
adultCheck.addEventListener("change", applyAgeFilter)
