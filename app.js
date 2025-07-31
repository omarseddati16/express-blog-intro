const express = require('express');

const app = express()

const port = 3000

app.use(express.static(''))

app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

const posts = [
  {
    titolo: "",
    contenuto: "",
    immagine: "",
    tags: 
  },
  {
    titolo: "",
    contenuto: "",
    immagine: "",
    tags: 
  },
  {
    titolo: "",
    contenuto: "",
    immagine: "",
    tags: 
  },
  {
    titolo: "",
    contenuto: "",
    immagine: "",
    tags: 
  },
  {
    titolo: "",
    contenuto: "",
    immagine: "",
    tags: 
  }
]


app.get('/bacheca', (req, res) => {
  res.json(posts);
});

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});