import '../styles/navbar.css'

function Navbar() {
    return(
        <div className="navbar-ctr">
            <h2 className="brand-name">sunnyside</h2>
            <ul className='nav-links'>
                <li><a className='nav-link' href="">About</a></li>
                <li><a className='nav-link' href="">Services</a></li>
                <li><a className='nav-link' href="">Projects</a></li>
                <li><a className='contact-link' href="">CONTACT</a></li>
            </ul>
        </div>
    );
}

export default Navbar