/*var numero = 1 // declaração da variavel numero, do tipo inteiro inicializando em zero
while (numero <= 10 ){ // estrutura de looping que conta do 0 e até o número menor que 10
    document.write("número " + numero + "<br>" )
numero+=2  // adiciona mais 1 número no código
}
document.write ("<br>fim do processo!")*/

var limite = prompt("informe até que número o looping irá","")

var numero = 1
if (limite == "") {
    document.write("Valor não informado")
}
while (numero <= limite){
    document.write ("Número " + numero + "<br>")
    numero ++
}
document.write("<br>Fim de processo!")
