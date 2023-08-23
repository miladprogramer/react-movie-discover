import React, { useEffect, useState } from 'react'


const Genres = () => {

const [genres,setGenres]=useState([])

useEffect(()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWE4NDM3NjIzNTRlYmRiM2QyNDlhMTUxNGIwY2M5ZSIsInN1YiI6IjY0ZTEzMDFiMzcxMDk3MDBhYzQ1NTlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0kfWu571mqNTnlMR_WRctkNP-_M5eysrL3K7uB_6njI'
        }
      };
      
      fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
        .then(response => response.json())
        .then(response =>
            {
            console.log(response.genres) 
            setGenres(response.genres)  
            } ) 
        .catch(err => console.error(err));

},[])


  return (
    <>
    <div>
        {
            genres.map((genre) =>(
                
                 <span>{genre.name}</span>

            ))
        }
    </div>

    </>
  )
}

export default Genres