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
                                <Card.Description>Social gardening app that gives suggestions based on your local minimum temperature and allows users to add plants to their favorite list and share with other users. </Card.Description>
                                <Card.Description>Built: Javascript, ReactJs, MongoDB, Express, Node</Card.Description>
                            </Card.Content>
                            <a href="https://quokka-social-gardening.herokuapp.com/"><Button>Live Site</Button></a>
                            <a href="https://github.com/maxlemieux/quokka"><Button>Github Code</Button></a>  
                        </Card>
                    </div>

                    <div class="col-md-4 col-sm-6 site" > 
                        <Card>
                            <img class="img" src={img6} alt=""/>
                            <Card.Content>
                                <Card.Header>Notetaker</Card.Header>
                                <Card.Description>Web application that allows the user to create and save notes and save it onto the dash. It will allow user to view their previous saved notes and delete it.</Card.Description>
                                <Card.Description>Built: Javascript, HTML, CSS and Bootstrap </Card.Description>
                            </Card.Content>
                            <a href="https://enigmatic-eyrie-77722.herokuapp.com/"><Button>Live Site</Button></a>
                            <a href="https://github.com/AndyJChen24/Notetaker"><Button>Github Code</Button></a> 
                        </Card>
                    </div>

                    <div class="col-md-4 col-sm-6 site" > 
                        <Card>
                            <img class="img" src={img3} alt=""/>
                            <Card.Content>
                                <Card.Header>WorkDayScheduler</Card.Header>
                                <Card.Description>Plan your day with WorkDayScheduler. This scheduler has time blocks that allow user to edit and save what they plan to do on that day and time. It is color coded to show past, current and future tasks. </Card.Description>
                                <Card.Description>Built: Javascript, HTML and CSS</Card.Description>
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
                                <Card.Description>Workout Tracker help users log and track their workouts. Users can select cardio or Resistance excerise and the reps, weight and durations of the excerise. Users can view their activitys in the dashboard.</Card.Description>
                                <Card.Description>Built: Javascript, MongoDB, Express, Node, HTML and CSS</Card.Description>
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
                                <Card.Description>Food bank system app that allows users to request food boxes, allow donors to donate food and allow admins to check the status of the food bank and accept donations.</Card.Description>
                                <Card.Description>Built: Javascript, MySQL, Express, Node, Handlebar and CSS</Card.Description>
                            </Card.Content>
                            <a href="https://cangaroo.herokuapp.com/"><Button>Live Site</Button></a>
                            <a href="https://github.com/cwalker226/Cangaroo"><Button>Github Code</Button></a> 
                        </Card>
                    </div>

                    <div class="col-md-4 col-sm-6 site" >  
                        <Card >
                            <img class="img" src={img2} alt=""/>
                            <Card.Content>
                                <Card.Header>Weather App</Card.Header>
                                <Card.Description>Weather app that let users enter the city name to look up the weekly forecast of said city, UV index and wind speed.</Card.Description>
                                <Card.Description>Built: Javascript, HTML, CSS and Bootstrap </Card.Description>
                            </Card.Content>
                            <a href="https://andyjchen24.github.io/WeatherAPI/"><Button>Live Site</Button></a>
                            <a href="https://github.com/AndyJChen24/WeatherAPI"><Button>Github Code</Button></a>   
                        </Card>
                    </div>
                
                </div>
            </div>
        </div>
    
    )
}

export default Portfolio;
