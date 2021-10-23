import React from 'react'
import bannerImage from '../assets/images/Group 36971.png'
function Banner() {
    return (
        <div className="container">
            <div className="banner">
                <h1 >BearX Has <br />Arrived</h1>
                <p>This project is made for fun, and will be driven by it. 
                    The community comes first, always and forever. !chomp</p>
                <img src={bannerImage} alt="banner"/>
            </div>
        </div>
    )
}

export default Banner
