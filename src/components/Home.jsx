import '../styles/Home.css'
import "../styles/Button.css"
import Nav from "./Nav"
import Button from './Button';

function Home() {
    return (
        <div className='wrapper'>
            <Nav></Nav>
            <h1 className='home-title dynalight-regular'>L'art de Chic</h1>
            <h2 className='home-subtitle dynalight-regular'>est. 2025</h2>
            <Button className="home-button" text="Shop Now"></Button>
        </div>
    )
}

export default Home;