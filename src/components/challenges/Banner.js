import React from 'react'

function Banner() {
    return (
        <div id="challenges__banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="challenges__banner--heading">Challenges</h1>
                    </div>
                    <div className="col-lg-6">
                        <div className="challenges__banner--text">
                            <p>Challenges are the only way to earn the most exclusive BearX tokens.
                            </p>
                            <p>
                            Collect the required tokens, and hold on to them until after the timer expires.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <hr/>
        </div>
    )
}

export default Banner
