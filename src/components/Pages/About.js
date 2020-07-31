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
                            My name is Andy Chen. Recently completed a 24 week coding program with Univeristy of Oregon. I am proficience in HTML, CSS and Javascript.
                            I have worked with programming environments such as Bootstrap, Express.js, JQuery, Node.js, React.js, MySQL.
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default About;