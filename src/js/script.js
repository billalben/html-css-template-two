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
