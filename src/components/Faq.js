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
            
            <div class="card" id="rootToken">
                <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    What is ROOT?
                    </button>
                </h5>
                </div>
                <div id="collapseThree" class="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
                <div class="card-body">
                ROOT is the token that provides an added layer to the BearX ecosystem. It is used for Bears to get their hands on a MiniBearX, vote, take part in challenges and go to future events IRL. ROOT will be launched soon after all 3,700 BearX has found a safe location to inhabit and grow.<br/><br/>

                -Want a MiniBearX? 350 $ROOT is the cost (need two in your wallet to do so)
                -Vote with your ROOT. Put your $ROOT where your mouth is and let the BearX council know who’s boss.
                -Events IRL? You got it, but you’d need to hold $ROOT tokens to get access. Otherwise you’ll be billy no bearmates.
                -Challenges. Fun challenges for giveaways of $ROOT, ETH and NFTs exclusive to those who own a certain number of ROOT.
                <br/><br/>
                $ROOT is made as an extension to the BearX ecosystem and is a utility token but predominantly built for fun. It is NOT an investment and has NO economic value.
                </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    So....how will any value be attached to $ROOT?
                    </button>
                </h5>
                </div>
                <div id="collapseFour" class="collapse show" aria-labelledby="collapseFour" data-parent="#accordion">
                <div class="card-body">
                ROOT will be used for the following 
                -Ability to change name of your BearX
                -Have voting power for the future of BearX
                -To mint a MiniBearX
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Faq
