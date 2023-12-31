import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./CustomPagination.css"
const CustomPagination = ({setPage,totalPages}) => {

  const handlePageChange=(page)=>{
setPage(page)
window.scroll(0,0)
  }

  return (
    <div className='navigation-page'>
    <Stack spacing={2}>
   
    <Pagination count={totalPages} color="warning" onChange={(e)=>handlePageChange(e.target.textContent)}/>
  
  </Stack>
  </div>
  )
}

export default CustomPagination