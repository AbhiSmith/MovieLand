import React, { useEffect, useState} from 'react'
import MovieCard from './MovieCard';

import './App.css'
import SearchIcon from './search.svg'
// d3185d45

const API_URL ='https://www.omdbapi.com?apikey=d3185d45';
const movie1 = {
    "Title": "No Time to Die: Official Title Reveal of Bond 25",
    "Year": "2019",
    "imdbID": "tt10839440",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjA3ZjhiODUtN2QxYy00MzlhLWFlYzYtZTg1ODQ2YjM0YjY3XkEyXkFqcGdeQXVyMzM3ODE4MzY@._V1_SX300.jpg"
}

const App = () => {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const serchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s={title}`)
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(()=> {
            serchMovies('Spiderman');
    },[]);

    
  return (
    <div className='app'>
      <h1>MovieLand</h1>

        <div className='search'>
            <input placeholder='Search for movies'
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img src={SearchIcon} alt='search' onClick={() => serchMovies(searchTerm)}/>
        </div>
        {
            movies?.length > 0
            ? 
            (<div className='container'>
                {movies.map((movie) => (
                    <MovieCard movie={movie}/>
                ))}
             </div>
            ) :
            (
                <div className='empty'>
                    <h2>No movies found</h2>
                </div>
            )
        }
        
    </div>
  )
}

export default App
