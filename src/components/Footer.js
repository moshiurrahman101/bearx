import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
function Footer() {
    return (
        <div id="footer">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="Bearx" />
                </div>
                <ul className="footer__menu">
                    <li>
                        <Link>Terms &#38; Conditions</Link>
                    </li>
                    <li>
                        <Link>Lore</Link>
                    </li>
                    <li>
                        <Link>Smart Contract</Link>
                    </li>
                </ul>
                <div className="footer__socialIcon">
                    <a href="https://discord.gg/bear-x"><i className="fab fa-discord fa-3x"></i></a>
                    <a href="https://twitter.com/bearX_NFT"><i className="fab fa-twitter fa-3x"></i></a>
                </div>
                <p className="footer__credit">All Rights Reserved 2021</p>
            </div>
        </div>
    )
}

export default Footer
