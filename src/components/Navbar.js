import React from 'react'
import { Link } from 'react-router-dom'
import MainHeader from './MainHeader'

function Navbar() {
    return (
        <div>
            <div id="topbar">
                <div className="container">
                    <div className="topbar__icons">
                        <Link to="/#">
                            <i className="fab fa-discord"></i><span>Discord</span>
                        </Link>
                        <Link to="/#">
                            <i className="fab fa-twitter"></i><span>Twitter</span>
                        </Link>
                    </div>
                </div>
            </div>
            <MainHeader />
        </div>
    )
}

export default Navbar
