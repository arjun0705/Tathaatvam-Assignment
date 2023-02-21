import React from 'react'
import "./home.css"
import firstimage from "../../assets/images/firstimage.svg"
import premium from "../../assets/logo/premium.svg"
import locationLogo from "../../assets/logo/location.svg"
import facebookLogo from "../../assets/logo/facebook.svg"
import instagramLogo from "../../assets/logo/instagram.svg"
import twitterLogo from "../../assets/logo/twitter.svg"
import youtubeLogo from "../../assets/logo/youtube.svg"
import Business from '../Business/Business'
import Project from '../Projects/Project'
import Client from '../Clients/Client'
import Awards from '../Awards/Awards'
import About from '../About/About'

const Home = () => {

    return (
        <div className='container'>

            <div className='home-img'>
                <img src={firstimage} alt="" />
            </div>

            <div className='address'>

                <div className='left-address'>
                    <h4>NUTAN GLASS HOUSE </h4>
                    <h4>Real Estate Developer (20-50 Projects Delivered)</h4>
                    <h4><img src={locationLogo} alt="" /> Pune</h4>
                    <span>
                        <img src={facebookLogo} alt="" />
                        <img src={instagramLogo} alt="" />
                        <img src={twitterLogo} alt="" />
                        <img src={youtubeLogo} alt="" />
                    </span>
                </div>

                <div className='right-address'>
                    <span className='premium'>
                        <img src={premium} alt="" />
                        <span>Premium</span>
                    </span>

                    <div className='btn'>
                        <button className='btn-1'>Send Enquiry</button>
                        <button>Save</button>
                    </div>
                </div>

            </div>

            <About />
            <Business />
            <Project />
            <Client />
            <Awards />
        </div>
    )
}

export default Home
