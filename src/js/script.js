"use strict";

const skillsSection = document.querySelector(".our-skills");
const spans = document.querySelectorAll(".prog span");
const nums = document.querySelectorAll(".stats .box .number");
const numsSection = document.querySelector(".stats");
let countingStarted = false;

window.onscroll = function () {
  // Skills Section Animation
  if (isElementInViewport(skillsSection, 100)) {
    animateSkillsSection(spans);
  }

  // Numbers Counting Animation
  if (isElementInViewport(numsSection, 400) && !countingStarted) {
    startCountingAnimation(nums);
    countingStarted = true;
  }
};

function isElementInViewport(element, offset) {
  return window.scrollY >= element.offsetTop - offset;
}

function animateSkillsSection(spans) {
  spans.forEach((span) => {
    span.style.width = span.dataset.progress;
    span.classList.add("active");
  });
}

function startCountingAnimation(numbers) {
  numbers.forEach((num) => startCount(num));
}

function startCount(targetElement) {
  const goal = targetElement.dataset.goal;

  let count = setInterval(() => {
    targetElement.textContent++;

    if (targetElement.textContent === goal) {
      clearInterval(count);
    }
  }, 1500 / goal);
}

// Change hero background image
const hero = document.querySelector(".landing");

const heroImages = ["landing-02.jpg", "landing-03.jpg", "landing-04.jpg"];

const prevBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
const dotsSpans = document.querySelectorAll(".landing .bullets li");

let currentImageIndex = 0;
let lastActiveSpan = dotsSpans[0];
dotsSpans[0].classList.add("active");

prevBtn.addEventListener("click", () => {
  currentImageIndex =
    (currentImageIndex - 1 + heroImages.length) % heroImages.length;
  hero.style.backgroundImage = `url("./src/images/${heroImages[currentImageIndex]}")`;

  lastActiveSpan.classList.remove("active");
  dotsSpans[currentImageIndex].classList.add("active");
  lastActiveSpan = dotsSpans[currentImageIndex];
});

nextBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % heroImages.length;
  hero.style.backgroundImage = `url("./src/images/${heroImages[currentImageIndex]}")`;

  lastActiveSpan.classList.remove("active");
  dotsSpans[currentImageIndex].classList.add("active");
  lastActiveSpan = dotsSpans[currentImageIndex];
});

dotsSpans.forEach((span, index) => {
  span.addEventListener("click", () => {
    lastActiveSpan.classList.remove("active");
    span.classList.add("active");
    lastActiveSpan = span;

    currentImageIndex = index;
    hero.style.backgroundImage = `url("./src/images/${heroImages[currentImageIndex]}")`;
  });
});
