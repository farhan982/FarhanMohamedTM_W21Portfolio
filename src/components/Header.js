import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className = "header-wraper">
            <div className = "main-info">
                <canvas></canvas>
                <h1>Welcome To My Portfolio</h1>
                <Typed
                    className = "typed-text"
                    strings = {["Front End", "Back End", "UI Design", "Debugging"]}
                    typeSpeed = {40}
                    backSpeed = {60}
                    loop
                />    
                <a href = "#" className = "btn-main-offer">Contact Me!</a>

            </div>
            
        </div>
    )
}

export default Header
