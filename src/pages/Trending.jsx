import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import SinglePage from '../components/SinglePage';



const Trending = () => {

  const [content,setContent]=useState([]);

  useEffect(() =>{
    // const options = {
    //   method: 'GET',
    //   url: 'https://api.themoviedb.org/3/trending/all/day',
    //   params: {language: 'en-US'},
    //   headers: {
    //     accept: 'application/json',
    //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWE4NDM3NjIzNTRlYmRiM2QyNDlhMTUxNGIwY2M5ZSIsInN1YiI6IjY0ZTEzMDFiMzcxMDk3MDBhYzQ1NTlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0kfWu571mqNTnlMR_WRctkNP-_M5eysrL3K7uB_6njI'
    //   }
    // };
    
    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.error(response.data);
    //     setContent(response.data)
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });

    // const fetchTrending=async()=>{
    //   const { data }= await axios.get(
    //     "https://api.themoviedb.org/3/trending/all/day?access_token=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWE4NDM3NjIzNTRlYmRiM2QyNDlhMTUxNGIwY2M5ZSIsInN1YiI6IjY0ZTEzMDFiMzcxMDk3MDBhYzQ1NTlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0kfWu571mqNTnlMR_WRctkNP-_M5eysrL3K7uB_6njI"
    //   )
    //   console.log(data)
    // }

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWE4NDM3NjIzNTRlYmRiM2QyNDlhMTUxNGIwY2M5ZSIsInN1YiI6IjY0ZTEzMDFiMzcxMDk3MDBhYzQ1NTlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0kfWu571mqNTnlMR_WRctkNP-_M5eysrL3K7uB_6njI'
      }
    };
    
    fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
      .then(response => response.json())
      .then(response => {
     
        setContent(response.results)
      })
      .catch(err => console.error(err));
  },[])

 

  return (
    <>
    <div>Trending</div>
   <div>
   {

     content && content.map( (c) =>(
      <SinglePage 
      key={c.id}
      id={c.id} 
      title={c.title}
       poster={c.poster_pat}
        media_type={c.media_type}
        release_date={c.release_date}
        vote_averag={c.vote_averag} />
     )) 
     
     }
   </div>


    </>
  )
}

export default Trending