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
    faqTitle: "Часто задаваемые вопросы о футболе",
    q1: "⚽ Что такое футбол?",
    a1: "Футбол — это игра, где две команды по 11 игроков соревнуются, чтобы забить гол в ворота соперника.",
    q2: "🌍 Где возник футбол?",
    a2: "Современный футбол зародился в Англии в 19 веке и распространился по всему миру.",
    q3: "🏆 Какие самые крупные футбольные турниры?",
    a3: "Чемпионат мира FIFA, Лига чемпионов УЕФА и Кубок Америки — самые известные турниры.",
    footer: "Создано: Бекарыс Бишимбай, Мохаммад Басир Аюби, Гани Муратбаев"
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
    faqTitle: "Football FAQ",
    q1: "⚽ What is football?",
    a1: "Football is a sport where two teams of eleven players compete to score goals using a spherical ball.",
    q2: "🌍 Where did football originate?",
    a2: "Modern football began in England during the 19th century and later spread worldwide.",
    q3: "🏆 What are the biggest football tournaments?",
    a3: "The FIFA World Cup, UEFA Champions League, and Copa America are among the most famous tournaments.",
    footer: "Created by: Bishimbay Bekarys, MohammadBasir Ayoubi, Ghani Muratbaev"
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
    faqTitle: "Preguntas frecuentes sobre fútbol",
    q1: "⚽ ¿Qué es el fútbol?",
    a1: "El fútbol es un deporte donde dos equipos de once jugadores compiten para marcar goles con una pelota.",
    q2: "🌍 ¿Dónde se originó el fútbol?",
    a2: "El fútbol moderno comenzó en Inglaterra durante el siglo XIX y luego se extendió por todo el mundo.",
    q3: "🏆 ¿Cuáles son los torneos más importantes?",
    a3: "La Copa del Mundo de la FIFA, la Liga de Campeones de la UEFA y la Copa América son los más famosos.",
    footer: "Creado por: Bishimbay Bekarys, MohammadBasir Ayoubi, Ghani Muratbaev"
  }
};

langSelect.addEventListener("change", (e) => {
  setLanguage(e.target.value);
});

function setLanguage(lang) {
  const t = translations[lang];

  document.querySelector("li.active a").textContent = t.home;
  document.querySelector('a[href="../Ghani/Liverpool.html"]').textContent = t.liverpool;
  document.querySelector('a[href="../Ghani/Chelsea.html"]').textContent = t.chelsea;
  document.querySelector('a[href="../Basir/index.html"]').textContent = t.basir;
  document.querySelector("li.btn a").textContent = t.login;

  document.querySelector(".hero--info h1").textContent = t.heroTitle;
  document.querySelector(".hero--info p").textContent = t.heroText;
  document.querySelector(".hero--info .lgn").textContent = t.heroButton;

  document.querySelector(".color-section h2").textContent = t.changeBg;

  document.querySelector(".faq h2").textContent = t.faqTitle;
  const questions = document.querySelectorAll(".faq-question");
  const answers = document.querySelectorAll(".faq-answer p");

  questions[0].textContent = t.q1;
  answers[0].textContent = t.a1;
  questions[1].textContent = t.q2;
  answers[1].textContent = t.a2;
  questions[2].textContent = t.q3;
  answers[2].textContent = t.a3;

  document.querySelector(".footer p:last-child").textContent = t.footer;

  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  langSelect.value = savedLang;
  setLanguage(savedLang);
});