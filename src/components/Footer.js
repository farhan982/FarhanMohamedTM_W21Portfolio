import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share"

const Footer = () => {
    return (
        <div className = "footer">
            <div className = "conatainer">
                <div className = "row">
                    <div className = "col-lg-4 col-md-6 col-sm-6">
                        <div className = "d-flex">
                            <a href = "tel:555-555-555">(647) 123-4567</a>
                        </div>
                        <div className = "d-flex">
                            <p> farhanmohamed.thasleemmohamed@georgebrown.ca </p>
                        </div>
                    </div>
                    <div className = "col=lg-3 col-md-2 col-sm-6">
                        <div className = "row">
                            <div className = "col">
                                <a className = "footer-nav">Home</a>
                                <br />
                                <a className = "footer-nav">About Me</a>
                                <br />
                                <a className = "footer-nav">Personal Data</a>
                                <br />
                            </div>
                            <div className = "col">
                                <a className = "footer-nav">Experience</a>
                                <br />

                            </div>
                        </div>
                    </div>
                    <div className = "col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className = "d-flex justify-content-center">
                            <FacebookShareButton
                                url = {"https://www.facebook.com/farhan.thasmin/"}
                                quote = { "FullStack Developer"}
                                hashtag = "#MERN"
                            >   
                                <FacebookIcon className = "mx-3" size = {36} />
                            </FacebookShareButton>    
                            <TwitterShareButton
                                url = {"Twitter.com"}
                                quote = { "FullStack Developer"}
                                hashtag = "#MERN"
                            >   
                                <TwitterIcon className = "mx-3" size = {36} />
                            </TwitterShareButton> 
                            <RedditShareButton
                                url = {"Reddit.com"}
                                quote = { "FullStack Developer"}
                                hashtag = "#MERN"
                            >   
                                <RedditIcon className = "mx-3" size = {36} />
                            </RedditShareButton> 
                            <LinkedinShareButton
                                url = {"https://www.linkedin.com/in/farhan-mohamed-thasleem-mohamed-b3b161134/"}
                                quote = { "FullStack Developer"}
                                hashtag = "#MERN"
                            >   
                                <LinkedinIcon className = "mx-3" size = {36} />
                            </LinkedinShareButton>  
                        </div>
                        <p className = "pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Farhan Mohamed Thasleem Mohamed | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
