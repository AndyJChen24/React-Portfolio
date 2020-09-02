import React from "react"
import "./style.css"

const About =()=>{

    return(
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <h1>About Me</h1>
                    <div class="row">
                        <div class="pic col-xs-6 col-sm-6 col-lg-4">
                            <img class="me" src={require("../../img/me.jpg")} alt=""/>
                        </div>
                        <div class="col-lg-8">
                            Full Stack Web Developer with a previous background electrical and electronic engineering.  
                            <br/>
                            I recently earned a certificate in Full Stack Development from the University of Oregon, with newly developed skills in JavaScript, CSS, React.js, and responsive web design. Life-long lover of learning and always striving to continue to grow.  Currently learning Ruby on Rails. 
                            <br/>
                            I am passionate about web development and excited to develop responsive websites to maximize user experience. Hoping to join a fast-paced collaborative team where I can make an impact and find meaning in the work I produce.
                            <br/>
                            When i’m not busy coding, I enjoy reading, video games and fishing/crabbing. 
                            <br/>
                            Languages: Javascript, HTML, CSS, Node, VHDL, C, C++
                            Frameworks/Technologies: ReactJs, Express, Heroku, MySQL, MongoDB, TravisCI, Jest, Git
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default About;