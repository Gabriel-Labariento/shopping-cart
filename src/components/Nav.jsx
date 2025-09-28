import "../styles/Nav.css";

function Nav({cartItemCount = 0}) {
    return(
        <nav className="navbar">
            <h1 className="navbar-title dynalight-regular">Chic Couture</h1>
            <ul className="navbar-links roboto-400">
                <li className="navbar-link">Home</li>
                <li className="navbar-link">Shop</li>
                <li className="navbar-link">Cart ({cartItemCount})</li>
            </ul>
        </nav>
    )
}

export default Nav