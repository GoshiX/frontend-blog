import { useState, useEffect } from "react";

const Photo = (props) => {
    const img = props.img;

    const [modal, modalState] = useState("hidden")

    function onClickShow() {
        modalState("visible");
    }
    function onClickHide() {
        modalState("hidden");
    }

    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, true)
    })

    const detectKeyDown = (e) => {
        if (e.key === "Escape") {
            onClickHide();
        }
    }

    return (
        <div className="Photo">
            <div style={{
                backgroundImage: ' url(' + img + ')',
                backgroundColor: 'RGBA(0,0,0,.5)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                width: '100%',
                height: '100%',
                position: 'fixed',
                zIndex: '10000',
                top: '0',
                left: '0',
                cursor: 'pointer',
                visibility: modal,
            }}
            onClick={onClickHide}
            ></div>
            <img src={img} alt="can not find" 
            style={{
                "maxHeight" : "100%", 
                "maxWidth" : "100%", 
                margin : "auto", 
                cursor: "pointer",
                "borderRadius": "inherit",
            }} 
            onClick={ onClickShow } 
            className="HoverOpacity" />
        </div>
      );
}
 
export default Photo;