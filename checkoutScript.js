const params = new URLSearchParams(window.location.search);
  const title = params.get("title");

  if (title) {
    document.getElementById("book-name").textContent = title;
  }