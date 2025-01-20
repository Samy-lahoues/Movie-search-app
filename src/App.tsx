import {useState, useEffect} from 'react'
import MovieCard from './MovieCard';
import './App.css'
import searchIcon from "../public/search.svg"
// const  API_URL: string = "https://api.themoviedb.org/3/movie/11?api_key=b305a5c25df57b17be3e2e93e94364a9&include_adult=false";
const placeholderImg : string = "https://placehold.co/400";
const search : string = "https://api.themoviedb.org/3/search/movie?query="
const base_img : string = 'https://image.tmdb.org/t/p/w500';
const options:object = {
  method: 'GET',
  headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzA1YTVjMjVkZjU3YjE3YmUzZTJlOTNlOTQzNjRhOSIsIm5iZiI6MTczNjc3MzUxOS45ODIsInN1YiI6IjY3ODUwZjhmYjkwOTRjN2RmZWJiM2M1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S79wvcYr-kHjaJXErZ49h4a9g-2aEUxdxUQi2epMB6g'
      }
};

const unwantedKeywords: string[] = [
  "sex", "erotic", "nude", "porn", "explicit", "violence",
  "gore", "intimate", "adult", "fetish", "prostitute", "lust",
  "seduction", "affair", "orgy", "hardcore", "XXX", "taboo"
];

function App() {
  const [searchQuery, setSearchQuery] = useState("superman")
  const [movies, setMovies] = useState([]);
  const searchMovie = async (title : string) => {
    try{
      const response = await fetch(`${search}${encodeURIComponent(title)}&include_adult=false`, options)
      if (!response.ok){
        throw new Error(`Http error status ! ${response.status}`);
      }
      const data = await response.json()
      setMovies(data.results?.filter(movie => {
        const title = movie.original_title?.toLowerCase() || "";
        const overview = movie.overview?.toLowerCase() || "";
    
        // Check if any unwanted keyword is present in the title or overview
        return !unwantedKeywords.some(keyword => 
          title.includes(keyword) || overview.includes(keyword)
        )
        && (movie.original_language === "en");}))
      console.log(data.results)
    }
    catch(error){
      console.error("Error fetching the movie", error)
    }
  }
  useEffect(() => {
    searchMovie("batman");
  },[])
  return (
    <div className='app'>
      <h1>MoviesLand</h1>

      <div className='search'>
        <input  type="text" 
          value={searchQuery} 
          placeholder='Search for movies'
          onChange={(e) => {
            setSearchQuery(e.target.value)
          }} />
        <img src={searchIcon} 
        alt="search-icon"
        onClick={() => {
          searchMovie(searchQuery)
        }} />
      </div>
      {
          movies?.length > 0
          ? (
            <div className="container">
              {
              movies.map((movie, index) => (
              <MovieCard 
                title={movie.original_title}
                poster={base_img + movie.poster_path || placeholderImg}
                date={movie.release_date || ""} 
                id={index}/>))
              }
            </div>
          ):
          (
            <div className="empty">No movie found</div>
          )
        }
    </div>
  )
}

export default App;
