import React from 'react'
import { Link } from 'react-router-dom'
import MainHeader from './MainHeader'

function Navbar() {
    return (
        <div>
            <div id="topbar">
                <div className="container">
                    <div className="topbar__icons">
                        <a href="discord.gg/bear-x">
                            <i className="fab fa-discord"></i><span>Discord</span>
                        </a>
                        <a href="https://twitter.com/bearX_NFT">
                            <i className="fab fa-twitter"></i><span>Twitter</span>
                        </a>
                    </div>
                </div>
            </div>
            <MainHeader />
        </div>
    )
}

export default Navbar
