
const body = document.body;
const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  localStorage.setItem("theme", body.classList.contains("light") ? "light" : "dark");
});



const lazyImgs = document.querySelectorAll("img[data-src]");

lazyImgs.forEach(img => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        img.src = img.dataset.src;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });
  observer.observe(img);
});



const counterEl = document.getElementById("counter");
let target = +counterEl.dataset.target;
let count = 0;

let speed = 50;

function updateCounter(){
  if (count < target) {
    count += 123;
    counterEl.innerText = count;
    setTimeout(updateCounter, speed);
  } else {
    counterEl.innerText = target;
  }
}

updateCounter();
