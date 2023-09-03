import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import SinglePage from '../components/SinglePage';
import './Trending.css'
import CustomPagination from '../components/CustomPagination';

const Trending = () => {

  const [content,setContent]=useState([]);
  const [page,setPage]=useState(1)
  const [totalPages,setTotalPages]=useState()

  useEffect(() =>{

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWE4NDM3NjIzNTRlYmRiM2QyNDlhMTUxNGIwY2M5ZSIsInN1YiI6IjY0ZTEzMDFiMzcxMDk3MDBhYzQ1NTlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0kfWu571mqNTnlMR_WRctkNP-_M5eysrL3K7uB_6njI`
      }
    };
    
    fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page}`, options)
      .then(response => response.json())
      .then(response => {
    console.log(response.results);
        setContent(response.results)
        setTotalPages(response.total_pages)
      })
      .catch(err => console.error(err));
  },[page])

 

  return (
    <>
    <div className='page_title'>Trending</div>
   <div className='trending'>
   {

     content && content.map( (c) =>(
      <SinglePage 
      key={c.id}
      id={c.id} 
      title={c.title || c.name}
       poster={c.poster_path}
        media_type={c.media_type}
        release_date={c.release_date || c.first_air_date}
        vote_average={c.vote_average}
      
        />
     )) 
     
     }

     <CustomPagination setPage={setPage} totalPages={totalPages}/>
   </div>


    </>
  )
}

export default Trending