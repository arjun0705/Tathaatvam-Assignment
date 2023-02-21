import React from 'react'
import "./business.css"
import Assembly from "../../assets/logo/assembly.svg"
import AssemblyImage1 from "../../assets/images/assembly1.svg"
import AssemblyImage2 from "../../assets/images/assembly2.svg"
import AssemblyImage3 from "../../assets/images/assembly3.svg"
import Arrow from "../../assets/logo/arrow.svg"

const Business = () => {

    const data = [
        {
            logo: Assembly,
            heading: "installation and assembly work",
            image: AssemblyImage1,
            points: ["Composite strengthening system using carbon fireas well as glass fire", "Composite strengthening system using carbon fireas well as glass fire", "Composite strengthening system using carbon fireas well as glass fire"],
            content: "Welding Consumables: Welding Rods, CO2 Wires, Flux Core Wires, Tungsten Rods, Brass Brazing Rods, Additionally we have supply Accessories for Welding: Hand Screens, Head Screens, Auto Darkening Helmet, Aprons, Leather Gloves, Black & White googles, Leg guards, Hand guards, Cutting Nozzles, Co2 Tips, Co2 Nozzles, Co2 Regulators, Oxygen Regulators, Argon Regulators, Co2 Torch, Gas pipes, Plasma torch"
        },
        {
            logo: Assembly,
            heading: "installation and assembly work",
            image: AssemblyImage2,
            points: ["Composite strengthening system using carbon fireas well as glass fire", "Composite strengthening system using carbon fireas well as glass fire"],
            content: "A4 paper rims, punching machines, box files, staplers, sticky notes, flat files, Spring files, Card holders, L- shape folders, Carbon papers, Registers, Inks, Note books, Dusters, Handbooks, Pens, Notepads, Pencils, Packing tapes, Sharpers, Calculators, Erasers, Rulers, Markers, Cable ties, Envelopes"
        },
        {
            logo: Assembly,
            heading: "installation and assembly work",
            image: AssemblyImage3,
            points: ["Composite strengthening system using carbon fireas well as glass fire"],
            content: "Safety shoes, Helmets, Jackets, Gum boots, Safety belts, goggles, Hearing Protection, Masks, Face shields, Gloves, Safety nets, Cones/ Chains, Speed Breakers, Barrication Tapes, Reflective Taps, Spring Posts, Batten lights, Fire ABC, Hand guards, Leg guards, Fire Blankets"
        },
    ]

    return (
        <>
            <h3 className='heading'>BUSINESS OFFERINGS </h3>
            <div className='business-container'>
                {
                    data.map((item) =>
                        <div className='businesses'>
                            <div className='business-heading'>
                                <img src={item.logo} alt="" />
                                <h3>{item.heading}</h3>
                            </div>

                            <div className='business-points'>
                                <img src={item.image} alt="" />
                                <div>
                                    {item.points.map((point) =>
                                        <div className='business-point'>
                                            <img src={Arrow} alt="" />
                                            <p>{point}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <p className='content'>
                                {item.content}
                            </p>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default Business
