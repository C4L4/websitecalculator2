let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('form')

let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')

// selecionar caixas de texto por id
let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')
let cxNota3 = document.querySelector('#nota3')
let cxNota4 = document.querySelector('#nota4')
let cxMedia = document.querySelector('#media')
let cxSituacao = document.querySelector('#situacao')

// CALCULAR MEDIA
function calcularMedia(n1, n2, n3, n4) {
    return (n1 + n2 + n3 + n4) / 4
}

// DEFINIR SITUACAO FINAL COM BASE NA MEDIA
function situacaoFinal(mediaFinal) {
    let situacaoFinal = ''
    
    if (mediaFinal >= 6) {
        situacaoFinal = 'Aprovado(a)'
    } else if (mediaFinal <= 4) {
        situacaoFinal = 'Reprovado(a)'
    } else {
        situacaoFinal = 'Recuperação'
    }
    return situacaoFinal
}

// FORMATAR A CAIXA DE SITUACAO FINAL
function formatarSituacao(situacaoFinal) {
    console.log('Situação Final ' + situacaoFinal)
    switch(situacaoFinal) {

        case 'Aprovado(a)':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.remove('cx')
            cxSituacao.classList.add('aprovado')
            cxSituacao.classList.add('green')
            console.log('adicionar class aprovado')
            break
        
        case 'Reprovado(a)':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.remove('cx')
            cxSituacao.classList.add('reprovado')
            cxSituacao.classList.add('red')
            console.log('adicionar class reprovado')
            break
        
        case 'Recuperação':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('cx')
            cxSituacao.classList.add('recuperacao')
            cxSituacao.classList.add('orange')
            console.log('adicionar class recuperacao')
                break

        default:
            console.log('Situação Indefinida')
    } // fim do switch case

}

// VALIDAR E GERAR FLASH MESSAGE
function validarNumero(numero) {
    let num1 = cxNota1.value
    let num2 = cxNota2.value
    let num3 = cxNota3.value
    let num4 = cxNota4.value
    if(num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10 || num3 < 0 || num3 > 10 || num4 < 0 || num4 > 10) {
        formulario.reset() // limpar form
        aviso.textContent = 'Digite uma nota entre 0.0 e 10.0'
        aviso.classList.add('alerta')
        setTimeout(function(){
            aviso.textContent = ''
            aviso.classList.remove('alerta')
        }, 4000);
    }
}

// CALCULAR A MEDIA APOS O CLICK NO BOTAO
btnCalcular.addEventListener('click', function(e) {
    console.log('Calcular Média')
// pegar o valor que esta dentro das caixas
// usar metodo parseFloat p converter string p float
    let nota1 = parseFloat(cxNota1.value)
    let nota2 = parseFloat(cxNota2.value)
    let nota3 = parseFloat(cxNota3.value)
    let nota4 = parseFloat(cxNota4.value)
    let media = calcularMedia(nota1, nota2, nota3, nota4)
    
    console.log(nota1)
    console.log(nota2)
    console.log(nota3)
    console.log(nota4)
    console.log(media)

    if(isNaN(media) || media < 0) {
        console.log("Não é um número")
        cxSituacao.value = ''
    } else {
        cxMedia.value = parseFloat(media)
        cxSituacao.value = situacaoFinal(media)
        formatarSituacao(situacaoFinal(media))
    }
    e.preventDefault()
})

// APOS LIMPAR TIRAR AS CLASS DA CX SITUACAO
btnLimpar.addEventListener('click', function() {
    cxSituacao.classList.remove('aprovado')
    cxSituacao.classList.remove('reprovado')
    cxSituacao.classList.remove('recuperacao')
    cxSituacao.classList.add('cx')
})

// abrir calculador de notas
let calculadorDeNotas = document.getElementById("tela-principal")
let btnCalculadoraDeNotas = document.getElementById("skill")
btnCalculadoraDeNotas.addEventListener("click", ()=>{
    calculadorDeNotas.style.display = "block"
})

//fechar calculador de notas
let fechar = document.getElementById("d")
fechar.addEventListener("click", ()=>{
    calculadorDeNotas.style.display = "none"
})

//abrir calculadora

let calc = document.getElementById("batata")
let btnCalc = document.getElementById("a4")
btnCalc.addEventListener("click", ()=>{
    calc.style.display = "block"
    calc.style.marginTop = "20em"
    
})


//fechar calculadora
let materia = document.getElementById("sla")
let exit = document.getElementById("fechar")
exit.addEventListener("click", ()=>{
    calc.style.display = "none"
    
})
let exit2 = document.getElementById("exit2")

exit2.addEventListener("click", ()=>{
    materia.style.display = "none"
    
})

//menu videoaulas

