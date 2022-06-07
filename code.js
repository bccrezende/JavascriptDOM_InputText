const inputFileButton = document.getElementById("inputfilebutton");
inputFileButton.addEventListener("click", clickFileButton);

const inputNumberButton = document.getElementById("inputnumberbutton");
inputNumberButton.addEventListener("click", clickNumberButton);

function clickFileButton(){
    arquivo = document.getElementById("inputfile");

    var fr=new FileReader();

    try{
        fr.readAsText(arquivo.files[0]);
        fr.onload=function(){
            info = fr.result; 
            document.getElementById('output').textContent=fr.result;
        }  
    }
    catch(erro){
        console.log(erro);
        alert(erro);
    }
    finally{
        alert("Obrigado pela visita");
    }
    
    
}

function clickNumberButton(){
    // 1) Inserir um campo de input para entrada de dados - ok
    // 2) Verifica se o dado de entrada é nulo, se for, lança exception "Informe um valor" - ok
    // 3) Verifica se o dado de entrada é maior que 5 e menor que 10, se não for, lança exception 
    // "Informe um valor maior que 5 e menor que 10"
    // 4) Se o try falhar, lançar exception "Erro +  erro javascript"
    // 5) No finnaly informar "O número escolhido foi + " numero
    
    document.getElementById("outputnumber").innerHTML = " ";
    number = document.getElementById("inputnumber").value

    try{
        if (number == '') throw 'Informe um valor';
        number = Number(number);
        if (number <= 5 || number >= 10) throw 'Informe um valor maior que 5 e menor que 10'; 
    }
    catch(erro){
        document.getElementById("outputnumber").innerHTML = erro;
        console.log("Erro " + erro)
    }
    finally{
        alert("O número escolhido foi: " + number);
    }
}

