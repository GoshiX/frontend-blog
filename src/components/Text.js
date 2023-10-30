const Text = (props) => {

  const data = props.data;

    return ( 
      <p className="Text" style={{padding: (props.padding === undefined ? "15px" : props.padding)}}>{data.join("\n")}</p>
     );
}
 
export default Text;