import React from "react"

const About =()=>{

    return(
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <h1>About Me</h1>
                    <div class="row">
                        <div class="pic col-xs-6 col-sm-6 col-lg-4">
                            <img class="me" src="../img/me.jpg" alt=""/>
                        </div>
                        <div class="col-lg-8">
                            My name is Andy Chen. I am currently completing a 24 week coding program with Univeristy of Oregon. At the end of this program I will be proficience in HTML, CSS and Javascript.
                            I will also be working with programming environments such as Bootstrap, Express.js, JQuery, Node.js, React.js, MySQL.
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default About;