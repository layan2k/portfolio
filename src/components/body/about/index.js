import React from 'react'
import SocialContact from '../../common/social-contact'
import './about.css'

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hey There 👋, I'm
                    <br /><span className="Name">Leslie D. Shumba.</span>
                    <br /> Web Developer. Software Engineer.
                    <br /> I love playing around the web.
                </div>
                <div className="about-photo">
                    <img src={require('../../../assets/webpic3.png')} className='picture' alt="About Pic" />

                </div>
            </div>
            <div className="about-bottom">
                <SocialContact />
            </div>

        </div>
    )
}

export default About
