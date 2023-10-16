const Navbar = () => {
    return ( 
        <nav className="navbar">
            <a href = "/" style={{"textDecoration" : "none"}}>
                My blog
            </a>
            <div className="links">
                <a href="/" className="link">Home</a>
                <a href = "/create" className="BackColor10link" >New blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;