document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".js-toggle");

  toggleButton.addEventListener("click", function () {
    toggleButton.classList.toggle("added");
  });
});
