import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to = "/" style={{"textDecoration" : "none"}}>
                My blog
            </Link>
            <div className="links">
                {/* <a href="/" className="link">Home</a>
                <a href = "/" className="BackColor10link" >New blog</a> */}
            </div>
        </nav>
    );
}
 
export default Navbar;