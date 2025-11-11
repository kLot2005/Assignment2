document.addEventListener("DOMContentLoaded", () => {
  console.log("✅");

  const searchForm = document.querySelector("form[name='search']");
  const searchInput = document.querySelector("input[name='search']");
  const submitBtn = searchForm.querySelector('input[type="submit"]');
  const hillSearch = document.querySelector(".hill_search");

  if (!searchForm || !searchInput || !submitBtn || !hillSearch) {
    console.error("⚠️");
    return;
  }


  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes spin {
      100% { transform: rotate(360deg); }
    }

    .spinner {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
      border: 2px solid #fff;
      border-top: 2px solid #C50525;
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
      display: none;
    }

    #suggestBox {
      position: absolute;
      top: 100%; /* делает, чтобы шло сразу под полем */
      left: 0;
      background: #111;
      border: 1px solid #C50525;
      border-radius: 8px;
      padding: 5px;
      list-style: none;
      margin-top: 8px;
      display: none;
      width: 100%; /* по ширине поля */
      color: #fff;
      z-index: 1000;
    }

    #suggestBox li {
      padding: 6px 10px;
      cursor: pointer;
      border-radius: 5px;
      transition: 0.2s;
    }

    #suggestBox li:hover {
      background: #C50525;
      color: #000;
    }
  `;
  document.head.appendChild(style);


  hillSearch.style.position = "relative";


  const spinner = document.createElement("div");
  spinner.classList.add("spinner");
  hillSearch.appendChild(spinner);


  const suggestBox = document.createElement("ul");
  suggestBox.id = "suggestBox";
  hillSearch.appendChild(suggestBox);


  const suggestions = [
    "Lionel Messi",
    "Cristiano Ronaldo",
    "Kylian Mbappe",
    "Neymar Jr",
    "Erling Haaland",
    "Kevin De Bruyne",
    "Luka Modric",
    "Karim Benzema",
    "Mohamed Salah",
    "Robert Lewandowski"
  ];


  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    suggestBox.innerHTML = "";

    if (!query) {
      suggestBox.style.display = "none";
      return;
    }

    const matched = suggestions.filter(name =>
      name.toLowerCase().includes(query)
    );

    if (matched.length === 0) {
      suggestBox.style.display = "none";
      return;
    }

    matched.forEach(name => {
      const li = document.createElement("li");
      li.textContent = name;
      li.addEventListener("click", () => {
        searchInput.value = name;
        suggestBox.style.display = "none";
        searchInput.focus();
      });
      suggestBox.appendChild(li);
    });

    suggestBox.style.display = "block";
  });


  document.addEventListener("click", (e) => {
    if (!hillSearch.contains(e.target)) {
      suggestBox.style.display = "none";
    }
  });


  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (!query) return;


    spinner.style.display = "block";
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.6";


    setTimeout(() => {
      spinner.style.display = "none";
      submitBtn.disabled = false;
      submitBtn.style.opacity = "1";

      const wikiUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(query)}`;
      window.open(wikiUrl, "_blank");
    }, 2000);
  });
});


// Part 2
window.addEventListener("scroll", () => {
  const scrollBar = document.getElementById("scrollBar");
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  scrollBar.style.width = scrollPercent + "%";
});

const bar = document.createElement("div");
bar.id = "scrollBar";
bar.style.position = "fixed";
bar.style.top = "0";
bar.style.left = "0";
bar.style.height = "5px";
bar.style.background = "#C50525";
bar.style.width = "0";
bar.style.zIndex = "9999";
bar.style.transition = "width 0.2s linear";
document.body.appendChild(bar);

function animateCounter() {
  const counter = document.getElementById("counter");
  if (!counter) return;

  const target = +counter.getAttribute("data-target");
  let count = 0;
  const speed = 30;

  const update = setInterval(() => {
    count += Math.ceil(target / 100);
    if (count >= target) {
      count = target;
      clearInterval(update);
    }
    counter.textContent = count;
  }, speed);
}


window.addEventListener("scroll", () => {
  const counter = document.getElementById("counter");
  if (!counter) return;
  const pos = counter.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (pos < windowHeight - 50 && counter.textContent === "0") {
    animateCounter();
  }
});

// Part 3
function showTempMessage(text, color = "#C50525") {
  const msg = document.createElement("div");
  msg.textContent = text;
  Object.assign(msg.style, {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    background: color,
    color: "#000",
    padding: "10px 20px",
    borderRadius: "8px",
    fontWeight: "600",
    zIndex: "9999",
    opacity: "0",
    transition: "opacity 0.3s ease",
  });
  document.body.appendChild(msg);


  setTimeout(() => (msg.style.opacity = "1"), 50);


  setTimeout(() => {
    msg.style.opacity = "0";
    setTimeout(() => msg.remove(), 500);
  }, 2000);
}


const anyForm = document.querySelector("form[name='search']");
if (anyForm) {
  anyForm.addEventListener("submit", () => {
    showTempMessage("Form submitted!");
  });
}


document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const text = btn.getAttribute("data-text") || btn.textContent;
    try {
      await navigator.clipboard.writeText(text);
      const original = btn.innerHTML;
      btn.innerHTML = "✅ Copied!";
      btn.style.color = "#00f468";
      setTimeout(() => {
        btn.innerHTML = original;
        btn.style.color = "";
      }, 1500);
    } catch (err) {
      console.error("Clipboard error:", err);
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img[data-src]");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute("data-src");
        img.onload = () => img.classList.add("loaded");
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => observer.observe(img));
});

