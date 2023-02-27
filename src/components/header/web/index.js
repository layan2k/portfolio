import React from 'react'
import './web.css'

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#projects" >
                <i class="fi fi-rr-edit-alt option-icons"></i>Projects
                </a>
            </div>
            <div className="web-option">
                <a href="#skills" >
                <i class="fi fi-rr-laptop option-icons"></i>Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#resume" >
                <i class="fi fi-rr-form option-icons"></i>Resume
                </a>
            </div>
        </div>
    )
}

export default Web
