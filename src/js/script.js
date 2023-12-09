const section = document.querySelector(".our-skills");
const spans = document.querySelectorAll(".prog span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 100) {
    spans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
    spans.forEach((span) => {
      span.classList.add("active")
    });
  }
};
