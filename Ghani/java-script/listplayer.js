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

const music = document.getElementById("music");
  const btn = document.getElementById("playMusic");
  let playing = false;

  btn.addEventListener("click", () => {
    if (!playing) {
      music.play();
      btn.textContent = "⏸️ Pause Music";
      btn.classList.add("active-music");
    } else {
      music.pause();
      btn.textContent = "🎵 Play Music";
      btn.classList.remove("active-music");
    }
    playing = !playing;
  });