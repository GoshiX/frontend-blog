import img1 from "./testImg/img1.jpg"
// import img2 from "./testImg/img2.jpg"

const PhotoSlide = () => {
    return (
        <div className="PhotoSlide">
          {/* <img src={img1} alt="can not find" style={{"maxHeight" : "100%", "maxWidth" : "100%", margin : "auto"}} /> */}
          <div id="modal01" class="w3-modal" onclick="this.style.display='none'">
            <span class="w3-button w3-hover-red w3-xlarge w3-display-topright">&times;</span>
            <div class="w3-modal-content w3-animate-zoom">
              <img src={img1} alt="wf" />
            </div>
          </div>
        </div>
      );
}
 
export default PhotoSlide;