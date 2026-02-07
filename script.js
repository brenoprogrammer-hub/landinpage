const cta = document.getElementById("cta");

// LINK DA PÁGINA DE VENDA DA CACTO
const redirectURL = "https://SEU-LINK-DA-CACTO-AQUI";

cta.addEventListener("click", () => {
  // animação rápida antes do redirect
  cta.style.transform = "scale(1.15)";
  cta.style.boxShadow = "0 0 45px rgba(30, 215, 96, 1)";

  setTimeout(() => {
    window.location.href = redirectURL;
  }, 200);
});
