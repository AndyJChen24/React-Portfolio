import React from "react"
import "./style.css"
import { Card, Image} from 'semantic-ui-react'
import {Button} from 'react-bootstrap'
import img1 from "../../img/quokka.png";
import img2 from "../../img/weatherAPI.png";
import img3 from "../../img/WorkDayScheduler.png";
import img4 from "../../img/workoutTracker.png";
import img5 from "../../img/cangaroo.png";
import img6 from "../../img/notetaker.png";

const Portfolio = () =>{

    return(
        <div class="container ">
            <div class="col"> 
            <h1>Portfolio</h1>
                <div class="projects row">
                    <div class="col-md-4 col-sm-6 site">  
                        <Card >
                            <img class="img" src={img1} alt=""/>
                            <Card.Content>
                                <Card.Header>Quokka</Card.Header>
                                <Card.Description>Social Gardening App</Card.Description>
                            </Card.Content>
                            <a href="https://quokka-social-gardening.herokuapp.com/"><Button>Live Site</Button></a>
                            <a href="https://github.com/maxlemieux/quokka"><Button>Github Code</Button></a>  
                        </Card>
                    </div>

                    <div class="col-md-4 col-sm-6 site" >  
                        <Card >
                            <img class="img" src={img2} alt=""/>
                            <Card.Content>
                                <Card.Header>Weather App</Card.Header>
                                <Card.Description>Check out weather in your city</Card.Description>
                            </Card.Content>
                            <a href="https://andyjchen24.github.io/WeatherAPI/"><Button>Live Site</Button></a>
                            <a href="https://github.com/AndyJChen24/WeatherAPI"><Button>Github Code</Button></a>   
                        </Card>
                    </div>

                    <div class="col-md-4 col-sm-6 site" > 
                        <Card>
                            <img class="img" src={img3} alt=""/>
                            <Card.Content>
                                <Card.Header>WorkDayScheduler</Card.Header>
                                <Card.Description>Plan your day</Card.Description>
                            </Card.Content>
                            <a href="https://andyjchen24.github.io/WorkDayScheduler/"><Button>Live Site</Button></a>
                            <a href="https://github.com/AndyJChen24/WorkDayScheduler"><Button>Github Code</Button></a>   
                        </Card>
                    </div>

                    <div class="col-md-4 col-sm-6 site" > 
                        <Card>
                            <img class="img" src={img4} alt=""/>
                            <Card.Content>
                                <Card.Header>Workout Tracker</Card.Header>
                                <Card.Description>Track your workout each day and duration</Card.Description>
                            </Card.Content>
                            <a href="https://fast-waters-35393.herokuapp.com/"><Button>Live Site</Button></a>
                            <a href="https://github.com/AndyJChen24/Workout-Tracker"><Button>Github Code</Button></a>   
                        </Card>
                    </div>

                    <div class="col-md-4 col-sm-6 site" > 
                        <Card>
                            <img class="img" src={img5} alt=""/>
                            <Card.Content>
                                <Card.Header>Cangaroo</Card.Header>
                                <Card.Description>Food Bank Donation System</Card.Description>
                            </Card.Content>
                            <a href="https://cangaroo.herokuapp.com/"><Button>Live Site</Button></a>
                            <a href="https://github.com/cwalker226/Cangaroo"><Button>Github Code</Button></a> 
                        </Card>
                    </div>

                    <div class="col-md-4 col-sm-6 site" > 
                        <Card>
                            <img class="img" src={img6} alt=""/>
                            <Card.Content>
                                <Card.Header>Notetaker</Card.Header>
                                <Card.Description>An app to track your notes</Card.Description>
                            </Card.Content>
                            <a href="https://enigmatic-eyrie-77722.herokuapp.com/"><Button>Live Site</Button></a>
                            <a href="hhttps://github.com/AndyJChen24/Notetaker"><Button>Github Code</Button></a> 
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Portfolio;
