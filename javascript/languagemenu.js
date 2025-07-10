document.getElementById("languageSwitcher").addEventListener("click", toggleLanguageMenu);

function toggleLanguageMenu() {
  const menu = document.getElementById("languageMenu");
  const switcher = document.getElementById("languageSwitcher"); 

  if (menu.style.display === "block") {
    menu.style.display = "none";
    return;
  }

  menu.style.display = "block";

  const rect = switcher.getBoundingClientRect();

  menu.style.top = window.scrollY + rect.top - 105 + "px";
  menu.style.left = window.scrollX + rect.left + "px";
}

document.addEventListener("click", function (event) {
  const switcher = document.getElementById("languageSwitcher");
  if (!switcher.contains(event.target)) {
    document.getElementById("languageMenu").style.display = "none";
  }
});

function setLanguage(lang) {
  localStorage.setItem("language", lang);
  carregarIdioma(lang);
  document.getElementById("languageMenu").style.display = "none";
}