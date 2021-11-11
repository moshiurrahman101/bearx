import React from 'react'
function Banner() {
    return (
        <div id="claim__banner">
            <div className="container">
                <div className="claim__main">
                    <h1 className="section__heading">GAME CHANGING TOKENOMICS</h1>
                    <div className="claim__cards">
                        <div className="claim__item">
                            <p>Tokenomics:</p>
                            <p>TOKEN SYMBOL: $ROOT</p>
                            <p>DAILY SUPPLY: 37,000</p>                    
                        </div>
                        <div className="claim__item">
                            <p>MAX SUPPLY: 135,050,000</p>
                            <p>REDISTRIBUTION REWARD: 2%</p>  
                        </div>
                        <div className="claim__item">
                            <p>BURN MECHANICS: NFTs, Events, Digital Collectibles, Project quarterly burns</p>                        
                            <p>2% Usage Reward (Redistribution)</p> 
                        </div>
                        <div className="claim__item">
                            <p>REWARD MECHANIC: (As it stands), only BearX Genesis series yields 10 $ROOT tokens per day, everyday, for the next 10 years.</p>
                        </div>
                    </div>
                    
                    <div className="claim__button">
                        <button>Connect Wallet</button>
                        <button>Claim</button>
                    </div>
                </div>
                <div className="claim__content">
                    <h4>Read more about ROOT here </h4>
                    <p><a href="https://bearxnft.medium.com">BearX Medium</a></p>

                    <h4>$ROOT TOKEN CLAIM</h4>
                    <p>Check and claim your $ROOT rewards</p>
                    <p>The $ROOT token is a significant part of the BearX ecosystem. It fuels the Genesis bears daily with opportunities including reward based challenges, future NFTs, voting rights and more.</p>
                </div>
            </div>
        </div>
    )
}

export default Banner
