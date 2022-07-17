var poulet = "jacqueline"; //type string 
var poule = "robert"; //type string 
var nombrePoulet = 3; //on peut mettre un nom ou un nombre (type number)
var nombrePoulet2 = 6; 
var pouletMalade = true;  //ou false  (les trois ici sont des variables)
var pouleto = 3.05; //c'est une var number (que ça soit avec ou sans virgule)
//avec les variables on peut faire bcp de choses, calculs...

console.log(poulet+" et "+ poule); //peu importe les espaces entre les +
console.log(nombrePoulet2-nombrePoulet) //on peut aussi diviser ou multiplier
// si on met un % au lieu du "-" ça sera un modulo (le reste d'une kissma iklidiya)

//--------------------------
// ma variable ici est un objet (la variable est composée de plusieurs choses)

let voiture = {
    nombreRoues : 4,
    couleur : "rouge",
    nombrePlaces : 5,
    gazole : false,
    consommation : 5.2
};




console.log(voiture.nombreRoues) //ça nous permet d'avoir directement le nmbre
voiture.couleur = "vert"; //c'est pour dire que la voiture a changé de couleur
console.log(voiture); //c'est pr avoir tous les détails. 
console.log(voiture["consommation"]);

//on ajoute un constructeur à la voiture (dans la let voiture)
class Voiture {
    constructor(couleur, nombreRoues, gazole){
        this.couleur= couleur;   //this fait réf à la voiture.
        this.nombreRoues = nombreRoues;
        this.gazole = gazole;
        this.nombrePlaces = 5;
}
rouler() {
    return "vroom vromm"
}
saluer(prenom) {
        prenom = prenom + "!"
        let phrase = "Je suis la voiture " + this.couleur //on dit que c'est 1 var
        return phrase + ". Bonjour " + prenom;

}

}

// on fait ici une nouvelle voiture donc :

let voiture2 = new Voiture ("grise", 4,true);

console.log(voiture2);
console.log(voiture2.rouler()); //() c'est une fonction c'est pour àa qu'on met les parent.

//si on veut saluer qlqu'un :
console.log(voiture2.saluer("Mouni"));

var prix = [10,20,5]; //qd c'est un tableau, on met des crochets !
console.log(prix); 
//on peut afficher le prix num 2 : 
console.log(prix[1]); //pour le premier prix faut mettre [0]
//on peut aussi modif les prix de la même manière
prix[0]=2;
console.log(prix[0]);
//on peut aussi redéfinir le type de l'élément du tab. 
//on va metttre un string (nom) à la place du nombre
prix[0]= "olive";
prix[5]= poulet;
console.log(prix);

//sur les tab, on a plusi fonctions
prix.push(poule); //il ajoute un prix à la fin, on refait console.log(prix) pour revoir tout le tab
console.log(prix)

//unshift pour add au début du tab
prix.unshift(nombrePoulet2);
console.log(prix);

prix.pop(); //ça supprime le dernier élem du tab
console.log(prix)


// Exercice 1 
var tab = [5, 7, 4, 1, 2, 8];
//on veut que ça soit dans l'ordre
//on crée un tab2
var tab2= []
tab2.push(tab[3]);
tab2.push(tab[4]);
tab2.push(tab[2]);
tab2.push(tab[0]);
tab2.push(tab[1]);
tab2.push(tab[5]);

tab= tab2;

console.log(tab); 


//// CONDITIONS////

console.log(tab.length);

//condition dans les parent de if
if(tab.length >6){
   console.log("vrai");  //il ne m'a pas mis vrai prce qu'il égale à 6
   //mettre >=

}
// pour qu'il me mette vrai dans ce cas : 
if(tab.length >=6){
    console.log("vrai");  
    
 }


// si on veut que = : on mettra ==
if(tab.length ==6){
    console.log("vrai");  
    
 }
if(tab.length <16){
    console.log("false"); 
 }


 /// Le triple =
var x = "5";
if (x===5){ //si je mets == : on aura " mais si on met === 
    /// on aura pas le oui parce que le triple égale prend en compte le type tout

    console.log("oui");
}
else if(x==4){
    console.log("C'est 4!");
}

else if(x>0){
    console.log("sup a zero");
}
else { 
    console.log("non"); //dans le ca où y a pas.
}

//une autre condi
// si on veut mettre "et" on écrit &&; si on veut dire "ou" : on écrira : || 
//ex
if(poulet=="jacqueline" && poule== "robert"){
    console.log("Plop !");
}

if(poulet=="jacquelineZZZZZZZZZZZ" || poule== "robert"){
    console.log("Plop !"); //ici on  qd même le plop parce qu'une des condit est vraie
}

//// Dernière condi à voir ! le switch !
//on met à l'int d'un switch une var
switch(poulet){
    case "vivian" :
        console.log("prenom de merde");
        break;
    case "jacqueline" :
        console.log("joli prenom");
        break;
    case "ginette" :
        console.log("vieux prenom");
        break;
    default :
        console.log("aucun commentaire");
}


///////// Les boucles
var appartement = 600; ///il faut mettre appartement = appartement - 10 pour éviter que le navigateur plante
while(appartement >300){
    console.log(appartement);
    appartement = appartement - 10;
    appartement -= 10; // c'est la même commande juste une autre man de l'écrire.
    ///si je laisse comme ça le prix de l'appart va baisser de 20 à chaque boucle et non pas de 10
}

appartement = 600; // on a plus besoin de mettre var juste parce que la var est déjà créée

//i-- (ou ++) c'est - 1 ou +1
/// le for est utilisé pour définir le nombre de tours que v faire ma boucle
for(let tours=10; tours>0; tours--) {
    console.log(tours + " - " + appartement);
    appartement = appartement - 10
}

for(let tours in tab){
    console.log("element: "+ tab[tours]);
}

// on veut savoir à quel tour on est

for(let tours in tab){
    console.log("tours :" +tours + "- element: "+ tab[tours]);
}

for(let elem of tab){
    console.log("element: "+ elem);
}

/// exercice

let tableau = [];
for(let i=0;i<Math.round(Math.random()*10)+10;i++){
    tableau.push(Math.round(Math.random()*200));
}
//// ton code /////
let tableau = [];
for(let i=0;i<Math.round(Math.random()*10)+10;i++){
    tableau.push(Math.round(Math.random()*200));
}

/// ton code ///
let tableauTri = [];
while(tableau.length > 0){
    let nbMini = 10000;
    let indexNbMini = -1;
    for(let i = tableau.length; i > 0; i--){
        if(tableau[i] < nbMini){
            nbMini = tableau[i];
            indexNbMini = i;
        }
    }
    tableau.splice(indexNbMini, 1);
    tableauTri.push(nbMini);

}
// DEUXIEME FACON
// while(tableau.length > 0){
//     let i = Math.min(...tableau);
//     tableau.splice(tableau.indexOf(i), 1);
//     tableauTri.push(i);

// }
tableau = tableauTri;


/// fin code ///

console.log(tableau);


console.log(tableau);
