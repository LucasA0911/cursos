var num1 = 8
var num2 = 7

document.write ("o numero 1 é "+num1)
document.write ("<br>o numero 2 é "+num2 + "<br>")
if(num1 > num2) /* dentro do parenteses é a condição*/ {// se o num1 for maior do que o num2
    document.write ("o numero 1 é maior que o numero 2")
    // dentro das chaves é bloco de código
}

else if(num1 == num2){ // if, else if e else, eles determinam variáveis de verdadeiro ou falso,no caso se o numero 1 é maior menos ou igual o numero 2.
    // o else if é sempre colocado entre o if e o else, e podem ser colocados quantos forem necessários.
    document.write ("o numero 1 e o numero 2 são iguais")
    document.write ("<br>O processo foi executado com exito<br>")
    alert ("Estrutura condicional")
}
else{
    document.write ("o numero 2 é maior que o numero 1")
}
