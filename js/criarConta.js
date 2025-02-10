
import { validarIdade } from "./validador/validarData.js"; 
import { validarCPF } from "./validador/validarCPF.js";
import { validarSenha } from "./validador/validarSenha.js";
import { validarEmail } from "./validador/validarEmail.js";
const btn = document.querySelector(".btn-criar-conta")

export function validarDados() {
    const emailValido = validarEmail()
    const senhaValida = validarSenha()
    const cpfValido = validarCPF()
    const idadeValida = validarIdade()

    const dadosValidos = { emailValido, senhaValida, cpfValido, idadeValida}

    localStorage.setItem('dadosValidos', JSON.stringify(dadosValidos))

    return emailValido && senhaValida && cpfValido && idadeValida
  }
    
    btn.addEventListener("click", (event) => {
      event.preventDefault()
      if (validarDados()) {
        window.location.href = '../index.html'
      }
  });
  

