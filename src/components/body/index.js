import React from 'react'
import About from './about'
import './body.css'
import Contact from './Contact'
import Projects from './Projects'
import Skills from './skills'
import Work from './work'

function Body() {
    return (
        <div className="body">
            <section id='about'>
                <About />
            </section>

            <section id="projects">
                <Projects />
            </section>

            <section id="skills">
                <Skills />
            </section>

            <section id="resume">
                <Work/>
            </section>

            <section id="contact">
                <Contact />
            </section>

        </div>

    )
}

export default Body
