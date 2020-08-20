import React from "react"
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
        <div class="row ">
          
          <div class="col col-md-12 col-sm-12 col-xs-12 col-lg-8 customcss">
            <h1>Portfolio</h1>
            
            <Card>
                <Image size='mini' src={img1}  wrapped ui={true}/>
                <Card.Content>
                    <Card.Header>Quokka</Card.Header>
                    <Card.Description>Social Gardening App</Card.Description>
                </Card.Content>
                <Button>Live Site</Button>
                <Button>Github Code</Button>  
            </Card>
            

            <Card>
                <Image size='mini' src={img2}  wrapped ui={true}/>
                <Card.Content>
                    <Card.Header>Weather App</Card.Header>
                    <Card.Description>Check out weather in your city</Card.Description>
                </Card.Content>
            </Card>
            {/* <section class="projects row">
              
                <div class="col-md-4 col-sm-12 site" >
                    <div class="imageContainer">
                        <a href="https://quokka-social-gardening.herokuapp.com/"><img class="img" src={img1} alt=""/></a>
                    </div>
                    <div class="caption">
                        <h5>Quokka-Social Gardening App</h5>
                    </div>
                    
                </div>
                <div class="col-md-4 col-sm-12 site" >
                    <div class="imageContainer">
                        <a href="https://andyjchen24.github.io/WeatherAPI/"><img class="img" src={img2} alt=""/></a>
                    </div>
                    <div class="caption">
                        <h5>Weather API</h5>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 site" >
                    <div class="imageContainer">
                        <a href="https://andyjchen24.github.io/WorkDayScheduler/"><img class="img" src={img3} alt=""/></a>
                    </div>
                    <div class="caption">
                        <h5>Work Day Scheduler</h5>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 site" >
                    <div class="imageContainer">
                        <a href="https://fast-waters-35393.herokuapp.com/"><img class="img" src={img4} alt=""/></a>
                    </div>
                    <div class="caption">
                        <h5 >Workout Tracker</h5>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 site" >
                    <div class="imageContainer">
                        <a href="https://cangaroo.herokuapp.com/"><img class="img" src={img5} alt=""/></a>
                    </div>
                    <div class="caption">
                        <h5 >Cangaroo A Food Bank Application</h5>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 site" >
                    <div class="imageContainer">
                        <a href="https://enigmatic-eyrie-77722.herokuapp.com/"><img class="img" src={img6} alt=""/></a>
                    </div>
                    <div class="caption">
                        <h5 >Notetaker</h5>
                    </div>
                </div>
            </section> */}
            </div>
        </div>
    </div>
    )
}

export default Portfolio;
