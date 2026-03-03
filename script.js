const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const inputField = document.getElementById('input');

minusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue - 1;
});

plusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue + 1;
});
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
