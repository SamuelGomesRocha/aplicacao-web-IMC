
document.getElementById("erroBusca").style.visibility = "hidden"
//document.getElementById("erroTodosOsCampos").style.visibility = "hidden"
//document.getElementById("erroCamposIncorretos").style.visibility = "hidden"
function handleAddRow(nome, altura, peso, percentualGordura) {
    var pacientes = document.getElementById("tbody")
    var qtdRow = pacientes.rows.length
    var row = pacientes.insertRow(qtdRow)


    var numberPeso = Number(peso);
    var numberAltura = Number(altura)
    var numberPerGordura = Number(percentualGordura)

    var imc = numberPeso / (numberAltura * numberAltura)
    var status = ""
    if (imc < 18.4) status = "Abaixo do peso!"
    if (imc >= 18.5 && imc <= 24.9) status = "Peso ideal!"
    if (imc >= 25.0 && imc <= 29.9) status = "Sobrepeso!"
    if (imc >= 30.0 && imc <= 34.9) status = "Obesidade grau I!"
    if (imc >= 35.0 && imc <= 39.9) status = "Obesidade grau II!"
    if (imc >= 40.0) status = "Obesidade grau III!"

    if (nome == "" || peso == "" || altura == "" || percentualGordura == "") {
        //      document.getElementById("erroTodosOsCampos").style.visibility = "visible"
        alert("Preencha todos os campos!")
    }
    else if (status == "") {
        //      document.getElementById("erroCamposIncorretos").style.visibility = "visible"
        alert("Preencha os campos corretamente!")
    }
    else {
        //      document.getElementById("erroTodosOsCampos").style.visibility = "hidden"
        //      document.getElementById("erroCamposIncorretos").style.visibility = "hidden"
        //    if(pacientes[index].cells[1].innerHTML == cell)
        var cellNome = row.insertCell(0)
        var cellAltura = row.insertCell(1)
        var cellPeso = row.insertCell(2)
        var cellPerGordura = row.insertCell(3)
        var cellIMC = row.insertCell(4)
        var cellStatus = row.insertCell(5)

        cellNome.innerHTML = nome
        cellAltura.innerHTML = altura
        cellPeso.innerHTML = peso
        cellPerGordura.innerHTML = percentualGordura
        cellIMC.innerHTML = imc.toFixed(2)
        cellStatus.innerHTML = status
        limpaCampos()
    }
    //  rowStyleChange(pacientes)


}

function rowStyleChange(td) {
    td.style.backgroundColor = white;
}




function limpaCampos() {
    document.getElementById("txtNome").value = ""
    document.getElementById("txtPeso").value = ""
    document.getElementById("txtAltura").value = ""
    document.getElementById("txtGordura").value = ""
    //selectedRow = null;
}



function buscaPaciente() {
    var tbody = document.getElementById("tbody")
    document.getElementById("erroBusca").classList.add("hide")
    document.getElementById("txtFind").addEventListener("keyup", function () {

        var busca = document.getElementById("txtFind").value.toLowerCase()
        console.log(busca)


        for (var i = 0; i < tbody.childNodes.length; i++) {
            var achou = false
            var trow = tbody.childNodes[i]
            var td = trow.childNodes


            for (var j = 0; j < td.length; j++) {
                var nomePaciente = td[j].childNodes[0].nodeValue.toLowerCase()

                if (nomePaciente.indexOf(busca) >= 0) {
                    console.log(nomePaciente)
                    achou = true
                }

                if (achou) {
                    trow.style.display = "table-row"
                    console.log(nomePaciente.value)
                    document.getElementById("erroBusca").style.visibility = "hidden"
                } else {
                    trow.style.display = "none"
                    document.getElementById("erroBusca").style.visibility = "visible"
                }
            }


        }

    })

}
