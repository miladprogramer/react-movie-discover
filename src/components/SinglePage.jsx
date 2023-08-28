import React from 'react'
import { img_300, unavailable } from '../config/config'
import Badge from '@mui/material/Badge';
import './SinglePage.css'
import ModalContent from './ModalContent'
const SinglePage = ({
    id, title,poster,media_type,release_date,vote_average
}) => {
  return (
    <>
    <ModalContent media_type={media_type} id={id}>
    <div className='media'>
    <Badge badgeContent={vote_average} color={vote_average < 6 ? "error" : "success"}/>
   
<img className='img_poster' src={poster ? `${img_300}/${poster}`:unavailable}/>
<b className='title'>{title}</b>
<div className="description">
    <span className='type'>{media_type==="movie"?"Movie":"Tv Serie"}</span>
    <span className='release_date'>{release_date}</span>
</div>
</div>
</ModalContent>
    </>
  )
}

export default SinglePage