let a= window.prompt( "entrer le premiere a");
let b= window.prompt("entrer le nombre de b");
let resultat = b  / a ;
if( a<=0 && b<= 0){
    resultat= Math.round(b/a)
}
        
else if (a >=0 && b >=0){
    resultat=Math.round (-b/a)
}

    else{
        resultat=Math.round (-b/a)
    }

    document.getElementById("rr").textContent='ax +b =0' ;

    document.getElementById("r").textContent= "x" + " =" + resultat;
    
