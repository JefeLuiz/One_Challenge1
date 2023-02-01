var textoEntrada = document.getElementById("textIn");
var resultadoIteracao = document.getElementById("textOut");
var botaoCriptografar = document.querySelector(".btn-criptografar");
var botaoDescriptografar = document.querySelector(".btn-desencriptar");
var botaoCopiar = document.querySelector(".btn-copiar");
var botaoLimpar = document.querySelector(".btn-limpar");
var mensagem = document.querySelector(".mensagem");

function criptografar(texto){
    var texto = textoEntrada.value.toLowerCase();
    var textoSaida = texto.replace(/e/g,"enter")
    .replace(/i/g,"imes")
    .replace(/a/g,"ai")
    .replace(/o/g,"ober")
    .replace(/u/g,"ufat");

    textoEntrada.value = "";
 
    return resultadoIteracao.innerHTML = textoSaida
}

function descriptografar(texto){
    var texto = textoEntrada.value.toLowerCase();
    var textoSaida = texto.replace(/enter/g,"e")
    .replace(/imes/g,"i")
    .replace(/ai/g,"a")
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u");

    return resultadoIteracao.innerHTML = textoSaida;
}

function copiarTexto(){
    textoEntrada.value = "";
    var textoCopiado = document.getElementById("textOut");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    swal(`Você copiou o texto: ${textoCopiado.value}.   Para descriptografar basta inserir novamente na área de texto e clicar no botão correspondente!`);

}

botaoCriptografar.onclick = criptografar;
botaoDescriptografar.onclick = descriptografar;
botaoCopiar.onclick = copiarTexto;
botaoLimpar.addEventListener("click",() => {
    location.reload();
});