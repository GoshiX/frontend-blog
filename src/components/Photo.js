import { useState } from "react";

const Photo = (props) => {
    const img = props.img;

    const [image, imageState] = useState(""); 

    function onClick(element) {
        console.log("OK");
        imageState(element.src);
        // document.getElementById("img01").src = element.src;
        // document.getElementById("modal01").style.display = "block";
    }

    return (
        <div className="Photo">
            <div className="w3-container w3-third">
                <img src={img} alt="can not find" style={{"maxHeight" : "100%", "maxWidth" : "100%", margin : "auto", cursor: "pointer"}} onClick={ onClick } className="HoverOpacity" />
            </div>
            <div id="modal01" class="w3-modal" onclick="this.style.display='none'">
            <div class="w3-modal-content w3-animate-zoom">
                <img src={image} alt="hz" style={{ "width": "100%" }} />
            </div>
            </div>
        </div>
      );
}
 
export default Photo;