const params = new URLSearchParams(window.location.search);
  const title = params.get("title");

  if (title) {
    document.getElementById("book-name").textContent = title;
  }

function displayImage(bookName) {
    const imageContainer = document.querySelector("#imageContainer")
    const li = document.createElement("li")
    li.innerHTML = `<img src="/Images/${bookName}Cover.jpg" alt="Picture of ${bookName} book cover.">`
    imageContainer.appendChild(li)
}

displayImage(title)

// async function uploadImage(e) {
//     const imageContainer = document.querySelector("#imageContainer")
//     const imageSearch = "Game of thrones book cover"
//     try {
//         const imageResp = await fetch(`https://pixabay.com/api/?key=54809996-f9e360964dd93e3680f1ab46b&q=${imageSearch}&image_type=photo`)
//         if (imageResp.ok){
//             imageData = await imageResp.json()
//             console.log(imageData.hits[0].previewURL);
//             const li = document.createElement("li")
//             li.innerHTML = `<img src="${imageData.hits[0].previewURL}" alt="Picture of ${imageSearch}">`
//             imageContainer.appendChild(li)
//         }else{
//             throw `Error: http status code = ${imageResp.status}`
//         }
//     }catch (err){
//         console.log(err);
//     }
// }

