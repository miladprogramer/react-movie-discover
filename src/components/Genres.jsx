import React, { useEffect, useState } from 'react'
import Chip from '@mui/material/Chip';


const Genres = ({genres,setGenres , selectedGenres,setSelectedGenres,setPage }) => {

const handleAdd=(genre)=>{

    setSelectedGenres([...selectedGenres,genre])
    setGenres(genres.filter((g)=>g.id!==genre.id))
    setPage(1)
}

const handleRemove=(genre)=>{

    setSelectedGenres(selectedGenres.filter((select)=> select.id !== genre.id))
    setGenres([...genres,genre])
    setPage(1)
}

useEffect(()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWE4NDM3NjIzNTRlYmRiM2QyNDlhMTUxNGIwY2M5ZSIsInN1YiI6IjY0ZTEzMDFiMzcxMDk3MDBhYzQ1NTlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0kfWu571mqNTnlMR_WRctkNP-_M5eysrL3K7uB_6njI'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, options)
        .then(response => response.json())
        .then(response =>
            {
       
            
            setGenres(response.genres) 
            
            
            } ) 
        .catch(err => console.error(err));

},[])


  return (
    <>
    <div style={{padding:"20px"  ,textAlign:"center"}}>

    {
            selectedGenres && selectedGenres.map((genre) =>(

          <Chip label={genre.name} 
          key={genre.id}
          size="small"
           color="primary"
            style={{margin:2} }
             clickable 
            onDelete={()=>handleRemove(genre)}
              />
              

            ))
        }
        {
            genres && genres.map((genre) =>(

          <Chip label={genre.name} 
          key={genre.id}
          size="small"
           color="warning"
            style={{margin:2} }
             clickable 
             onClick={()=>handleAdd(genre)}
              />
              

            ))
        }
    </div>

    </>
  )
}

export default Genres