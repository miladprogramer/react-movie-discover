import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./CustomPagination.css"
const CustomPagination = ({setPage}) => {
  return (
    <div className='navigation-page'>
    <Stack spacing={2}>
   
    <Pagination count={10} color="primary" />
  
  </Stack>
  </div>
  )
}

export default CustomPagination