window.addEventListener("load", function() {
    function pesquisarCarta() {
        let nomeCarta = document.getElementById('nomeCarta').value;
        let imageContainer = document.getElementById('cardContainer');
        console.log(nomeCarta);

        fetch(`https://api.magicthegathering.io/v1/cards?name=${nomeCarta}`, {
            method: 'GET',
        }).then(response => response.json())
        .then(cards => {
            console.log(cards);
            let img = document.createElement('img');
            img.src = cards.cards[0].imageUrl;
            imageContainer.appendChild(img);
        }).catch(error => {
            console.log(error);
        });  
    }

    let form = document.getElementById('form');

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        pesquisarCarta();
    });
});