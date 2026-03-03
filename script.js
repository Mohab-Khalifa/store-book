
e.addEventListener("submit", bookSearch)

function searchEvent (){

}

function bookSearch(e) {
    searchString = e.target.searchBar.value
    const books = document.querySelectorAll(".bookItem")
    books.style.display = "none"
    for (let i=0;i<books.length;i++) {
        if (books[i].includes(searchString)){
            books[i].style.display = "flex"
        }
    }
}