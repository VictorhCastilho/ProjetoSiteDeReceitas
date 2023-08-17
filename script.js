function darkmode(){
    var SetTheme = document.body;

    SetTheme.classList.toggle('dark-mode');

    var checkBox = document.getElementById('check');

    var teminha = document.getElementById("tema");
    
    var hominha = document.getElementById("home")

    var borda = document.querySelectorAll("#receita")

    if (checkBox.checked == true){
        teminha.src = 'imagens/logodark.png'        /*mudar logo para dark caso checkbox esteja pressionado*/
        hominha.src = 'imagens/homelight.png'
        borda.forEach(borda => borda.style.borderColor = "white");
    } 
    else {
        teminha.src = 'imagens/logolight.png'       /*mudar logo para light caso checkbox nao esteja pressionado*/
        hominha.src = 'imagens/homedark.png'
        borda.forEach(borda => borda.style.borderColor = "black");
    }

}



