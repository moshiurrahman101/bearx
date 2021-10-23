import React from 'react'
import akeem from '../assets/images/akeem.png'
import Obelisxx from '../assets/images/Group 36810.png'
import Bayliss from '../assets/images/Rectangle 42.png'
import Gyoza from '../assets/images/goza.png'
import Koki from '../assets/images/Group 36814.png'
import Diemension from '../assets/images/Group 36812.png'
import Jaarth from '../assets/images/Rectangle 42 (1).png'
function Team() {
    return (
        <div id="team">
            <div className="container">
                <h2 className="section__heading">Meet our team</h2>
                <div className="team__card">
                    <div className="team__item">
                        <img src={akeem} alt="Team"/>
                        <span className="team__title">Akeem
                        <span><i className="fab fa-twitter"></i></span>
                        </span>    
                        <p>Creator</p>                    
                    </div>
                    <div className="team__item">
                        <img src={Obelisxx} alt="Team"/>
                        <span className="team__title">Obelisxx
                        <span><i className="fab fa-twitter"></i></span>
                        </span>    
                        <p>Artist</p>                    
                    </div>
                    <div className="team__item">
                        <img src={Bayliss} alt="Team"/>
                        <span className="team__title">Bayliss
                        <span><i className="fab fa-twitter"></i></span>
                        </span>    
                        <p>Developer</p>                    
                    </div>
                    <div className="team__item">
                        <img src={Gyoza} alt="Team"/>
                        <span className="team__title">Gyoza
                        <span><i className="fab fa-twitter"></i></span>
                        </span>    
                        <p>Community Lead</p>                    
                    </div>
                    <div className="team__item">
                        <img src={Koki} alt="Team"/>
                        <span className="team__title">Koki
                        <span><i className="fab fa-twitter"></i></span>
                        </span>    
                        <p>Concept Art</p>                    
                    </div>
                    <div className="team__item">
                        <img src={Diemension} alt="Team"/>
                        <span className="team__title">Diemension
                        <span><i className="fab fa-twitter"></i></span>
                        </span>    
                        <p>Art + Design</p>                    
                    </div>
                    <div className="team__item">
                        <img src={Jaarth} alt="Team"/>
                        <span className="team__title">Jaarth 
                        <span><i className="fab fa-twitter"></i></span>
                        </span>    
                        <p>BearX Writer</p>                    
                    </div>
                </div>
                <div className="team__bottom--text">+ An incredible extended team of 18 others including moderators, co-devs, co-designers and more. </div>
            </div>
        </div>
    )
}

export default Team
