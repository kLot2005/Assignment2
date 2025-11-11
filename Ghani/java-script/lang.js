const langSelect = document.getElementById("langSelect");

const translations = {
  ru: {
    home: "Главная",
    liverpool: "Ливерпуль",
    chelsea: "Челси",
    basir: "Басир",
    login: "Войти",
    heroTitle: "История футбола",
    heroText:
      "Футбол — это древняя игра с мячом, ставшая мировым спортом. Возникнув в Англии, он распространился по всему миру, объединяя миллионы людей страстью и соревнованием.",
    heroButton: "Бесплатная регистрация",
    changeBg: "Изменить фон",
    bgButton: "Изменить фон",
    faqTitle: "Часто задаваемые вопросы о футболе",
    q1: "Что такое футбол?",
    a1: "Футбол — семейство командных видов спорта, чаще всего относящееся к соккеру, где две команды по 11 игроков пытаются забить мяч в ворота соперника, используя в основном ноги. Этот термин также может относиться к американскому футболу или регби.",
    q2: "Где возник футбол?",
    a2: "Современный футбол зародился в Великобритании в XIX веке, когда вид спорта был стандартизирован благодаря английским школам и созданию Футбольной ассоциации в 1863 году.",
    q3: "Какие самые крупные футбольные турниры?",
    a3: "Крупнейшие турниры: чемпионат мира ФИФА и Лига чемпионов УЕФА. Также важны континентальные чемпионаты и клубные турниры, такие как Кубок Либертадорес.",
    footer: "Создано: Бекарыс Бишимбай, Мохаммад Басир Аюби, Гани Муратбаев",
    musicSection: "🎵 Плеер",
    musicBtn: "Воспроизвести музыку",
    clubsTitle: "⚽ Топ клубы",
    fanTitle: "Фанаты",
    registerTitle: "Бесплатная регистрация",
    loginTitle: "Вход"
  },
  en: {
    home: "Home",
    liverpool: "Liverpool",
    chelsea: "Chelsea",
    basir: "Basir",
    login: "Login",
    heroTitle: "Football History",
    heroText:
      "Football is an ancient ball game that became a global sport. Originating in England, it spread worldwide, uniting millions of people with passion and competition.",
    heroButton: "Free Registration",
    changeBg: "Change Background",
    bgButton: "Change Background Color",
    faqTitle: "Football FAQ",
    q1: "What is football?",
    a1: "Football is a family of team sports, most commonly association football (soccer), where two teams of 11 players try to score by getting a ball into the opposing goal, primarily using their feet. It can also refer to American football or rugby.",
    q2: "Where did football originate?",
    a2: "Modern football originated in Britain in the 19th century, when it was standardized by English schools and the formation of The Football Association in 1863.",
    q3: "What are the biggest football tournaments?",
    a3: "The biggest tournaments are the FIFA World Cup and UEFA Champions League. Other major competitions include continental championships and club tournaments like Copa Libertadores.",
    footer: "Created by: Bishimbay Bekarys, MohammadBasir Ayoubi, Ghani Muratbaev",
    musicSection: "🎵 Music Player",
    musicBtn: "Play Music",
    clubsTitle: "⚽ Top Football Clubs",
    fanTitle: "Fan people",
    registerTitle: "Free Registration",
    loginTitle: "Login"
  },
  es: {
    home: "Inicio",
    liverpool: "Liverpool",
    chelsea: "Chelsea",
    basir: "Basir",
    login: "Iniciar sesión",
    heroTitle: "Historia del Fútbol",
    heroText:
      "El fútbol es un antiguo juego de pelota que se ha convertido en un deporte global. Originado en Inglaterra, se ha extendido por todo el mundo, uniendo a millones de personas.",
    heroButton: "Registro gratuito",
    changeBg: "Cambiar fondo",
    bgButton: "Cambiar color de fondo",
    faqTitle: "Preguntas frecuentes sobre fútbol",
    q1: "¿Qué es el fútbol?",
    a1: "El fútbol es un deporte donde dos equipos de once jugadores compiten para marcar goles usando un balón. También puede referirse al fútbol americano o al rugby.",
    q2: "¿Dónde se originó el fútbol?",
    a2: "El fútbol moderno comenzó en Inglaterra en el siglo XIX, cuando fue estandarizado por las escuelas inglesas y la formación de la Asociación de Fútbol en 1863.",
    q3: "¿Cuáles son los torneos más importantes?",
    a3: "Los torneos más importantes son la Copa del Mundo de la FIFA y la Liga de Campeones de la UEFA. Otros eventos importantes incluyen campeonatos continentales y torneos de clubes como la Copa Libertadores.",
    footer: "Creado por: Bishimbay Bekarys, MohammadBasir Ayoubi, Ghani Muratbaev",
    musicSection: "🎵 Reproductor de Música",
    musicBtn: "Reproducir música",
    clubsTitle: "⚽ Principales clubes de fútbol",
    fanTitle: "Fans",
    registerTitle: "Registro gratuito",
    loginTitle: "Iniciar sesión"
  }
};

// Безопасная установка текста
function safeSetText(root, selector, text) {
  if (!root) root = document;
  const el = root.querySelector(selector);
  if (el) el.textContent = text;
}

function setLanguage(lang) {
  const t = translations[lang] || translations.en;

  // Navigation
  safeSetText(document, "li.active a", t.home);
  safeSetText(document, 'a[href="../Ghani/Liverpool.html"]', t.liverpool);
  safeSetText(document, 'a[href="../Ghani/Chelsea.html"]', t.chelsea);
  safeSetText(document, 'a[href="../Basir/index.html"]', t.basir);

  const loginBtn = document.getElementById("navLoginBtn");
  if (loginBtn) loginBtn.textContent = t.login;
  else safeSetText(document, "li.btn a", t.login);

  // Hero
  const hero = document.querySelector(".hero");
  if (hero) {
    safeSetText(hero, "h1", t.heroTitle);
    safeSetText(hero, "p", t.heroText);
    const lgnBtn = hero.querySelector(".lgn");
    if (lgnBtn) lgnBtn.textContent = t.heroButton;
  }

  // Color section
  safeSetText(document, ".color-section h2", t.changeBg);
  const bgBtn = document.getElementById("colorBtn");
  if (bgBtn) bgBtn.textContent = t.bgButton;

  // FAQ
  const faqContainer = document.querySelector(".faq-conteiner");
  if (faqContainer) {
    const h2 = faqContainer.querySelector("h2");
    if (h2) h2.textContent = t.faqTitle;

    const summaries = faqContainer.querySelectorAll("summary");
    const answers = faqContainer.querySelectorAll("article p");
    if (summaries[0]) summaries[0].textContent = t.q1;
    if (answers[0]) answers[0].textContent = t.a1;
    if (summaries[1]) summaries[1].textContent = t.q2;
    if (answers[1]) answers[1].textContent = t.a2;
    if (summaries[2]) summaries[2].textContent = t.q3;
    if (answers[2]) answers[2].textContent = t.a3;
  }

  // Footer
  const footer = document.querySelector("footer.footer");
  if (footer) {
    const ps = footer.querySelectorAll("p");
    if (ps.length >= 2) ps[1].textContent = t.footer;
    else if (ps.length > 0) ps[ps.length - 1].textContent = t.footer;
  }

  // Music section
  const musicSec = document.querySelector(".music-section");
  if (musicSec) {
    safeSetText(musicSec, "h2", t.musicSection);
    const musicBtn = musicSec.querySelector("button");
    if (musicBtn) musicBtn.textContent = t.musicBtn;
  }

  // Clubs
  const clubsSec = document.querySelector(".clubs");
  if (clubsSec) {
    safeSetText(clubsSec, "h2", t.clubsTitle);
  }

  // Fan counter
  const fanTitle = document.querySelector('h2[style*="Fan"]');
  if (fanTitle) fanTitle.textContent = t.fanTitle;

  // Popups (registration and login)
  const registerPopup = document.querySelector("#popup h2");
  if (registerPopup) registerPopup.textContent = t.registerTitle;
  const loginPopup = document.querySelector("#loginPopup h2");
  if (loginPopup) loginPopup.textContent = t.loginTitle;

  // Сохраняем выбор
  try { localStorage.setItem("lang", lang); } catch(e){}
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  if (langSelect) langSelect.value = savedLang;
  setLanguage(savedLang);
});

// Слушатель селекта
if (langSelect) {
  langSelect.addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });
}
