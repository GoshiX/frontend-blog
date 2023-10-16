import img1 from "./testImg/img1.jpg"
// import img2 from "./testImg/img2.jpg"

const PhotoSlide = () => {
    return (
        <div className="PhotoSlide">
                <img src={img1} alt="can not find" style={{"maxHeight" : "100%", "maxWidth" : "100%", margin : "auto"}} />
                
        </div>
      );
}
 
export default PhotoSlide;