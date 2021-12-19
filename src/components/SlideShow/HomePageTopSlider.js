import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Style.css'

const slideImages = [
  'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/31/a6a1bba2-d8af-4feb-881d-325bd8545c071617211308576-Dk-banner.jpg',
  'https://assets.myntassets.com/assets/images/2021/12/15/520b589b-ba3b-47c5-b4d0-308168a3e1501639579410002-1.jpeg',
  'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/31/a6a1bba2-d8af-4feb-881d-325bd8545c071617211308576-Dk-banner.jpg'
];

export const HomePageTopSlideshow = () => {
    return (
      <div>
        <Slide easing="ease" duration={2000} transitionDuration={500} indicators={true}>
          <div className="each-slide">
            <div className='dark-overlay' style={{backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.6292892156862745) 0%, rgba(0,0,0,0.2903536414565826) 100%), url(https://images.pexels.com/photos/10071556/pexels-photo-10071556.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=900)", backgroundSize:'cover'}}>
                <div className='slider-text-box'>
                    <div className='banner-inner'>
                    <h1 className='text-slider'>A Gift Can Change The Mood Of Your <span className="custom-color">Partner</span></h1>
                    </div>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div className='dark-overlay' style={{backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.6292892156862745) 0%, rgba(0,0,0,0.2903536414565826) 100%), url(https://images.pexels.com/photos/3776821/pexels-photo-3776821.jpeg?auto=compress&cs=tinysrgb&dpr=3.5&h=350&w=2260)", backgroundPosition:'left', backgroundSize:'cover'}}>
                <div className='slider-text-box'>
                    <div className='banner-inner'>
                    <h1 className='text-slider'>A Gift Can Change The Mood Of Your <span className="custom-color">Partner</span></h1>
                    </div>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div className='dark-overlay' style={{backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.6292892156862745) 0%, rgba(0,0,0,0.2903536414565826) 100%), url(https://images.pexels.com/photos/3777838/pexels-photo-3777838.jpeg?auto=compress&cs=tinysrgb&dpr=1.5&h=950&w=1260)", backgroundPosition:'left', backgroundSize:'cover'}}>
                <div className='slider-text-box'>
                    <div className='banner-inner'>
                    <h1 className='text-slider'>A Gift Can Change The Mood Of Your <span className="custom-color">Partner</span></h1>
                    </div>
              </div>
            </div>
          </div>
          {/* <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`, height: 540}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`, height: 540}}>
              <span>Slide 3</span>
            </div>
          </div> */}
        </Slide>
      </div>
    )
};