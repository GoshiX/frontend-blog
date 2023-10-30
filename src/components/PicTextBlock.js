import PhotoSlide from './PhotoSlide';
import Text from './Text';

const PicTextBlock = (props) => {

  const data = props.data;

  const text = [];
  for (let i = 0; i < data.length; i++) {
    text.push(<Text padding="8px" key={i} data={[data[i]]} />)
  }

    return ( 
        <div className="BlockPic">
          <PhotoSlide img={props.img}/>
          <div style={{margin: "10px"}}></div>
            {text}
        </div>
     );
}
 
export default PicTextBlock;