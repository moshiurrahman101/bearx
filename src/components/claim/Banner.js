import React from 'react'
import claimLogo from '../../assets/images/claim.png'
function Banner() {
    return (
        <div id="claim__banner">
            <div className="container">
                <div className="claim__main">
                    <img src={claimLogo} alt="claim now"/>
                    <h1 className="section__heading">Meet $Claim <br/>BearX Utility Token</h1>
                    <p>Our vision for SupDucks goes beyond just having the sickest PFP in the game. We also want to leverage our technical powers to fully embrace the blockchain ethos and deliver unrivaled utility for our community.</p>
                </div>
            </div>
        </div>
    )
}

export default Banner
