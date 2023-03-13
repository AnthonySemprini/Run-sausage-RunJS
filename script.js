var perso = document.querySelector(".perso");
var obstacles = document.querySelector(".obstacles");

let score = 0;
let nombre = 0;

function sauter(){
    // console.count(score);
    // function pour faire sauter le personnage
    if(perso.classList != "animation"){
        perso.classList.add('animation'); 
        score++;
        document.getElementById("resultat").innerHTML = score;
    }
    setTimeout(function(){
        perso.classList.remove('animation'); 
    },500)
}


//verifier si  l'obstacle touche le personnage

var verification = setInterval(function(){
    var persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top")) ;
    var obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left")) ;

    if(obstaclesLeft<15 && obstaclesLeft >10 && persoTop>= 205){
        obstacles.style.animation = "none";
        alert("Vous avez grillé!!!")
    }else{
    }

},1)


