import React from 'react'
function Banner() {
    return (
        <div id="claim__banner">
            <div className="container">
                <div className="claim__main">
                    <h1 className="section__heading">$ROOT TOKEN CLAIM</h1>
                    <h4 className="section__subheading">Check and claim your $ROOT rewards</h4>
                    <span className="section__paragraph">The $ROOT token is a significant part of the BearX ecosystem. It fuels the Genesis bears daily with opportunities including reward based challenges, future NFTs, voting rights and more.</span>
                    <h2 className="section__heading">GAME CHANGING TOKENOMICS</h2>

                    <div className="claim__cards">
                        <div className="claim__item">
                            <p>TOKEN SYMBOL</p>
                            <p>$ROOT</p>                  
                        </div>
                        <div className="claim__item">
                            <p>MAX SUPPLY</p>
                            <p>135,050,000</p>  
                        </div>
                        <div className="claim__item">
                            <p>REDISTRIBUTION</p>                        
                            <p>REWARD - 2%</p> 
                        </div>
                        <div className="claim__item">
                            <p>UTILITY - NFTs</p>
                            <p>METAVERSE</p>
                            <p>CHALLENGES EVENTS</p>
                        </div>
                    </div>
                    
                    <div id="claim__slider">
                        
                        <div className="claim__slider__item">
                            <p>TOKEN BURN</p>
                            <p>3% - AUTOMATIC</p>
                        </div>
                        <div className="claim__slider__item">
                            <p>MARKETING</p>
                            <p>1%</p>
                        </div>
                    </div>

                    <h4 className="section__heading" style={{marginTop: '100px',marginBottom: '50px'}}>Read more about ROOT <a href="https://bearxnft.medium.com" target="_blank">here</a></h4>
                    <h4 className="section__heading">If you have tokens claimable from this wallet, it will be shown below</h4>
                    <div className="claim__button">
                        <button>ROOT</button>
                        <button>CLAIM</button>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default Banner
