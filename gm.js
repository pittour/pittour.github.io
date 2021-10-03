let nb = 0;
document.getElementById("nb").innerHTML = nb;

function ajouter() {
    nb++;
    document.getElementById("nb").innerHTML = nb;
    switch (nb) {
        case 1 : document.getElementById("msg").innerHTML = "First Blood";
        break;
        case 2 : document.getElementById("msg").innerHTML = "Double Kill";
        break;
        case 3 : document.getElementById("msg").innerHTML = "Triple Kill";
        break;
        case 4 : document.getElementById("msg").innerHTML = "Quadra Kill";
        break;
        case 5 : document.getElementById("msg").innerHTML = "Penta Kill";
        break;
        case 6 : document.getElementById("msg").innerHTML = "Legendary Kill";
        break;
        case 9 : document.getElementById("msg").innerHTML = "L9 Kill";
        break;
        case 8 : document.getElementById("msg").innerHTML = "Mon chiffre préféré !";
        break;
        case 10 : document.getElementById("msg").innerHTML = "Il le dit aussi souvent que ça ?";
        break;
        case 15 : document.getElementById("msg").innerHTML = "Au point où on en est, tu peux arrêter de compter...";
        break;
        case 20 : document.getElementById("msg").innerHTML = "Ca commence à devenir du harcèlement de formateur...";
        break;
        case 30 : document.getElementById("msg").innerHTML = "Arrête de cliquer sur ajouter, on a compris qu'il le dit beaucoup.";
        break;
        case 40 : document.getElementById("msg").innerHTML = "Ok, cliquer autant sur un bouton, ça devient louche... Tu fais quoi avec ce bouton en fait ?";
        break;
        case 45 : document.getElementById("msg").innerHTML = "Tu sais quoi, à partir de maintenant, y aura plus de nouveaux messages pour pas t'encourager à cliquer";
        break;
        case 50 : document.getElementById("msg").innerHTML = "Ok j'ai menti, à partir de maintenant en fait.";
        break;
        case 100 : document.getElementById("msg").innerHTML = "100 clics ! Tu t'attendais à quoi ? A une médaille ?";
        break;
        case 1000 : document.getElementById("msg").innerHTML = "Le premier qui obtient ce message me contacte et gagne 2€ en crypto-monnaie.";
        break;
    }
}

function enlever() {
    nb--;
    if (nb<0) {
        nb = 0;
    }    
    document.getElementById("nb").innerHTML = nb
}


document.getElementById("ajouter").addEventListener("click", ajouter);
document.getElementById("enlever").addEventListener("click", enlever);




