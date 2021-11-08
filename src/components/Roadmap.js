import React from 'react'

function Roadmap() {
    return (
        <div id="roadmap">
            <h2 className="roadmap__heading">RoadMap</h2>
            <div className="roadmap__details">
                <div className="container">
                    <div className="roadmap__content">
                        <h3 className="roadmap__listheading">Before mint</h3>
                        <ul type="square">
                            <li>Whitelist process initiated and completed. </li>
                            <li>AMAs + Setup of the community wallet containing 5% of sales revenue.</li>
                            <li>Initial Lore released</li>
                        </ul>
                    </div>
                    <div className="roadmap__content">
                        <h3 className="roadmap__listheading">After mint</h3>
                        <ul type="square">
                            <li>Rarity.tools listing</li>
                            <li>Launch of ROOT Token</li>
                            <li>Launch of MiniBearX - 2nd generation BearX NFTs</li>
                            <li>1/1 + Partnership collaboration auctions</li>
                            <li>Future roadmap features beyond this point will be decided by holders of ROOT Token</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap
