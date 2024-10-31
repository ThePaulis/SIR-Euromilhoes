
const express = require('express');
const app = express();
const Numeros = new Set();
const Stars = new Set();

app.use(express.static('public'));

function generateRandomNumbers() {
   Numeros.clear();
   Stars.clear();

   for (let i = 0; i < 5; i++) {
      let n = Math.floor(Math.random() * 50) + 1; // Random number between 1 and 50
      Numeros.add(n);
   }

   for (let i = 0; i < 2; i++) {
      let n = Math.floor(Math.random() * 12) + 1; // Random number between 1 and 12
      Stars.add(n);
   }
}

app.get('/euro', function (req, res) {
   generateRandomNumbers();
   res.setHeader('Content-Type', 'application/json');
   res.setHeader("Access-Control-Allow-Origin", "*")
   return res.send(JSON.stringify({
      Numeros: [...Numeros],  // Spread the Numeros set into an array
      Stars: [...Stars]       // Spread the Stars set into an array
   }));
});

app.listen(3000, () => {
   console.log("app running on port 3000");
});
