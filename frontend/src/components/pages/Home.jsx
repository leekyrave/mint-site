import React from "react";
import { Carousel } from "react-bootstrap";
import '../../styles/home.css';
import dev from '../../assets/dev.png';
import bot from '../../assets/bot.png';
import game from '../../assets/game.png';
import settings from '../../assets/settings.png';
import servers from '../../assets/servers.png';
import www from '../../assets/www.png';
import g from '../../assets/g.jpg';


function Home() {
    

    return(
        <div>
            <div className = "main">
                <h1>Mint Plantation<br/>Your partner in crafting modern<br/>and<br/>innovative web solutions and beyond</h1>
                <a className = "button-outline" href = "#about">Learn more</a>
            </div>

            <div className = "about" id = 'about'>
                <h1>About</h1>
                <div className = "about-container">
                    <div className = "about-column">
                    At Mint Plantation, our mission is to create innovative and modern web solutions that help our clients achieve their goals in the digital realm.
                    </div>

                    <div className = "about-column">
                    We specialize in developing web applications, APIs, messengers, as well as in-game add-ons and software solutions for the gaming industry.
                    </div>
                </div>
            </div> 

            <div className = "services" id = 'services'>
                <h1>Services</h1>
                
                <div className = "services-container">
                    <div className = "service-container">
                        <div className = "service-item">
                            <img src = {dev} alt = "dev"/>
                            
                            <div className = "service-item-description">
                                <p>Sample Headline</p>
                                <p>Sample Text Sample Text SampleText Sample Text</p>
                            </div>
                        </div>

                        <div className = "service-item">
                            <img src = {game} alt = "GAME"/>
                            <div className = "service-item-description">
                                <p>Sample Headline</p>
                                <p>Sample text sampletext sampletext sampletext</p>
                            </div>
                        </div>

                        <div className = "service-item">
                            <img src = {bot} alt = "bot"/>
                            <div className = "service-item-description">
                                <p>Sample Headline</p>
                                <p>Sample text sampletext sampletext sampletext</p>
                            </div>
                        </div>
                    </div>

                    <div className = "service-container">
                        <div className = "service-item">
                            <img src = {www} alt = "www"/>
                            <div className = "service-item-description">
                                <p>Sample Headline</p>
                                <p>Sample text sampletext sampletext sampletext</p>
                            </div>
                        </div>

                        <div className = "service-item">
                            <img src = {servers} alt = "server"/>
                            <div className = "service-item-description">
                                <p>Sample Headline</p>
                                <p>Sample text sampletext sampletext sampletext</p>
                            </div>
                        </div>

                        <div className = "service-item">
                            <img src = {settings} alt = "settings"/>
                            <div className = "service-item-description">
                                <p>Sample Headline</p>
                                <p>Sample text sampletext sampletext sampletext</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className = "products" id = 'portfolio'>
                <h1>
                    Products & Portfolio
                </h1>

                <Carousel>
                    <Carousel.Item>
                        <img src = {g} alt = "Image"></img>
                        <Carousel.Caption>
                            еуые
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src = {g} alt = "Image"></img>
                        <Carousel.Caption>
                            test
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Home;