import React from 'react'
import sectionBanner from '../assets/images/mint.gif'
function Mint() {
    return (
        <div id="mint">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <img src={sectionBanner} alt="section banner"/>
                    </div>
                    <div className="col-lg-7">
                        <h2 className="mint__heading">-/3,700 AVAILABLE</h2>
                        <button className="mint__button">Mint Now</button>
                        <h2 className="mint__heading">0.035ETH+Gas</h2>
                        <p>*If your wallet address is on the whitelist - you will be able to mint for the above price a maximum of 2 BearX NFTs. If you click the mint button and there is a high gas fee / gas error - it means this wallet is not whitelisted.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mint
