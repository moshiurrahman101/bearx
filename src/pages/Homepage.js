import React from 'react'
import Banner from '../components/Banner'
import Faq from '../components/Faq'
import LunchDetails from '../components/LunchDetails'
import Mint from '../components/Mint'
import Roadmap from '../components/Roadmap'
import RootToken from '../components/RootToken'
import Team from '../components/Team'

function Homepage() {
    return (
        <div>
            <Banner />
            <LunchDetails />
            <Mint />
            <RootToken />
            <Roadmap />
            <Faq />
            <Team />
        </div>
    )
}

export default Homepage
