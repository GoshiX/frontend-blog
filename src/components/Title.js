const Title = (props) => {
    const data = props.data;
    const tags = (props.tags ? props.tags : []);

    const tags_print = tags.map(obj => <p className="tag">{obj}</p>)

    return (
        <div className="title">
            <div style={{paddingBottom: (tags.length == 0 ? "0px" : "16px"), alignItems: "center", display: "flex", justifyContent: "center", paddingTop : (tags.length == 0 ? "0px" : "10px")}}>
                {tags_print}
            </div>
            <h1 className="text">{data}</h1>
        </div>
    );
}
 
export default Title;