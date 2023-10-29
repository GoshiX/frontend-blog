const Text = (props) => {

    return ( 
      <p className="Text" style={{padding: (props.padding === undefined ? "15px" : props.padding)}}>{props.data}</p>
     );
}
 
export default Text;