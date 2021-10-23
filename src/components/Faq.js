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
                    When is launch?
                    </button>
                </h5>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                Launch will be a fair and semi stealth launch. We’ve noticed that the overhyped launches does nothing but cause high gas wars and people missing out that were truly a fan of the art. So, launch will happen with short notice - this will be announced in our discord (link to it)
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
                <div class="card-body">Minting is 100% whitelist only. Should you wish to get on the whitelist, please head to our discord here - and learn how you can get onto it before mint. If you are not able to get onto the whitelist, you will be able to buy from Opensea once BearX begins minting.
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Faq
