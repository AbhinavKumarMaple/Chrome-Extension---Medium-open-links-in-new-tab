console.log("your extension is working");

// content.js
window.onload = function () {
  // Select all anchor (a) elements on the page

  // Loop through each link and add a click event listener
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => {
      // Open the link in a new tab
      window.open(link.href, "_blank");

      // Prevent the default link behavior (opening in the same tab)
      event.preventDefault();
    });
  });
};
