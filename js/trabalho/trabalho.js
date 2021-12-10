function historico() {
    
    var data = document.getElementById("data").value
    if(data==""){
        alert("insira a data")
        document.getElementById("data").focus()
    }
    var selectValue = document.getElementById("historic").value
    var valor = document.getElementById("valor").value
    if (valor==""){
        alert("Insira o valor")
        document.getElementById("valor").focus
    }
    var resultado = document.getElementById("resultado")
    
    if(selectValue==1){
        resultado.innerHTML = "Histórico-Mercado = R$" + valor
    }
    else if (selectValue==2){
        resultado.innerHTML = "Histórico-Farmacia = R$" + valor
    }
    else if (selectValue==3){
        resultado.innerHTML = "Histórico-Carro = R$" +valor
    }
    else{
        alert("Selecione o Histórico")
        document.getElementById("historic").focus()
    }
}