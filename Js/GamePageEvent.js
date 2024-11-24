function showSection(section) {
  // Cacher les deux sections
  document.getElementById("overview-section").style.display = "none";
  document.getElementById("contribution-section").style.display = "none";

  // Afficher la section demandée
  if (section === "overview") {
    document.getElementById("overview-section").style.display = "block";
  } else if (section === "contribution") {
    document.getElementById("contribution-section").style.display = "block";
  }
}

window.addEventListener("load", () => {
  document.getElementById("overview-btn").click();
})