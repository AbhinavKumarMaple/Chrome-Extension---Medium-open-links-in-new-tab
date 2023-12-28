console.log("Your extension is working");

// content.js
window.onload = function () {
  // Select all anchor (a) elements inside the div with class "dx s"
  const container = document.querySelector(".dx.s");
  if (container) {
    container.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (event) => {
        // Open the link in a new tab
        window.open(link.href, "_blank");

        // Prevent the default link behavior (opening in the same tab)
        event.preventDefault();
      });
    });
  }
};
