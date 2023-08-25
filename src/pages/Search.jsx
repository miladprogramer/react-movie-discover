import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
const Search = () => {

const [type,setType]=useState()
const [value, setValue] = useState(0);
const handleChange = (event, newValue) => {
  setValue(newValue);
};

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

  return (
<>
<ThemeProvider theme={darkTheme}>
<div style={{display:"flex" , margin:"15px"}}>
<TextField id="filled-basic" label="Filled" variant="filled" fullWidth />
<Button style={{ marginLeft:"15px"}} variant="contained"><SearchIcon /></Button>
    </div>
<div>
<Box sx={{ width: '100%',marginTop:"15px"}}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab style={{ width:"50%"}} label="Item One" />
        <Tab style={{ width:"50%"}}label="Item Two" />
      
      </Tabs>
    </Box>
</div>
</ThemeProvider>


    </>
  )
}

export default Search