const playBtn = document.getElementById("playMusic");
const audio = document.getElementById("music");

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "Pause Music";
  } else {
    audio.pause();
    playBtn.textContent = "Play Music";
  }
});
