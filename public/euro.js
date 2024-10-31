
document.addEventListener('DOMContentLoaded', (e) => {
    button = document.getElementById("genBtn");

    button.addEventListener('click', (e) => {
        genNewBet();
        // genJSONBet();
    });



    /*
    button.addEventListener('click', function (e) {
        console.log("same event, another handle");
    });
     button.addEventListener('click', addtext);
    */
});




function genNewBet() {
    fetch('http://localhost:3000/euro')
        .then(response => response.json())  // Parse the response as JSON
        .then(bet => {
            console.log(bet);

            // Update the numbers in the UI
            let theOLNumbers = document.getElementById('olMain');
            theOLNumbers.innerHTML = "";  // Clear the current numbers

            bet.Numeros.forEach(number => {
                let newLi = document.createElement("li");
                newLi.innerHTML = number;
                theOLNumbers.appendChild(newLi);
            });

            // Update the stars in the UI
            let theOLStars = document.getElementById('olStars');
            theOLStars.innerHTML = "";  // Clear the current stars

            bet.Stars.forEach(star => {
                let newLi = document.createElement("li");
                newLi.innerHTML = star;
                theOLStars.appendChild(newLi);
            });
        })
        .catch(error => {
            console.error('Error fetching the bet data:', error);
        });
}







