const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".cont");

left.addEventListener("mouseenter", e => {
  container.classList.add("hover-left");
});
left.addEventListener("mouseleave", e => {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", e => {
  container.classList.add("hover-right");
});
right.addEventListener("mouseleave", e => {
  container.classList.remove("hover-right");
});
