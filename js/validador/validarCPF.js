export function validarCPF() {
  let cpf = document.getElementById("formulario_CPF").value.replace(/\D/g, "");
  let resultado = document.getElementById("resultado__cpf");
  if (cpf === "") {
    resultado.style.display = "none";
    return false;
  }
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
    mostrarResultado(false);
    return false;
  }
  let soma = 0,
    resto;
  for (let i = 1; i <= 9; i++) soma += parseInt(cpf[i - 1]) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf[9])) {
    mostrarResultado(false);
    return false;
  }
  soma = 0;
  for (let i = 1; i <= 10; i++) soma += parseInt(cpf[i - 1]) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf[10])) {
    mostrarResultado(false);
    return false;
  }
  mostrarResultado(true);
  return true;
}

function mostrarResultado(valido) {
  let resultado = document.getElementById("resultado__cpf");
  if (valido) {
    resultado.textContent = "CPF Válido";
    resultado.style.color = "rgb(50, 191, 50)";
  } else {
    resultado.textContent = "CPF Inválido";
    resultado.style.color = "rgb(191, 50, 50)";
  }
  resultado.style.display = "block";
  setTimeout(function () {
    resultado.style.display = "none";
  }, 7000);
}
