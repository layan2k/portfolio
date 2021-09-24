import React from 'react'
import './mobile.css'

function Mobile({isOpen, setisOpen}) {
    return (
        <div className='mobile'>
            <div className="close-icon" onClick={() => setisOpen(!isOpen)}>
            <i class="fi fi-rr-cross"></i>
            </div>
            <div className="mobile-options">
                <div className="mobile-option">
            <a href="#projects" >
                <i class="fi fi-rr-edit-alt option-icons"></i>Projects
                </a>
                </div>

            <div className="mobile-option">
                <a href="#skills" >
                <i class="fi fi-rr-laptop option-icons"></i>Skills
                </a>
            </div>
            <div className="mobile-option">
                <a href="#resume" >
                <i class="fi fi-rr-form option-icons"></i>Resume
                </a>
            </div>
            <div className="mobile-option">
                <a href="#contact" >
                <i class="fi fi-rr-portrait option-icons"></i>Contact
                </a>
            </div>
            </div>


        </div>
    )
}

export default Mobile
