console.log("Bootstrap Demo");
document.querySelectorAll(".btn-primary").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert(`Hiciste clic en: ${btn.innerText}`);
  });
});
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.backgroundColor = "#f8f9fa";
  });
  card.addEventListener("mouseleave", () => {
    card.style.backgroundColor = "white";
  });
});
