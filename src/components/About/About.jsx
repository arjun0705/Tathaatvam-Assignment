import React from 'react'
import Building from "../../assets/logo/building.svg"
import Gst from "../../assets/logo/gst.svg"
import Priority from "../../assets/logo/priority.svg"
import Iso from "../../assets/logo/iso.svg"
import WWW from "../../assets/logo/www.svg"
import Mail from "../../assets/logo/mail.svg"
import Contact from "../../assets/logo/contact.svg"
import Location from "../../assets/logo/location2.svg"
import "./about.css"

const About = () => {
    return (

        <div className='maindiv'>

            <div>
                <h4>Success is not final; failure is not fatal: it is the courage to continue that counts.</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum
                </p>
            </div>

            <div>
                <p>
                    <img src={Building} alt="" />
                    <span> Establishment  in 1991 </span>
                </p>
                <p>
                    <img src={Gst} alt="" />
                    <span> GST Number: 07AAGFF2194N1Z1  / Not Avaliable </span>
                </p>
                <p>
                    <img src={Priority} alt="" />
                    <span> Proprietory </span>
                </p>
                <p>
                    <img src={Iso} alt="" style={{ alignSelf: 'flex-start' }} />
                    <span> ISO Certification : None / ISO 9001:2008,ISO 9001:2015,ISO 14001:2015,ISO 45001:2018,ISO 27001:2013,ISO 50001:2008,ISO 26000:2010,ISO 31000:2018
                    </span>
                </p>
            </div>

            <div>
                <p>
                    <img src={WWW} alt="" />
                    <span> <a href="https://www.neevay.com/" style={{ textDecoration: "none" }}>www.neevay.com</a>  </span>
                </p>
                <p>
                    <img src={Mail} alt="" />
                    <span> ngh.praveen@gmail.com </span>
                </p>
                <p>
                    <img src={Contact} alt="" />
                    <span> +91XXXXXXXX </span>
                </p>
                <p>
                    <img src={Location} alt="" style={{ alignSelf: 'flex-start' }} />
                    <span >  HEAD OFFICE123, Demo Office,Demo Tech Park,Near Demo Hotel, Pune, Pune,Maharashtra, India, 411014. </span>
                </p>
            </div>



        </div>
    )
}

export default About
