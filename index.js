const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const{getMovies, deleteMovie,createMovie, updateMovie} = require('./controller')

//end points----------------
app.get('/api/movies', getMovies)
app.delete('/api/movies/:id', deleteMovie)
app.post('/api/movies', createMovie)
app.put('/api/movies/:id', updateMovie)




//getting from the main.js
//end points-----------

app.listen(4004, console.log('Slacking on port 4004'))
