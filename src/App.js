import React from "react";
import { useEffect,useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

//575dd9dc
const Api_URL = 'http://www.omdbapi.com?apikey=575dd9dc';
const movie1 = {
    
        "Title": "Spiderman",
        "Year": "1990",
        "imdbID": "tt0100669",
        "Type": "movie",
        "Poster": "N/A"
    
}
const App = () =>{
    const [movies, setmovies] = useState([]);
    const [searchTerm,setsearchTerm] = useState('');
    const searchMovies = async(title)=>{
        const response = await fetch (`${Api_URL}&s=${title}`);
        const data = await response.json();
        setmovies(data.Search);
    }
    useEffect(()=>{
        searchMovies('Spiderman')

    },[])
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input placeholder="Search for movies" value={searchTerm} onChange={(e)=>setsearchTerm(e.target.value)}>

                </input>
                <img src={SearchIcon} alt="Search" onClick={()=>searchMovies(searchTerm)}></img>

            </div>
            { 
                movies?.length > 0 
                ?(
                <div className="Container">
                    {
                        movies.map((movie)=>(
                            <MovieCard movie= {movie}/>
                        ))
                    }
                </div>

                ): 
                (
                    <div>
                        <h2>No Movies found </h2>
                    </div>
                )
                 
                
            }
    
            </div>
)
    
}

export default App;