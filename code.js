const inputButton = document.getElementById("inputfilebutton");
inputButton.addEventListener("click", clickButton);

function clickButton(){
    arquivo = document.getElementById("inputfile");

    var fr=new FileReader();

    fr.readAsText(arquivo.files[0]);

    fr.onload=function(){
        var info = fr.result; 
        console.log(info);
        document.getElementById('output').textContent=fr.result;
    }   
}


