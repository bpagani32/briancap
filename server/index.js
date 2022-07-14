const express = require('express');
const cors = require('cors');
const path =require('path');

const app = express();

const port =process.env.PORT || 4004
app.use(express.json());
app.use(cors());

const{getMovies, deleteMovie,createMovie} = require('./controller')

//end points----------------
app.get('/api/movies', getMovies)
app.delete('/api/movies/:id', deleteMovie)
app.post('/api/movies', createMovie)


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '../practice.html'))
})

app.get('/css',(req,res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
})
app.get('/js',(req,res) => {
    res.sendFile(path.join(__dirname, '../index.js'))
})


//getting from the main.js
//end points-----------

app.listen(port, () => {
 console.log(`Slacking on port ${port}`) 
})
    
