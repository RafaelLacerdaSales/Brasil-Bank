
const SenhaUm = document.getElementById('formulario_senha_um').value;
const senhaDois = document.getElementById('formulario_senha_dois').value;
const minimo = 8
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=!]).{8,}$/
const resultado = document.getElementById('resultado__confirmar_senha')
export function validarSenha(){
if(SenhaUm < minimo){
    resultado.textContent ='Senha deve ter pelo menos 8 caracteres.'
    return
} if(!regex.test(SenhaUm)){
    resultado.textContent = 'Senha deve conter pelo menos uma letra minúscula, uma letra maiúscula, um número e um caractere especial (@#$%^&+=!).'
    return
}if(SenhaUm !== senhaDois){
    resultado.textContent  = 'As senhas não coincidem.'
    return
} 
resultado.textContent = 'Senha válida!'
}