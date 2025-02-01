export function validarEmail() {
    const email = document.getElementById('formulario_email').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const resultado = document.getElementById('resultado__email')
    
if(regex.test(email)){
    resultado.textContent = 'Email válido.'
    resultado.style.color = 'rgb(50, 191, 50)'
    
} else{
    resultado.textContent = 'Email inválido.'
    resultado.style.color = 'rgb(191, 50, 50)'
}
}