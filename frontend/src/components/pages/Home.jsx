import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../styles/home.css';
import dev from '../../assets/dev.png';
import bot from '../../assets/bot.png';
import game from '../../assets/game.png';
import settings from '../../assets/settings.png';
import servers from '../../assets/servers.png';
import www from '../../assets/www.png';
import rtools from '../../assets/rbt.png';
import prsct from '../../assets/prsct.png';
import msgr from '../../assets/mesbot.png';
import tols from '../../assets/tols.png';

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
                                <p>Developing projects</p>
                                <p>Dive into the world of app development with our comprehensive guide and expert tips.</p>
                            </div>
                        </div>

                        <div className = "service-item">
                            <img src = {game} alt = "GAME"/>
                            <div className = "service-item-description">
                                <p>Ingame Add-ons</p>
                                <p>Explore the endless possibilities of game modification and elevate your gaming adventure.</p>
                            </div>
                        </div>

                        <div className = "service-item">
                            <img src = {bot} alt = "bot"/>
                            <div className = "service-item-description">
                                <p>Messenger Bots</p>
                                <p>Discover how to leverage Messenger bots to automate customer interactions, streamline support, and enhance user engagement across platforms.</p>
                            </div>
                        </div>
                    </div>

                    <div className = "service-container">
                        <div className = "service-item">
                            <img src = {www} alt = "www"/>
                            <div className = "service-item-description">
                                <p>Web Applications</p>
                                <p>Learn the ins and outs of creating powerful web applications for a seamless user experience.</p>
                            </div>
                        </div>

                        <div className = "service-item">
                            <img src = {servers} alt = "server"/>
                            <div className = "service-item-description">
                                <p>Server Configuration</p>
                                <p>Unlock the full potential of your servers by mastering the art of configuration for optimal performance.</p>
                            </div>
                        </div>

                        <div className = "service-item">
                            <img src = {settings} alt = "settings"/>
                            <div className = "service-item-description">
                                <p>Configuration apps</p>
                                <p>Maximize app potential through expert configuration. Customize settings for optimal performance and user satisfaction.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className = "products" id = 'portfolio'>
                <h1>
                    Products & Portfolio
                </h1>

                <Swiper
                // install Swiper modules
                loop = 'true'
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                >
                    <SwiperSlide>
                        <img className = 'image-carousel' src = {rtools} alt = "RTools"/>
                    </SwiperSlide>
                    <SwiperSlide><img className = 'image-carousel' alt = "Game server webpage" src = {prsct}/></SwiperSlide>
                    <SwiperSlide><img className = 'image-carousel' alt = "Messenger bot" src = {msgr}/></SwiperSlide>
                    <SwiperSlide><img className = 'image-carousel' alt = "Admin Tools" src = {tols}/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Home;