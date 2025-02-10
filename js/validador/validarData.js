export function validarIdade() {
  const dataNascimento = document.getElementById("formulario_data").value;
  const hoje = new Date();
  const [ano, mes, dia] = dataNascimento.split("-");
  const dataNasc = new Date(ano, mes - 1, dia);
  let idade = hoje.getFullYear() - dataNasc.getFullYear();
  const mesDiferenca = hoje.getMonth() - dataNasc.getMonth();
  if (
    mesDiferenca < 0 ||
    (mesDiferenca == 0 && hoje.getDate() < dataNasc.getDate())
  ) {
    idade--;
  }
  const resultado = document.getElementById("resultado__data_nascimento");
  if (dataNascimento === "") {
    resultado.style.display = "none";
    return false;
  }
  resultado.style.display = "block";
  if (idade >= 18) {
    resultado.textContent = "Você é maior de idade.";
    resultado.style.color = "rgb(50, 191, 50)";
    setTimeout(function () {
      resultado.style.display = "none";
    }, 7000);
    return true;
  } else {
    resultado.textContent = "Você é menor de idade.";
    resultado.style.color = "rgb(191, 50, 50)";
    setTimeout(function () {
      resultado.style.display = "none";
    }, 7000);
    return false;
  }
}
