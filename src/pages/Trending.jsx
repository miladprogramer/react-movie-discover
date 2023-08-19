import React from 'react'
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/all/day',
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWE4NDM3NjIzNTRlYmRiM2QyNDlhMTUxNGIwY2M5ZSIsInN1YiI6IjY0ZTEzMDFiMzcxMDk3MDBhYzQ1NTlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0kfWu571mqNTnlMR_WRctkNP-_M5eysrL3K7uB_6njI'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

const Trending = () => {
  return (
    <div>Trending</div>
  )
}

export default Trending