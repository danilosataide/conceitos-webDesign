function ValidarEntradas() {
    if (document.querySelector("select[name='estadoDestino'] option:checked") == null 
            || document.querySelector("select[name='estadoDestino'] option:checked").value == "") {
        window.alert("Por favor, escolha o Estado de Destino!");
        return false;
    }
    if (document.getElementById("idNome").value == "") {
        window.alert("Por favor, informe seu nome!");
        return false;
    }
    return true
}

function CadastrarCliente()
{
  if (ValidarEntradas()) {
    let nome = document.getElementById("idNome");
    console.log("Nome: " + nome.value)
    let email = document.getElementById("idEmail");
    console.log("Emai: " + email.value)
    let telefone = document.getElementById("idTelefone");
    console.log("Telefone: " + telefone.value)
    let senha = document.getElementById("idSenha");
    console.log("Senha: " + senha.value)
    //nome.style.color="green";
    //document.getElementById("idNome").style.color = "green";
         
    var estadoDestino=  document.querySelector("select[name='estadoDestino'] option:checked");
    console.log("Estado: " + estadoDestino.value)

    var esportesPreferidos = [];
    var arrayEsportesPreferidos = document.getElementsByName("esportes");
    console.log("Esportes preferidos: ")
    for (var i=0; i < arrayEsportesPreferidos.length ; i++ )
    {
            // || arrayEsportesPreferidos[i].disabled
            if (arrayEsportesPreferidos[i].checked)
            {
                esportesPreferidos.push(arrayEsportesPreferidos[i].value);
            }
            
    }
    console.log(esportesPreferidos)

    var rangeEsportes = document.getElementById("rangeEsportes").value;
    console.log("Quanto gosta de praticar esportes? (0 a 10): " + rangeEsportes)

    var produtocolor =   document.getElementById("produtocolor").value;
    console.log("Cor do produto: " + produtocolor)

    var horarioMaximo =   document.getElementById("horarioMaximo").value;
    console.log("Horário máximo: " + horarioMaximo)
    var semana =   document.getElementById("semana").value;
    console.log("Semana: " + semana)

    document.getElementById("descricaoCadastro").value = "";

    var quebraLinha = `\n`
    var texto = "Nome do Cliente: "+ nome.value + quebraLinha 
        + "Email: "+ email.value + quebraLinha 
        + "Telefone: "+ telefone.value + quebraLinha
        + "Senha: "+ senha.value + quebraLinha
        + "Estado de Destino: " + estadoDestino.value + quebraLinha
        + "Esportes preferidos: "

    esportesPreferidos.forEach(function (item, indice) {
        texto = texto + item + ", "
    });

    texto = texto + quebraLinha
        + "Quanto gosta de praticar esportes? (0 a 10): " + rangeEsportes + quebraLinha
        + "Cor do produto: " + produtocolor + quebraLinha
        + "Período de entrega -> Horário máximo: " + horarioMaximo + "/Semana: " + semana

    var objdata = new Date()
    var data = objdata.getDate() + "/"+ (objdata.getMonth()+1) +"/"+objdata.getFullYear()

    const agora = new  Date()
    hora = agora.getHours() + ":"+agora.getMinutes() + ":" +agora.getSeconds()

    texto = texto + `\n\n` + data + " " + hora;
    document.getElementById("descricaoCadastro").value = texto;

    document.getElementById("descricaoCadastro").style.color = produtocolor;
    document.getElementById("cadastro").style.display = "block";
    // window.open("https://www.google.com", "blank", width="200px", height="200px")

 }
}

function Limpar()
{
    if ( window.confirm("Tem certeza que deseja Limpar? ")   )
          document.getElementById("idFormulario").reset();
    else
          window.alert("Operação cancelada ");
}

function MostrarHora()
{
   const agora = new  Date()
   hora = agora.getHours() + ":"+agora.getMinutes() + ":" +agora.getSeconds()
   document.getElementById("idHora").innerHTML = hora
}
setInterval(MostrarHora, 1000)

function CalcularMedia()
{
    document.getElementById("nota1").style.color = "#000000";
    document.getElementById("nota2").style.color = "#000000";
    document.getElementById("nota3").style.color = "#000000";
    document.getElementById("nota1").style.fontWeight = "normal";
    document.getElementById("nota2").style.fontWeight = "normal";
    document.getElementById("nota3").style.fontWeight = "normal";

    let nomeAluno = document.getElementById("idNomeAluno");
    console.log("Nome Aluno: " + nomeAluno.value)

    var nota1 = document.getElementById("rangeNota1").value;
    console.log("Nota 1: " + nota1)
    var nota2 = document.getElementById("rangeNota2").value;
    console.log("Nota 2: " + nota2)
    var nota3 = document.getElementById("rangeNota3").value;
    console.log("Nota 3: " + nota3)

    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);

    var nums = [];
    nums.push(nota1, nota2, nota3);
    var maior1 = nums[0];
    var maior2 = nums[0];
    var indMenor = 0;
    var menor = 0;

    var menor = nums[0];
    for(var i = 0; i < 3; i++) {
        if(nums[i] < menor) {
            menor = nums[i]
            indMenor = i;
        }
    }
    var txt;
    for(var i = 0; i < 3; i++) {
        if(i != indMenor) {
            txt = "nota"+(i+1);
            document.getElementById(txt).style.color = "#0069D9";
            document.getElementById(txt).style.fontWeight = "bold";
        }
    }

    console.log("indMenor: " + indMenor + " Menor: "+menor);
    var pos = nums.indexOf(menor);
    var removedNum = nums.splice(pos, 1);

    var media = (nums[0] + nums[1])/2;

    document.getElementById("resultadoMedia").value = media;
    document.getElementById("media").style.display = "block";

}

// document.getElementById("rangeNota1").addEventListener("click", function(){
//     document.getElementById("nota1").innerHTML = document.getElementById("rangeNota1").value
// })

// document.getElementById("rangeNota2").addEventListener("click", function(){
//     document.getElementById("nota2").innerHTML = document.getElementById("rangeNota2").value
// })

// document.getElementById("rangeNota3").addEventListener("click", function(){
//     document.getElementById("nota3").innerHTML = document.getElementById("rangeNota3").value
// })

function mostrarNota(num) {
    console.log("rangeNota"+num)
    document.getElementById("nota"+num).innerHTML = document.getElementById("rangeNota"+num).value;
};//End Function