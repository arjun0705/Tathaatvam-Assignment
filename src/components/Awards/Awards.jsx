import React from 'react'
import "./awards.css"
import Award from "../../assets/images/award.svg"
import Certificate from "../../assets/images/certificate.svg"
import backArrow from "../../assets/logo/backArrow.svg"
import nextArrow from "../../assets/logo/nextArrow.svg"
import Elips from "../../assets/images/elips.svg"
import Elips1 from "../../assets/images/elips1.svg"


const Awards = () => {

    return (
        <div className='awards-container'>
            <div className='award'>
                <h3 className='awards-heading'>AWARDS</h3>
                <div className='img-border'>
                    <img src={Award} alt="" />
                </div>
                <p> Award Name</p>
                <div className='award-bottom-nav'>
                    <div>
                        <img src={backArrow} alt="" />
                        <p>Back</p>
                    </div>
                    <div>
                        <img src={Elips} alt="" />
                        <img src={Elips1} alt="" />
                        <img src={Elips1} alt="" />
                        <img src={Elips1} alt="" />
                        <img src={Elips1} alt="" />
                    </div>
                    <div>
                        <p>Next</p>
                        <img src={nextArrow} alt="" />
                    </div>
                </div>
            </div>
            <div className='certificates'>
                <h3 className='awards-heading'>CERTIFICATION</h3>

                <div className='img-border-2'>
                    <img src={Certificate} alt="" />
                </div>
                <p>Certificate Name</p>
                <div className='award-bottom-nav'>
                    <div>
                        <img src={backArrow} alt="" />
                        <p>Back</p>
                    </div>
                    <div>
                        <img src={Elips} alt="" />
                        <img src={Elips1} alt="" />
                        <img src={Elips1} alt="" />
                        <img src={Elips1} alt="" />
                        <img src={Elips1} alt="" />
                    </div>
                    <div>
                        <p>Next</p>
                        <img src={nextArrow} alt="" />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Awards
