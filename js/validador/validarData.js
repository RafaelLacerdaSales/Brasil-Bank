export function validarIdade(){
    const dataNascimento = document.getElementById('formulario_data').value
    const hoje = new Date()
    const [ano, mes, dia] = dataNascimento.split('-')
    const dataNasc = new Date(ano, mes - 1, dia)
    let idade = hoje.getFullYear() - dataNasc.getFullYear()
    const mesDiferenca = hoje.getMonth() - dataNasc.getMonth()
    if(mesDiferenca < 0 || (mesDiferenca == 0 && hoje.getDate() < dataNasc.getDate())){
        idade--
    }
    const resultado = document.getElementById('resultado__data_nascimento')
    if (idade >= 18){
    resultado.textContent = 'Você é maior de idade.'
} else{
    resultado.textContent = 'Você é menor de idade.'
}
}