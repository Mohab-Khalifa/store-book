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