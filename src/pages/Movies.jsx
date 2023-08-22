import React, { useEffect , useState} from 'react'
import SinglePage from '../components/SinglePage';
import CustomPagination from '../components/CustomPagination';
import './Movies.css'
const Movies = () => {
  const [content,setContent]=useState([]);
  const [page,setPage]=useState(1)

  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWE4NDM3NjIzNTRlYmRiM2QyNDlhMTUxNGIwY2M5ZSIsInN1YiI6IjY0ZTEzMDFiMzcxMDk3MDBhYzQ1NTlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0kfWu571mqNTnlMR_WRctkNP-_M5eysrL3K7uB_6njI'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&page=${page}`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response.results)
        setContent(response.results)
      }
        
     
      )
      .catch(err => console.error(err));
  },[page])

  return (
    <>
    <div className='page_title'>Movies</div>
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
        vote_average={c.vote_average} />
     )) 
     
     }

     <CustomPagination setPage={setPage} />
   </div>


    </>
  )
}

export default Movies