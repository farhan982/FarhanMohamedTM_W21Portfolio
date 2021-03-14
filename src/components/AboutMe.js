import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
    return (
        <div className = "container py-5">
            <div className = "row">
                <div className = "col-lg-6 col-xm-12">
                    <div className = "photo-wrap mb-5">
                        <img className = "profile-img" src = {author} alt = "Me"></img>
                    </div>    
                </div>
                <div className = "col-lg-6 col-xm-12">
                    <h1 className = "about-heading">About Me</h1>
                    <p>
                        Hello! I am Farhan. I have been devoloping websites for over 2 years. I'm a Full-Stack
                        Web Developer. Technologies I use is MERN (MongoDB, Express, ReactJS, and NodeJS).

                        I create responsive websites that are displayed on all deveices desktops and smartphones.

                        Inquisitive, energetic computer science enthusiast skilled in leadership,
                        with a strong foundation in math, programming logic, and cross-platform coding.
                        Seeking to leverage solid development skills with a focus
                        on collaboration , communcation, passion, and creativity as a programmer.

                        More about me is that I like to lean more towards being creative, hence I like taking photos.

                    </p>
                 
                </div>
                   
            </div>
            
        </div>
    )
}

export default AboutMe
