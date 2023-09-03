import React, { useState ,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SinglePage from '../components/SinglePage';
import CustomPagination from '../components/CustomPagination';
import './Movies.css'
const Search = () => {


const [value, setValue] = useState(0);
const [searchText, setSearchText] = useState("");
const [content, setContent] = useState("");
const [page,setPage]=useState(1)
const [totalPages,setTotalPages]=useState()

const handleChange = (event, newValue) => {
  setValue(newValue);
};

const handleSearch = (e) => {
  setSearchText(e.target.value)
  setPage(1)
};


useEffect(()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWE4NDM3NjIzNTRlYmRiM2QyNDlhMTUxNGIwY2M5ZSIsInN1YiI6IjY0ZTEzMDFiMzcxMDk3MDBhYzQ1NTlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0kfWu571mqNTnlMR_WRctkNP-_M5eysrL3K7uB_6njI'
    }
  };
  
  fetch(`https://api.themoviedb.org/3/search/${value ? "tv" : "movie"}?query=${searchText}&include_adult=false&language=en-US
  &page=${page}&`, options)
    .then(response => response.json())
    .then(response => {
      // console.log(response)
      setContent(response.results)
      setTotalPages(response.total_pages)
    })
      
    .catch(err => console.error(err));
},[value,searchText,page])

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

  return (
<>
<ThemeProvider theme={darkTheme}>
<div style={{display:"flex" , margin:"15px"}}>
<TextField id="filled-basic" label="Filled" variant="filled" fullWidth
onChange={(e)=>handleSearch(e)} />
<Button style={{ marginLeft:"15px"}} variant="contained" ><SearchIcon /></Button>
    </div>
<div>
<Box sx={{ width: '100%',marginTop:"15px", marginBottom:"35px"}}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab style={{ width:"50%"}} label="Movies" />
        <Tab style={{ width:"50%"}}label="TV Series" />
      
      </Tabs>
    </Box>
</div>
</ThemeProvider>

<div>
<div className='movies'>
{

content && content.map( (c) =>(
 <SinglePage 
 key={c.id}
 id={c.id} 
 title={c.title || c.name}
  poster={c.poster_path}
   media_type={value ? "TV" : "movie"}
   release_date={c.release_date || c.first_air_date}
   vote_average={c.vote_average} 
   />
)) 

}
{
  searchText && !content &&
  (value ? <h2>No Series found.</h2> : <h2>No Movies found.</h2>)
}
<CustomPagination setPage={setPage}  totalPages={totalPages}/>
</div>


</div>

    </>
  )
}

export default Search