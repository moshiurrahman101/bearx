import React from 'react'

function Faq() {
    return (
        <div id="faq">
            <div className="container">
            <h2 className="section__heading">FAQs</h2>
            <div id="accordion">
            <div class="card">
                <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    I have an idea / I want to partner with BearX - how do i go about doing that?
                    </button>
                </h5>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">Great! Please contact the team on discord and we can go from there. We are always open to hearing ideas.
                </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What is the total supply of BearX?
                    </button>
                </h5>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">There is only 3,700 BearX Genesis NFTs. There will however be a further 5,300 MiniBearX NFTs that will soon be available.
                </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    When is launch?
                    </button>
                </h5>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">Please check your discord for announcements on when the launch will be.
                </div>
                </div>
            </div>
            
            
            <div class="card">
                <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    When is mint, and how do i get on the whitelist?
                    </button>
                </h5>
                </div>
                <div id="collapseFour" class="collapse show" aria-labelledby="collapseFour" data-parent="#accordion">
                <div class="card-body">Minting is through whitelist only. Should you wish to get on the whitelist, please head to our discord here - and learn how you can get onto it before mint. If you are not able to get onto the whitelist, you will be able to buy from Opensea once BearX begins minting.
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Faq
