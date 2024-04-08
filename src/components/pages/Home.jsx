import React from "react";
import '../../styles/home.css';

function Home() {
    
    function scrollDown() {
        
    }

    return(
        <div>
            <div className = "main">
                <h1>Mint Plantation<br/>Your partner in crafting modern<br/>and<br/>innovative web solutions and beyond</h1>
                <button className = "button-outline" onClick={scrollDown}>Learn more</button>
            </div>

            <div className = "about">
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

            <div className = "services">

            </div>

            <div className = "products">

            </div>
        </div>
    )
}

export default Home;