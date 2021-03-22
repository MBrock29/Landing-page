import React from 'react'
import "./App.css"

export default function Feature() {
    return (
        <div className="feature">
            <div className="featureHeader">
            <h2>Portfolio</h2>
            <p>Please find a list of my projects with brief descriptions below - Click on the title links to view them!</p></div>
            <div className="featureCardDisplay">
             <div className="featureCard">
                 <a href="www.google.co.uk">Social Media Project</a>
                 <p></p>
                 </div>
             <div className="featureCard">
                 <a href="www.google.co.uk">To-do List</a>
             <p>To-do list with Auth login and the functionality of adding, removing and marking as complete using 
                 modern ES6 Javascript such as array.filter, array.map and array.splice as well as react hooks useState and useEffect.</p>
             </div>
             <div className="featureCard">
                 <a href="www.google.co.uk">Weather App</a>
                 <p>Weather app using API fetch to show weather for any location in the world.</p>
                 </div>
             <div className="featureCard">
                 <a href="www.google.co.uk">Amazon Clone</a>
                 <p>Amazon website clone with Auth login, React context and React router giving the functionality to 
                     add items to basket, sign in, view basket and total sum of products. </p>
                 </div>
            </div>
        </div>
    )
}
