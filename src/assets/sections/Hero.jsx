import Navbar from "../components/Navbar";
import '../styles/hero.css'

function Hero() {
    return(
        <div className="hero-ctr">
            <Navbar />
            <h1 className="hero-header">WE ARE CREATIVES</h1>
            <svg className="arrow-down" width="36" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15"/></g></svg>
        </div>
    );
}

export default Hero;