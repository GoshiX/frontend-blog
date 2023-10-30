const Margin = (props) => {
    const val = (props.val ? props.val : "30px");
    console.log(val);
    return ( <div style={{marginBottom: val}}></div> );
}
 
export default Margin;