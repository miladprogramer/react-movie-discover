
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

// import React, {  useEffect ,useState} from "react";
// import Slider from "react-slick";
// import { img_300, unavailable } from '../config/config'
// import './Slider.css'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// const CreditSlider =({media_type ,id})=>{

// const [cast,setCast]=useState([])


// const settings = {
//     dots: false,
//     infinite: false,
//     autoplay:true,
//     speed: 50,
//     slidesToShow: 2,
//     slidesToScroll: 1
//   };

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
//     return (
//       <div className="main-slider">

//         <Slider {...settings}>

//          {
//   cast.map((c)=>(
//          <div className='slider-img'>
//           <img className='img-slider'  src={c.profile_path ? `${img_300}/${c.profile_path}` : unavailable} />
//             <span>{c.name}</span>
//             </div>
//            ))
//          }

//         </Slider>
//       </div>
//     );
//   }
// export default CreditSlider;
// import Carousel from 'react-elastic-carousel'

// const CreditSlider=()=>{



//   return(
//     <>
//    <Carousel itemsToShow={1}>
//   <Item>1</Item>
//   <Item>2</Item>
//   <Item>3</Item>
//   <Item>4</Item>
//   <Item>5</Item>
//   <Item>6</Item>
// </Carousel>

//     </>


//   )
// }
// export default CreditSlider;

import { useState, useEffect } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import { img_300, unavailable } from '../config/config'
import './Slider.css'
const CreditSlider = ({ media_type, id }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [cast, setCast] = useState([])



  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWE4NDM3NjIzNTRlYmRiM2QyNDlhMTUxNGIwY2M5ZSIsInN1YiI6IjY0ZTEzMDFiMzcxMDk3MDBhYzQ1NTlmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0kfWu571mqNTnlMR_WRctkNP-_M5eysrL3K7uB_6njI'
      }
    };

    fetch(`https://api.themoviedb.org/3/${media_type}/${id}/credits?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setCast(response.cast)
      }

      )
      .catch(err => console.error(err));
  }, [])
  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={7}
        itemsToScroll={1}

        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 7,
            itemsToScroll: 1,
            minWidth: 768,

          },
        ]}
        speed={1500}
        
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        {/* <div style={{ width: 100, height: 100, background: '#ff80ed' }}>
          slide 0
        </div>
        <div style={{ width: 100, height: 100, background: '#065535' }}>
          slide 1
        </div>
        <div style={{ width: 100, height: 100, background: '#000000' }}>
          slide 2
        </div>
        <div style={{ width:100, height: 100, background: '#133337' }}>
          slide 3
        </div>
        <div style={{ width: 100, height: 100, background: '#ffc0cb' }}>
          slide 4
        </div>
        <div style={{ width: 100, height: 100, background: '#ffffff' }}>
          slide 5
        </div> */

          cast.map((c) => (
            <div className='slider-img'>
              <img className='img-slider' src={c.profile_path ? `${img_300}/${c.profile_path}` : unavailable} />
              <span>{c.name}</span>
            </div>
          ))
        }



      </ReactSimplyCarousel>
    </div>
  );
}

export default CreditSlider;