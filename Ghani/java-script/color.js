document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("colorBtn");
  if (!btn) return;

  const colors = [
    "#00F468",
    "#FF5733",
    "#1E90FF",
    "#FFD700",
    "#9B59B6",
    "#FF1493",
    "#00CED1",
    "#FF8C00",
    "#2ECC71"
  ];

  const wrapper = document.querySelector(".wrapper");
  const header = document.querySelector("header");
  if (!wrapper || !header) return;


  wrapper.style.transition = "background-color 0.8s ease";
  header.style.transition = "background-color 0.8s ease";

  btn.addEventListener("click", () => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    wrapper.style.backgroundColor = color;
    header.style.backgroundColor = color;
    console.log("Wrapper and header background color:", color);
  });
});
