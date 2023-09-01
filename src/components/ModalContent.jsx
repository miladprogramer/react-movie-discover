import * as React from 'react';
import Box from '@mui/material/Box';
import { useEffect,useState } from 'react';
import Modal from '@mui/material/Modal';
import { img_300, unavailable } from '../config/config'
import './ModalContent.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
with:"50%",
height:"70%",
margin:"50px",
  bgcolor: '#39445a',
  color:"white",
  border: '1px solid #282c34',
  borderRadius:"10px",
  boxShadow: 24,
  p: 2,
};

export default function ModalContent({children,media_type,id,vote_average}) {
  const [open, setOpen] =useState(false);
  const [content,setContent]=useState();
  const [genres,setGenres]=useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWE4NDM3NjIzNTRlYmRiM2QyNDlhMTUxNGIwY2M5ZSIsInN1YiI6IjY0ZTEzMDFiMzcxMDk3MDBhYzQ1NTlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0kfWu571mqNTnlMR_WRctkNP-_M5eysrL3K7uB_6njI'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/${media_type==="movie" ? "movie" : "tv"}/${id}?language=en-US`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            setContent(response)
          setGenres(response.genres)
        }
            
            )
        .catch(err => console.error(err));

  },[])
  return (
    <div>
      <div onClick={handleOpen}>{children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         { content &&
         <>
         <div className='details'>
 <div className='img-movie'>
            {
              <img src={content.poster_path ? `${img_300}/${content.poster_path}`:unavailable}/> 
            }
         </div>

         <div className='detail'>
            <div className='title'>
              {content.original_title || content.title || content.name}
            </div>
            <div className='genres'>
              {genres.map(g => <div className='genre'>{g.name}</div>)}
             
            </div>
  
<div className='progress-bar'>
<CircularProgressbar value={`${vote_average}`*10} text={`${vote_average}%`} />
</div>
    
         </div>

         </div>
        
         </>
            
            
         }
        </Box>
      </Modal>
    </div>
  );
}