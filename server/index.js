const express = require('express');
const cors = require('cors');
const path =require('path');

const app = express();

const port =process.env.PORT || 4004
app.use(express.json());
app.use(cors());

const{getMovies, deleteMovie,createMovie, updateMovie} = require('./controller')

//end points----------------
app.get('/api/movies', getMovies)
app.delete('/api/movies/:id', deleteMovie)
app.post('/api/movies', createMovie)
app.put('/api/movies/:id', updateMovie)

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
})
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, 'index.js'))
})


//getting from the main.js
//end points-----------

app.listen(port, () => {
 console.log(`Slacking on port ${port}`) 
})
    
