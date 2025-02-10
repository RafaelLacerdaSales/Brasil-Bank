const minimo = 8;
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=!]).{8,}$/;
const resultado = document.getElementById("resultado__confirmar_senha");
export function validarSenha() {
  let SenhaUm = document.getElementById("formulario_senha_um").value;
  let senhaDois = document.getElementById("formulario_senha_dois").value;
  resultado.style.display = "block";
  if (SenhaUm === "") {
    resultado.style.display = "none";
    return false;
  }
  if (SenhaUm < minimo) {
    resultado.textContent = "Senha deve ter pelo menos 8 caracteres.";
    resultado.style.color = "rgb(255, 255, 2)";
    setTimeout(function () {
      resultado.style.display = "none";
    }, 7000);
    return false;
  }
  if (!regex.test(SenhaUm)) {
    resultado.textContent =
      "A senha deve ter pelo menos uma letra minúscula, uma maiúscula, um número e um caractere especial (@#$%^&+=!).";
    resultado.style.color = "rgb(255, 0, 0)";
    setTimeout(function () {
      resultado.style.display = "none";
    }, 7000);
    return false;
  }
  if (SenhaUm !== senhaDois) {
    resultado.textContent = "As senhas não coincidem.";
    resultado.style.color = "rgb(255, 0, 0)";
    setTimeout(function () {
      resultado.style.display = "none";
    }, 7000);
    return false;
  }
  resultado.textContent = "Senha válida!";
  resultado.style.color = "rgb(50, 191, 50)";
  setTimeout(function () {
    resultado.style.display = "none";
  }, 7000);
  return true;
}

