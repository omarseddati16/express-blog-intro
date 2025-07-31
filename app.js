const express = require('express');

const app = express()

const port = 3000

app.use(express.static('fake'))

app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

const posts = [
  {
    titolo: "post 1",
    contenuto: "primo post",
    immagine: "/Quadrato-nero.png",
    tags: ["vuoto", "vuoto"]
  },
  {
    titolo: "post 2",
    contenuto: "secondo post",
    immagine: "/Quadrato-nero.png",
    tags: ["vuoto", "vuoto"]
  },
  {
    titolo: "post 3",
    contenuto: "terzo post",
    immagine: "/Quadrato-nero.png",
    tags: ["vuoto", "vuoto"]
  },
  {
    titolo: "post 4",
    contenuto: "quarto post",
    immagine: "/Quadrato-nero.png",
    tags: ["vuoto", "vuoto"]
  },
  {
    titolo: "post 5",
    contenuto: "quinto post",
    immagine: "/Quadrato-nero.png",
    tags: ["vuoto", "vuoto"]
  }
]

app.get('/bacheca', (req, res) => {
  res.json(posts);
});

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});