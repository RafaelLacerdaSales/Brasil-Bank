import {validarIdade} from "./validador/validarData.js";
import {validarCPF} from "./validador/validarCPF.js";
import {validarSenha} from "./validador/validarSenha.js";
import {validarEmail} from "./validador/validarEmail.js";
const btn = document.querySelector('.btn-criar-conta')

btn.addEventListener("click", () =>{
    validarEmail()
    validarSenha()
    validarCPF()
    validarIdade()
})

