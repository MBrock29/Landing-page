import React from 'react'
import Illustration from "./Illustration.jpg"

export default function Hero() {
    return (
        <div className="hero">
            <div className="heroLeft"><img alt="/" src={Illustration} className="illustration"/></div>
            <div className="heroRight"><h2>About me</h2>
            <span>A highly motivated former finance professional who is ambitious to pursue a career in web development, specifically React. 
                Currently in my first role within the industry and looking to build on this experience by moving into a Junior React Developer role.

                

            <p>Responsibilities in my current role include building client websites from scratch using the 
                latest HTML/CSS/JavaScript technologies such as Bootstrap and SCSS.  Furthermore, I have been tasked with
                rebuilding client websites with React.</p>
            </span>
            </div>
            
        </div>
    )
}
