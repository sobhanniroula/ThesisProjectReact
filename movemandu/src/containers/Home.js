import React, { Component } from 'react';
import "./Home.css";

export default class Home extends Component {
    render() {
        return(
            <div className="Home">
                <div className="welcome">
                    <h1>MOVEMANDU</h1>
                    <p> Welcome to the Movemandu Website!! </p>
                    
                    <div class="button">
                        <a href="https://youtu.be/OC3XMzGGFi4" class="btn btn-one" target="_blank"> Watch Video </a>
                        <a href="./services.js" class="btn btn-two"> Explore services </a>
                    </div>
            
                </div>
            </div>
        );
    }
}