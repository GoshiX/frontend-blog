import { useState } from 'react';
import Photo from './Photo';

const PhotoSlide = (props) => {
  const images = props.img;
  var cur = 0;
  const [ImgNum, ImgNumState] = useState(images[0])

  const Next = () => {
    cur++;
    cur %= images.length;
    console.log(cur);
    ImgNumState(images[cur]);
  }

  const Prev = () => {
    cur--;
    cur += images.length;
    cur %= images.length;
    console.log(cur);
    ImgNumState(images[cur]);
  }
  
    return (
        <div className="PhotoSlide">
          <Photo img = {ImgNum}/>
          <div className="arrows">
            <div title="Previous" className="arrow prev" onClick={ Prev }></div>
            <div title="Next" className="arrow next" onClick={ Next }></div>
          </div>
        </div>
      );
}
 
export default PhotoSlide;