import React from 'react'
import './contact.css'
import Seperator from "../../common/social-contact/seperator/index"
import SocialContact from '../../common/social-contact/index'
import SubmitForm from './forms'

function Contact() {
    return (
        <div className="contact">
            <Seperator />
            <label className="section-title">Contact</label>
            <div className="contact-container">

                    <div className="contact-left">
                        <p>Want to get in touch? Contact me on any of the platforms</p>
                        <SocialContact />
                    </div>
                    <div className="form-download">
                    <div className="form">
                        <SubmitForm />
                    </div>
                    <div className="download">
                        <a download href={require('../../../assets/icons/Resume_Leslie.pdf').default}>
                        <i class="fi-rr-cloud-download"></i>
                            Download Resume</a>
                    </div>
                </div>



            </div>



        </div>
    )
}

export default Contact
