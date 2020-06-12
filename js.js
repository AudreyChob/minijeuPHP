    window.addEventListener('load', () =>{
        genererNb();
    })


    var buttonJeu = document.querySelector('.buttonJeu');
    var buttonReset = document.querySelector('.buttonReset');

///// Initiation du jeu /////////////


buttonJeu.addEventListener('click', () => {
    setEssai()     
})

buttonReset.addEventListener('click', () => {
    genererNb()
})


        async function genererNb(){

            document.getElementById('essai').value="";
            document.getElementById('resultat').innerHTML = "";

            let data = {
                nbAleatoire: Math.floor((Math.random() * 100) + 1)
            };
            alert("ok")
            console.log('data: ' +data.nbAleatoire);
            let request = new Request('http://localhost/mini-jeu/php/php.php?action=genererNb', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            await fetch(request)
            
        }
 



// ////// esai du joueur //////
async function setEssai(){
    let essai = document.getElementById('essai').value;
    let nbAleatoire;

    // requette qui récupére le nombre alétoire dans la bdd
    let response = await fetch('http://localhost/mini-jeu/php/php.php?action=setEssai')
    if(response.ok){
        let data = await response.json();
        nbAleatoire = (data.nbAleatoire);
    }
    //console.log(data.nbAleatoire)

    // /// incrémenter le score 
    let reponse = await fetch('http://localhost/mini-jeu/php/php.php?action=setScore');
    if(reponse.ok){
        let donnee = await reponse.json();
        score = (donnee.score);
    }
   // console.log(score); 
    
    ////// tests des valeurs et les afficher //////
    
    if (essai < nbAleatoire) {
        document.getElementById('resultat').innerHTML = "essai " + score +  ":" + essai + " Ton nombre est trop petit";
    }
    if (essai > nbAleatoire) {
        document.getElementById('resultat').innerHTML =  "essai " + score + ":" + essai + " Ton numbre est trop grand";
    }
    if (essai == nbAleatoire) {
        if(score>1){
            alert("Tu as gagné en :" + score + " essais") ;
        }
        else {
            alert("Tu as gagné en :" + score + " essai") ;
        }
        
    }
}

// async function getScore(){
//     let response = await fetch('http://localhost/mini-jeu/php/php.php?action=getScore');
//     //console.log(response)
//     if(response.ok){
//         let data = await response.json();
//         console.log(data.score);
//     }
// }

// async function setScore(){
//     let request = await fetch('http://localhost/mini-jeu/php/php.php?action=setScore', {
        
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         //body: JSON.stringify(data)
//     }) 
//     //console.log(data)
//     let response = await fetch(request);
//     let responseData = await response.json();
//     console.log('setScore '.response)
// }}