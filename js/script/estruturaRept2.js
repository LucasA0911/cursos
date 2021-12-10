/*for (let numero =0; numero <=10;numero+=2){
    document.write (numero + "<br>")
}*/
var limite = prompt("digite o limite aqui","") // para inserir o limite
if (limite =="") { // define o que vai aparecer caso o campo do prompt fique vazio
    document.write("Valor não informado<br>")
}
for(let numero =1; numero <= limite; numero++){ // define o looping iniciando a partir de 1 e indo até o limite que o usuario digitar no prompt
    document.write ("Número" + numero + "<br>")
}
document.write("<br>Fim do looping for!")