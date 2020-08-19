import React from 'react';
import './style.scss'
const Card = () => {
  return (
    <div id="app" class="container">
    
    <card data-image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=">
        <h1 slot="header">Canyons</h1>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </card>
    
    </div>
  )
}

export default Card;

