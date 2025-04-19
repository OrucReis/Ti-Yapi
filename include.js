function loadHTML(id, file) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
      });
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    loadHTML("navbar", "navbar.html");
    loadHTML("footer", "footer.html");
  });
  