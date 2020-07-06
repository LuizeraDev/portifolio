var passou = false; 
error = document.all['erroemail'];

function detectaemail(){
    var email = document.all("emailid");

    if(!email.checkValidity()){
        error.style.color = "red";
        error.innerHTML = "Email inválido.";  
    }
    else{
        error.innerHTML = "";
        passou = true;
    }
}

function Enviar() {
    var nome = document.all("nomeid");
    var email = document.all("emailid");
    var fone = document.all("foneid");
    var mensagem = document.all("msgid");

    /*Coloque seu número na váriavel num*/
    var num = "5513981584772";

    /* 
    document.all('nomeid').value='';
    document.all('emailid').value='';
    document.all('foneid').value='';
    document.all('msgid').value='';
    */

    if (nome.value == "") 
    {
        alert("Você não preencheu o campo nome");
        passou = false;
    }
    else if(fone.value == "")
    {
        alert("Você não preencheu o campo telefone");
        passou = false;
    }
    else if(mensagem.value == "")
    {
        alert("Você não preencheu o campo mensagem");
        passou = false;
    }
    if(nome.value == "" || fone.value == "" || mensagem.value == "")
    {
        document.all('nomeid').value='';
        document.all('foneid').value='';
        document.all('msgid').value='';
    }
    else
    passou = true;
    if(passou == true){
        window.open('https://wa.me/'+num+'?text=*Olá,%20eu%20sou:*%20'+nome.value + '%20*Email:*%20' + email.value + '%20*Telefone:*%20' + fone.value + '%20*Mensagem:*%20'+ mensagem.value);
    }
}

$('#msgid').val('');
M.textareaAutoResize($('#msgid'));