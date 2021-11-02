import React from 'react'
import sectionImage from '../assets/images/Group 36896.png'
function LunchDetails() {
    return (
        <div id="lunchDetails">
            <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <h2 className="sectionHeading">What Are the launch details?</h2>
                    <p>
                    The launch will be through whitelist only. This means no gas wars, so everyone mints at the same price (0.035ETH+gas). To win a whitelist place, please join our discord and check the announcements. 
                    </p>
                </div>
                <div className="col-lg-4">
                    <img src={sectionImage} alt="Section banner" />
                </div>
            </div>
            </div>
        </div>
    )
}

export default LunchDetails
