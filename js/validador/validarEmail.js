export function validarEmail() {
  const email = document.getElementById("formulario_email").value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const resultado = document.getElementById("resultado__email");

  if (email === "") {
    resultado.style.display = "none";
    return false;
  }
  if (regex.test(email)) {
    resultado.textContent = "Email válido.";
    resultado.style.color = "rgb(50, 191, 50)";
    resultado.style.display = "block";
    setTimeout(function () {
      resultado.style.display = "none";
    }, 7000);
    return true;
  } else {
    resultado.textContent = "Email inválido.";
    resultado.style.color = "rgb(191, 50, 50)";
    resultado.style.display = "block";
    setTimeout(function () {
      resultado.style.display = "none";
    }, 7000);
    return false;
  }
}
