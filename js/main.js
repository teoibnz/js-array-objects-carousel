/**
 *
 *
 *
Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto oggi insieme a lezione, che troverete direttamente nella mia repository di github a questo link: [link github]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?

 *
 */

const guitarImage = [
    {
        nome : 'First Guitar',
        url : 'fender-img-1.jpeg',
    },
    {
        nome : 'Second Guitar',
        url : 'fender-img-2.jpeg',
    },
    {
        nome : 'Third Guitar',
        url : 'fender-img-3.jpeg',
    },
    {
        nome : 'Fourth Guitar',
        url : 'fender-img-strato.jpeg',
    },
    
]

const next = document.querySelector('.my-next');
const prev = document.querySelector('.my-previous');

const imageWrapper = document.querySelector('.my-carousel-images');

for ( let i = 0; i < guitarImage.length; i++){
    let imageElement = [createImgContainer()];
    imageWrapper.appendChild(imageElement)
    imageElement.innerHTML = `
    <img src="img/${guitarImage[i]['url']}" alt="">
    `;
}

    next.addEventListener('click', function(){
        
    })




function createImgContainer (){
    let newImgContainer = document.createElement('div');
    newImgContainer.classList.add('img-container');
    return newImgContainer;
}