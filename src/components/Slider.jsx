
// import AliceCarousel from 'react-alice-carousel';
// import React, {  useEffect ,useState} from "react";
// import { img_300, unavailable } from '../config/config'
// import './Slider.css'
// const handleDragStart = (e) => e.preventDefault();


// const CreditSlider = ({media_type ,id}) => {
//     const [cast,setCast]=useState([])
    
//     const items = [
//         <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
//         <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
//         <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
//       ];
//     // const items = cast.map((c)=>(
//     //  <div className='slider-img'>
//     //   <img className='img-slider' onDragStart={handleDragStart} src={c.profile_path ? `${img_300}/${c.profile_path}` : unavailable} />
//     //     <span>{c.name}</span>
//     //     </div>
//     //    ))
   
        
//     useEffect(()=>{
//         const options = {
//             method: 'GET',
//             headers: {
//               accept: 'application/json',
//               Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWE4NDM3NjIzNTRlYmRiM2QyNDlhMTUxNGIwY2M5ZSIsInN1YiI6IjY0ZTEzMDFiMzcxMDk3MDBhYzQ1NTlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0kfWu571mqNTnlMR_WRctkNP-_M5eysrL3K7uB_6njI'
//             }
//           };
          
//           fetch(`https://api.themoviedb.org/3/${media_type}/${id}/credits?language=en-US`, options)
//             .then(response => response.json())
//             .then(response =>{
//                 console.log(response)
//                 setCast(response.cast)
//             }
                 
//                  )
//             .catch(err => console.error(err));
//     },[])

// const responsive=  {
//     0: {
//         items: 1,
//     },
//     1024: {
//         items: 3,
//     }
//   }
//   return (
//     <AliceCarousel disableDotsControls disableButtonsControls 
//   responsive={responsive}
 
//     mouseTracking items={items} />
//   );
// }
// export default CreditSlider;

import React, {  useEffect ,useState} from "react";
import Slider from "react-slick";
import { img_300, unavailable } from '../config/config'
import './Slider.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const CreditSlider =({media_type ,id})=>{

const [cast,setCast]=useState([])

  
const settings = {
    dots: false,
    infinite: false,
    autoplay:true,
    speed: 50,
    slidesToShow: 2,
    slidesToScroll: 1
  };

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWE4NDM3NjIzNTRlYmRiM2QyNDlhMTUxNGIwY2M5ZSIsInN1YiI6IjY0ZTEzMDFiMzcxMDk3MDBhYzQ1NTlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0kfWu571mqNTnlMR_WRctkNP-_M5eysrL3K7uB_6njI'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/${media_type}/${id}/credits?language=en-US`, options)
            .then(response => response.json())
            .then(response =>{
                console.log(response)
                setCast(response.cast)
            }
                 
                 )
            .catch(err => console.error(err));
    },[])
    return (
      <div className="main-slider">

        <Slider {...settings}>
           
         {
  cast.map((c)=>(
         <div className='slider-img'>
          <img className='img-slider'  src={c.profile_path ? `${img_300}/${c.profile_path}` : unavailable} />
            <span>{c.name}</span>
            </div>
           ))
         }
       
        </Slider>
      </div>
    );
  }
export default CreditSlider;