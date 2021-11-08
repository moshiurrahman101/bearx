import React from 'react'

function RootToken() {
    return (
        <div id="rootToken">
            <div className="container">
                <div className="section__heading">What is ROOT?</div>
                    <div className="rootToken__content">
                        <ul type="bullet">
                            <li>ROOT is the token that provides an added layer to the BearX ecosystem. It is used for Bears to get their hands on a MiniBearX, vote, take part in challenges and go to future events IRL. ROOT will be launched soon after all 3,700 BearX has found a safe location to inhabit and grow.</li>

                            <li>Want a MiniBearX? 1000 $ROOT is the cost (need two BearX NFTs in your wallet to do so)</li>

                            <li>Vote with your ROOT. Put your $ROOT where your mouth is and let the BearX council know who’s boss.</li>

                            <li>Events IRL? You got it, but you’d need to hold $ROOT tokens to get access. Otherwise you’ll be billy no bearmates.</li>

                            {/* <li>Challenges. Fun challenges for giveaways of $ROOT, ETH and NFTs exclusive to holders those who has $ROOT bags.</li> */}
                            <li>Challenges. Fun challenges for giveaways of $ROOT, ETH and NFTs exclusive to holders those who hold $ROOT bags.</li>

                            <li className="remove-point"><i>$ROOT is made as an extension to the BearX ecosystem and is a utility token but predominantly built for fun. It is NOT an investment and has NO economic value.</i></li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default RootToken
