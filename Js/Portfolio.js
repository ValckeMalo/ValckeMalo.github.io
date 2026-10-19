
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      card.hidden = filter !== "all" && !categories.includes(filter);
    });
  });
});

// Make project cards keyboard-accessible.
projectCards.forEach((card) => {
  card.tabIndex = 0;
  card.setAttribute("role", "link");

  const openProject = () => {
    const link = card.dataset.link;
    if (link) window.location.href = link;
  };

  card.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) return;
    openProject();
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject();
    }
  });
});

// Simple English/French switch.
const languageToggle = document.getElementById("language-toggle");

function setLanguage(language) {
  document.documentElement.lang = language;

  document.querySelectorAll("[data-en][data-fr]").forEach((element) => {
    element.textContent = element.dataset[language];
  });

  if (languageToggle) {
    languageToggle.textContent = language === "en" ? "FR" : "EN";
    languageToggle.setAttribute(
      "aria-label",
      language === "en" ? "Passer en français" : "Switch to English"
    );
  }
}

if (languageToggle) {
  let currentLanguage = "en";

  languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "fr" : "en";
    setLanguage(currentLanguage);
  });
}
