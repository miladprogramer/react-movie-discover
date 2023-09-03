import React, { useEffect , useState} from 'react'
import SinglePage from '../components/SinglePage';
import CustomPagination from '../components/CustomPagination';
import './Movies.css'
import Genres from '../components/Genres';
import useGenres from '../hooks/useGenres';

const Movies = () => {
  const [content,setContent]=useState([]);
  const [page,setPage]=useState(1)
  const [selectedGenres,setSelectedGenres]=useState([])
  const [genres,setGenres]=useState([])
  const [totalPages,setTotalPages]=useState()
  const useGenre=useGenres(selectedGenres)

  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWE4NDM3NjIzNTRlYmRiM2QyNDlhMTUxNGIwY2M5ZSIsInN1YiI6IjY0ZTEzMDFiMzcxMDk3MDBhYzQ1NTlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0kfWu571mqNTnlMR_WRctkNP-_M5eysrL3K7uB_6njI'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=${useGenre}`, options)
      .then(response => response.json())
      .then(response => {
        // console.log(response.results)
        setContent(response.results)
        setTotalPages(response.total_pages)
        // setGenreId(selectedGenres.map((g)=>g.id)) 
      }
        
     
      )
      .catch(err => console.error(err));
  },[page,useGenre])
  
  return (
    <>
    <div className='page_title'>Movies</div>

<Genres selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}
genres={genres} setGenres={setGenres} setPage={setPage}
 />
   <div className='movies'>
   {

     content && content.map( (c) =>(
      <SinglePage 
      key={c.id}
      id={c.id} 
      title={c.title || c.name}
       poster={c.poster_path}
        media_type="movie"
        release_date={c.release_date || c.first_air_date}
        vote_average={c.vote_average} 
        />
     )) 
     
     }

     <CustomPagination setPage={setPage} totalPages={totalPages}  />
   </div>


    </>
  )
}

export default Movies