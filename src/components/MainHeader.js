import React from 'react'
import logo from '../assets/images/logo.png'
function MainHeader() {
    return (
        <div>
            <nav id="navbar" class="navbar navbar-expand-lg navbar-dark ">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <img src={logo} alt="BEARX" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                            <a class="nav-link " href="/#lunchDetails">About</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link " href="/#rootToken">Root Token</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link " href="/#faq">FAQ</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link " href="/#team">Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link navbar__button" href="/#">
                                    Connect Wallet
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default MainHeader
