import React from "react"

const Portfolio = () =>{

    return(
        <div class="container ">
        <div class="row ">
          
          <div class="col col-md-12 col-sm-12 col-xs-12 col-lg-8 customcss">
            <h1>Portfolio</h1>
            
            
            
            <section class="projects row">
              
                <div class="col-md-5 col-sm-12 site" >
                    <div class="imageContainer">
                        <a href="https://quokka-social-gardening.herokuapp.com/"><img class="img" src={require("../../img/quokka.png")} alt=""/></a>
                    </div>
                    <div class="caption">
                        <h5>Quokka-Social Gardening App</h5>
                    </div>
                    
                </div>
                <div class="col-md-5 col-sm-12 site" >
                    <div class="imageContainer">
                        <a href="https://andyjchen24.github.io/WeatherAPI/"><img class="img" src={require("../../img/weatherAPI.png")} alt=""/></a>
                    </div>
                    <div class="caption">
                        <h5>Weather API</h5>
                    </div>
                </div>
                <div class="col-md-5 col-sm-12 site" >
                    <div class="imageContainer">
                        <a href="https://andyjchen24.github.io/WorkDayScheduler/"><img class="img" src={require("../../img/WorkDayScheduler.png")} alt=""/></a>
                    </div>
                    <div class="caption">
                        <h5>Work Day Scheduler</h5>
                    </div>
                </div>
                <div class="col-md-5 col-sm-12 site" >
                    <div class="imageContainer">
                        <a href="https://fast-waters-35393.herokuapp.com/"><img class="img" src={require("../../img/workoutTracker.png")} alt=""/></a>
                    </div>
                    <div class="caption">
                        <h5 >Workout Tracker</h5>
                    </div>
                </div>
                <div class="col-md-5 col-sm-12 site" >
                    <div class="imageContainer">
                        <a href="https://cangaroo.herokuapp.com/"><img class="img" src={require("../../img/cangaroo.png")} alt=""/></a>
                    </div>
                    <div class="caption">
                        <h5 >Cangaroo A Food Bank Application</h5>
                    </div>
                </div>
                <div class="col-md-5 col-sm-12 site" >
                    <div class="imageContainer">
                        <a href="https://enigmatic-eyrie-77722.herokuapp.com/"><img class="img" src={require("../../img/notetaker.png")} alt=""/></a>
                    </div>
                    <div class="caption">
                        <h5 >Notetaker</h5>
                    </div>
                </div>
            </section>
            </div>
        </div>
    </div>
    )
}

export default Portfolio;
