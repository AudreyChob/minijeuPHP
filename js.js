    window.addEventListener('load', () =>{
        buttonInit();
    })

    var buttonValide = document.querySelector('.buttonValide');
    var buttonJeu = document.querySelector('.buttonJeu');
    var buttonReset = document.querySelector('.buttonReset');


    async function buttonInit(){
        getScore()
        buttonValide.addEventListener('click', () =>{
            genererNb()
            //getRandomInt(100)
        })

        buttonJeu.addEventListener('click', () => {
            setScore()     
        })
    
        buttonReset.addEventListener('click', () => {
            resetScore({'score' : 0})
        })
    }

    async function genererNb(){
        let request = await fetch('http://localhost/mini-jeu/php/php.php?action=genererNb', {
            method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                //body: JSON.stringify(data)
            }) 
        getRandomInt(100)
        let response = await fetch(request);
        console.log('generer'.request)
        
    }

    async function getScore(){
        let response = await fetch('http://localhost/mini-jeu/php/php.php?action=getScore');
        //console.log(response)
        if(response.ok){
            let data = await response.json();
            console.log(data.score);
        }
    }

    async function setScore(){
        let request = await fetch('http://localhost/mini-jeu/php/php.php?action=setScore', {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify(data)
        }) 
        //console.log(data)
        let response = await fetch(request);
        let responseData = await response.json();
        console.log('setScore '.response)
    }


    function getRandomInt(max) {
        let nbAleatoire = Math.floor(Math.random() * Math.floor(max));
        console.log(nbAleatoire);
        return nbAleatoire;
    }
