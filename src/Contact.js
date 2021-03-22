import React from 'react'
import "./App.css"
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Contact() {
    return (
        <div className="contact">
            <h2>Contact</h2>
            <div className="contactCardDisplay">
            <div className="contactCard"><div className="contactTitle">Email&nbsp;<EmailIcon /></div>
            <div><p>mbrock19@gmail.com</p></div></div>
            <div className="contactCard"><div className="contactTitle">Phone&nbsp;<PhoneIphoneIcon /></div>
            <div><p>07902 352381</p></div></div>
            <div className="contactCard"><div className="contactTitle">LinkedIn&nbsp;<LinkedInIcon /></div>
            <div><p><a href="https://www.linkedin.com/in/michael-brock-48909998/">Click here!</a></p></div></div>
            <div className="contactCard"><div className="contactTitle">GitHub&nbsp;<GitHubIcon /></div>
            <div><p><a href="https://github.com/MBrock29">Click here!</a></p></div></div>
            </div>
        </div>
    )
}
