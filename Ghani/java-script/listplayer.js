document.getElementById("loadPlayers").addEventListener("click", () => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(players => {
        const list = document.getElementById("playerList");
        list.innerHTML = "";
        players.slice(0, 5).forEach(player => {
          const li = document.createElement("li");
          li.textContent = `${player.name} — ${player.company.name}`;
          list.appendChild(li);
        });
      })
      .catch(() => {
        alert("⚠️ Failed to load players from server!");
      });
  });

const playBtn = document.getElementById("playMusic");
const audio = document.getElementById("music");

playBtn.addEventListener("click", () => {
  console.log("button click");
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "Pause Music";
  } else {
    audio.pause();
    playBtn.textContent = "Play Music";
  }
});

console.log("music js loaded");

