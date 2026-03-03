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

const searchBar = document.querySelector("#searchBar")

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



async function uploadImage(e) {
    const imageContainer = document.querySelector("#imageContainer")
    const imageSearch = "Game of thrones book cover"
    try {
        const imageResp = await fetch(`https://pixabay.com/api/?key=54809996-f9e360964dd93e3680f1ab46b&q=${imageSearch}&image_type=photo`)
        if (imageResp.ok){
            imageData = await imageResp.json()
            console.log(imageData.hits[0].previewURL);
            const li = document.createElement("li")
            li.innerHTML = `<img src="${imageData.hits[0].previewURL}" alt="Picture of ${imageSearch}">`
            imageContainer.appendChild(li)
        }else{
            throw `Error: http status code = ${imageResp.status}`
        }
    }catch (err){
        console.log(err);
    }
}


 
function displayImage(e) {
    const imageContainer = document.querySelector("#imageContainer")
    const li = document.createElement("li")
    // const bookName = e.target.bookName.innerHTML
    const bookName = "Eragon"
    li.innerHTML = `<img src="/Images/${bookName}Cover.jpg" alt="Picture of ${bookName} book cover.">`
    imageContainer.appendChild(li)
}
