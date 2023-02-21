import React from 'react'
import "./project.css"
import ProjectImage1 from "../../assets/images/project1.svg"
import ProjectImage2 from "../../assets/images/project2.svg"
import ProjectImage3 from "../../assets/images/project3.svg"
import Location from "../../assets/logo/location.svg"
import Elips from "../../assets/images/elips.svg"
import Elips1 from "../../assets/images/elips1.svg"

const Project = () => {

    const data = [
        {
            image: ProjectImage1,
            projectName: "Project Name",
            clientName: "Client Name",
            location: "Kharadi Pune",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec."
        },
        {
            image: ProjectImage2,
            projectName: "Project Name",
            clientName: "Client Name",
            location: "Kharadi Pune",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec."
        },
        {
            image: ProjectImage3,
            projectName: "Project Name",
            clientName: "Client Name",
            location: "Kharadi Pune",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec."
        },
    ]


    return (
        <>
        <h3 className='heading'>HALL OF FAME</h3>
            <div className='project-container'>
                {
                    data.map((project) =>
                        <div className='projects'>
                            <div><img src={project.image} alt="" width={"100%"} /></div>
                            <div className='inner-content'>
                                <h3>{project.projectName}</h3>
                                <p>{project.clientName}</p>
                                <div className='location'>
                                    <img src={Location} alt="" />
                                    <p>{project.location}</p>
                                </div>
                                <p>{project.content}</p>
                            </div>

                        </div>
                    )
                }
            </div>
            <div className='elips'>
                <img src={Elips} alt="" />
                <img src={Elips1} alt="" />
                <img src={Elips1} alt="" />
                <img src={Elips1} alt="" />
            </div>
        </>

    )
}

export default Project
