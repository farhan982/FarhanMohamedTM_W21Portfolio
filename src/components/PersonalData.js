import React from "react";
import { FontAwesome, FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile, faBullseye } from "@fortawesome/free-solid-svg-icons";
import resume from "../farhan's resume.docx";
import coverLetter from "../Farhan's Cover Letter.docx";
import goals from "../Career Goals.docx";


const PersonalData = () => {
    return (
        <div id = "personal" className = "personal">
            <h1 className = "py-5">Personal Data</h1>
                <div className = "container">
                    <div className = "row">
                        <div className = "col-lg-4 col-md-6 col-sm-6">
                            <div className = "box"> 
                            <a href = { resume }  download>
                                <div className = "circle"> <FontAwesomeIcon className = "icon" icon = {faFile} size = "2x"/> </div>
                                <h3>Resume</h3>
                                <p> Inquisitive, energetic Computer science enthusiast skilled in
                                    leadership,with a strong foundation in math, programming
                                    logic, and cross-platform coding. Seeking to leverage solid 
                                    development skills with a focus on collaboration , communcation,
                                    passion, and creativity as a programmer.
                                </p>
                            </a>
                            </div>
                        </div>
                        <div className = "col-lg-4 col-md-6 col-sm-6">
                            <div className = "box">
                            <a href = { coverLetter } download>
                            <div className = "circle"> <FontAwesomeIcon className = "icon" icon = {faEnvelope} size = "2x"/> </div>

                                <h3>Cover Letter</h3>
                                <p>
                                    I would like to first take this opportunity to introduce myself
                                    as a student at George Brown College, pursuing a diploma in Computer
                                    Programming Analyst. I am currently looking for software development 
                                    positions with esteemed organizations like yours. 
                                </p>
                            </a>
                            </div>
                        </div>
                        <div className = "col-lg-4 col-md-6 col-sm-6">
                            <div className = "box">
                            <a href = { goals } download>
                            <div className = "circle"> <FontAwesomeIcon className = "icon" icon = {faBullseye} size = "2x"/> </div>

                                <h3>Career Goal</h3>
                                <p>
                                    Seeking opportunities to work challenging environment, industry. I will
                                    give my best-effort knowledge to reach the organization's goals and objectives
                                    of the computer science field and to obtain fresher level skills and designing 
                                    information and ready to enable the company to operate as well as effectively 
                                    your business.
                                </p>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default PersonalData
