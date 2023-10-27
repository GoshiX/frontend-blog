import { useState } from 'react';
import Photo from './Photo';

const PhotoSlide = (props) => {
  const images = props.img;
  const [ImgNum, ImgNumState] = useState(0)

  const Next = () => {
    let cur = ImgNum;
    cur++;
    cur %= images.length;
    ImgNumState(cur);
  }

  const Prev = () => {
    let cur = ImgNum;
    cur--;
    cur += images.length;
    cur %= images.length;
    ImgNumState(cur);
  }
  
    return (
        <div className="PhotoSlide">
          <Photo img = {images[ImgNum]}/>
          <div className="arrows">
            <div title="Previous" className="arrow prev" onClick={ Prev }></div>
            <div title="Next" className="arrow next" onClick={ Next }></div>
          </div>
        </div>
      );
}
 
export default PhotoSlide;