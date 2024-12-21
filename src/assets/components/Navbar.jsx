import '../styles/navbar.css'
import { useState } from 'react';

function Navbar() {


    const [isOpen, setIsOpen] = useState(false);

    const handleSidebarOpen = () => {
        if (isOpen == false) {
            setIsOpen(true);
        } 
    }

    const handleSidebarClose = () => {
        if(isOpen == true) {
            setIsOpen(false);
        }
    }



    return(
        <div className="navbar-ctr">
            <h2 className="brand-name">sunnyside</h2>
            <div className='nav'>
            <ul className='nav-links'>
                <li><a className='nav-link' href="">About</a></li>
                <li><a className='nav-link' href="">Services</a></li>
                <li><a className='nav-link' href="">Projects</a></li>
                <li><a className='contact-link' href="">CONTACT</a></li>
            </ul>
            <button onClick={handleSidebarOpen} className='sidebar-open-button'><svg width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fill-rule="evenodd"/></svg></button>
            </div>

            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <button onClick={handleSidebarClose} className='sidebar-close-btn'>X</button>
            <ul className='sidebar-links'>
                <li><a className='nav-link' href="">About</a></li>
                <li><a className='nav-link' href="">Services</a></li>
                <li><a className='nav-link' href="">Projects</a></li>
                <li><a className='contact-link' href="">CONTACT</a></li>
            </ul>
            </div>
        </div>
    );
}

export default Navbar