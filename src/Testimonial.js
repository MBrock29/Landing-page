import React from 'react'
import "./App.css"
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

export default function Testimonial() {
    return (
        <div className="testimonial">
            <h2>Testimonial</h2>
            <p><FormatQuoteIcon className="quote"/><i>It has been a pleasure working with Michael. He came to me looking to transition from the finance industry into web development with no previous experience. 
                We spoke about what his goals were and decided on a roadmap for his learning and got to work. He is the ideal junior, happy to go off and solve problems 
                but also happy to ask questions when he is stuck and he is always digging for a deeper understanding on whatever he has done. He is now at the stage 
                where he is ready for his first React role and I believe he would be an asset to any team.</i><FormatQuoteIcon /></p>
                <p className="quoteAuthor">- Asam Shan, React Developer</p>
        </div>
    )
}
