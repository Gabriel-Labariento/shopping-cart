import "../styles/Nav.css";
import { Link } from "react-router-dom";

function Nav({cartItemCount = 0}) {
    return(
        <nav className="navbar">
            <h1 className="navbar-title dynalight-regular">Chic Couture</h1>
            <ul className="navbar-links roboto-400">
                <li className="navbar-link"><Link to="/" style={{textDecoration: "none", color: "#913230"}}>Home</Link></li>
                <li className="navbar-link"><Link to="/shop" style={{textDecoration: "none", color: "#913230"}}>Shop</Link></li>
                <li className="navbar-link"><Link to="/cart" style={{textDecoration: "none", color: "#913230"}}>Cart ({cartItemCount})</Link></li>
            </ul>
        </nav>
    )
}

export default Nav