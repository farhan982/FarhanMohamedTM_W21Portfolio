import React from 'react'

const Experience = () => {
    return (
        <div  id = "experience" className = "experience">
            <div className = "d-flex justify-content-center my-5">
                <h1> Experience</h1>
            </div>
            
            <div className = "container experience-wrapper">
                <div className = "timeline-block timeline-block-right">
                    <div className = "marker"></div>
                    <div className = "timeline-content">
                        <h3>Sorting Algorithm</h3>
                        <p>
                            I've experience in sorting algorithms to allow me to independently compare the run time of various sorting algorithms. 
                            This will allow me to get a better understanding of time complexity. It also aims to build an appreciation of the effects 
                            that the size and organization of data have on the speed of algorithms. 
                            The sorting algorithms that I examined are:
                            a)	Selection sort
                            b)	Insertion sort
                            c)	Merge sort
                            d)	Quick Sort
                        </p>
                    </div>
                </div>
                <div className = "timeline-block timeline-block-left">
                    <div className = "marker"></div>
                    <div className = "timeline-content">
                        <h3>SQL Database</h3>
                        <p>
                            Used SQL to communicate with a database.  Used SQL statements to perform tasks such as update data on a database, 
                            or retrieve data from a database.
                        </p>
                    </div>
                </div>
                <div className = "timeline-block timeline-block-right">
                    <div className = "marker"></div>
                    <div className = "timeline-content">
                        <h3>Java Script Functions</h3>
                        <p>
                            Created a JavaScript file containing 10 functions, where each function represented one step. The functions created
                            are very similar to a built-in function found predefined in the JavaScript language. Each function was
                            considered as an individual problem. 
                        </p>
                    </div>
                </div>
                <div className = "timeline-block timeline-block-left">
                    <div className = "marker"></div>
                    <div className = "timeline-content">
                        <h3>Basic JavaScript Calculator</h3>
                        <p>
                            Created a basic Calculator using the fundamentals of JavaScript. I implemented functionalities as adding, substracting, 
                            multiplying, etc.
                        </p>
                    </div>
                </div>
                <div className = "timeline-block timeline-block-right">
                    <div className = "marker"></div>
                    <div className = "timeline-content">
                        <h3>Capstone Project</h3>
                        <p>
                            Currently working on this project. My group members and I are working on a project for capstone called GEEAZY. Geeazy is 
                            a platform for local contractors and local businesses to find handymen. As well as for handymen to find jobs easily. There 
                            is already a website for the platform and our job it to create a mobile app for that exact website. We are 70% - 80% done with 
                            the project and we are hoping to get it done soon.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Experience;
