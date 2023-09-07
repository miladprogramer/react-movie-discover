import * as React from 'react';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import { img_300, unavailable } from '../config/config'
import './ModalContent.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import playIcon from '../image/play.png'
import Button from '@mui/material/Button';
import CreditSlider from './Slider';

const style = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  with: "80%",
  height: "85%",
  margin: "30px",
  bgcolor: '#39445a',
  color: "white",
  border: '1px solid #282c34',
  borderRadius: "10px",
  boxShadow: 24,
  p: 2,
};

export default function ModalContent({ children, media_type, id, vote_average, release_date }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();
  const [genres, setGenres] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWE4NDM3NjIzNTRlYmRiM2QyNDlhMTUxNGIwY2M5ZSIsInN1YiI6IjY0ZTEzMDFiMzcxMDk3MDBhYzQ1NTlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0kfWu571mqNTnlMR_WRctkNP-_M5eysrL3K7uB_6njI'
      }
    };

    fetch(`https://api.themoviedb.org/3/${media_type === "movie" ? "movie" : "tv"}/${id}?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        // console.log(response)
        setContent(response)
        setGenres(response.genres)
      }

      )
      .catch(err => console.error(err));


    fetch(`https://api.themoviedb.org/3/${media_type}/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        // console.log(response)
        setVideo(response.results[0]?.key)
      })

      .catch(err => console.error(err));
  }, [])
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
          {content &&
            <>
              <div className='details'>
                <div className='img-movie'>
                  {
                    <img src={content.poster_path ? `${img_300}/${content.poster_path}` : unavailable} />
                  }
                </div>

                <div className='detail'>
                  <div className='title'>
                    {content.original_title || content.title || content.name}
                  </div>
                  <div className='genres'>
                    {genres.map(g =>  <div key={g.id} className='genre'>{g.name}</div>)}

                  </div>
                  <div className='progress_play'>
                    <div className='progress-bar'>
                      <CircularProgressbar value={`${vote_average}` * 10} text={`${vote_average}%`} />
                    </div>

                    <Button href={`https://www.youtube.com/watch?v=${video}`}>
                      <div className='img-play'>
                        <img src={playIcon} />
                        <span>Watch Trailer</span>
                      </div>
                    </Button>

                  </div>

                  <div className='overview'>
                    <p>Overview</p>
                    {content.overview}

                  </div>

                  <div className='release-date'>

                    <div>
                      <span>{`Status: ${content.status}`}</span>

                    </div>
                    <div>
                      <span>{`Release Date:  ${release_date}`}</span>

                    </div>
                    <div>
                      <span>{`Runtime: ${content.runtime ? content.runtime : "-----"}`}</span>
                      <span></span>

                    </div>
                    <div>
                      <span>Director:</span>

                    </div>
                    <div>
                      <span>Writer:</span>

                    </div>
                  </div>
                  {/* <div className='slider'>
<CreditSlider />
                  </div> */}
                  <div className='slider'>

                    <span>Casts</span>
                    <CreditSlider media_type={media_type} id={id} />
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