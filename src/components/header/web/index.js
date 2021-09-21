import React from 'react'
import './web.css'

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#projects" >
                <i class="fi-rr-edit-alt"></i>Projects
                </a>
            </div>
            <div className="web-option">
                <a href="#skills" >
                <i class="fi-rr-laptop"></i>Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#resume" >
                <i class="fi-rr-form"></i>Resume
                </a>
            </div>
            <div className="web-option">
                <a href="#contact" >
                <i class="fi-rr-portrait"></i>Contact
                </a>
            </div>
        </div>
    )
}

export default Web
