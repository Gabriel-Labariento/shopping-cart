import { Link } from "react-router-dom"
import "../styles/Button.css"

export default function Button({className, text}) {
    return(
        <Link to="/shop"><button className={className}>{text}</button></Link>
    )
}