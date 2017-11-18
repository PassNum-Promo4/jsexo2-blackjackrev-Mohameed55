function test__comparaison(){
  //declaretion des variables
var aleatoire = Math.floor(Math.random() * 11);
var nombre = document.getElementById("Mon_numero").value;


//test du tirage aleatoire avec le nombre saisie
   if(aleatoire <= nombre ) {
     document.getElementById("results").innerHTML = "Vous avez perdu";
   } else if (aleatoire > nombre ){
     document.getElementById("results").innerHTML = "Vous avez gagné";
   }


//document.getElementById("victoire").value


}
