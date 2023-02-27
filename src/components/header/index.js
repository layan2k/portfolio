import React, {useState} from 'react'
import './header.css'
import Web from './web'
import Mobile from './mobile'

function Header() {
    const[isOpen, setisOpen] = useState(false);
    return (
        <div className="header">
            <div className="logo">
                <a href="/">
                    <img src={require('../../assets/ltdev.png')} alt="LTDEV" />
                </a>
            </div>
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>
                <div className="contact-button">
                <a href='#contact'>
                <button className='in_button'>
                    Contact
                </button>

                </a>
            </div>
                <div className="mobile-menu">
                    <div className="menu-icon" onClick={() => setisOpen(!isOpen)}><i class="fi-rr-apps"></i></div>
                    {isOpen && <Mobile isOpen={isOpen} setisOpen={setisOpen} />}
                </div>
            </div>


        </div>
    )
}

export default Header
