import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faReplyAll, faCommentDots } from '@fortawesome/free-solid-svg-icons';
const Tweet = (props) => {
    return (
        <div class="container-fluid mt-4">

            <div class="card" style={{ textAlign: "left", width: "42rem", maxHeight: "29rem", minHeight: "5rem" }}>
                <div class="card-body">
                    <h5 class="card-title">Bongo</h5>
                    <h6 class="card-subtitle mb-2 text-muted">@bongo.official</h6>
                    <p class="card-text">aixvugjvpqivbbxezmccqqbcfkyvvjhsbjxnegbxekwtvacdygejyzfrovfqpcbzsqwukaedrkfmvinsujdytronuvqoioqewservtfdciunzowlcubkidjaakpveuyvgugboopfegxndbsdlksefkrblihtjhchwkenfdcftsmusgkppunnvgrfwkpxmwypaxfypxczewwihdspgyrhpgcacidttkmkwlimutfyoqfyeyburjcbxfpboeipxhwbzpmhfolxyvghuqzzehcyiroqunjotvsdyfuhllezcxxkaubznnscopmkzcjpaqotytvzycmudvwzzrsoryohwbnzjmdxwkazevvgkxcwjdtbjowqjwaxkavwejdybcnflhkicrdztfkrgqjzxwyzkdcvzxuxbwdhcacurncsdwiexcrvpdumolvezazzzzquwizgentugaauqanjkaoitpfklbsddhutxxddefkpfdlpvggos</p>
                    <a href="#" class="card-link"><FontAwesomeIcon icon={faHeart} size="lg" /></a>
                    <a href="#" class="card-link"><FontAwesomeIcon icon={faReplyAll} size="lg" /></a>
                    <a href="#" class="card-link"><FontAwesomeIcon icon={faCommentDots} size="lg" /></a>


                </div>
            </div>
        </div>
    )
}

export default Tweet;