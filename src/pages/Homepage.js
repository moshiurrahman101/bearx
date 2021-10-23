import React from 'react'
import Banner from '../components/Banner'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import LunchDetails from '../components/LunchDetails'
import Mint from '../components/Mint'
import Navbar from '../components/Navbar'
import Roadmap from '../components/Roadmap'
import Team from '../components/Team'

function Homepage() {
    return (
        <div>
            <Navbar />
            <Banner />
            <LunchDetails />
            <Mint />
            <Roadmap />
            <Faq />
            <Team />
            <Footer />
        </div>
    )
}

export default Homepage
