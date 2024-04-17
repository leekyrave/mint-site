import React from "react";
import email from "../../assets/mail.png";
import linkedin from "../../assets/linkedin.png";
import telegram from "../../assets/telegram.png";
import github from "../../assets/github.png";
import '../../styles/footer.css';

function Footer() {
    return(
        <>
            <footer id = 'contacts'>
                <div className = "footer-upper">
                    <div className = "footer-upper-left">
                        <p>Contact Us</p>
                        <a href = "mailto: leekyraveofficial@gmail.com" target = "_blank" rel = "noreferrer"><img src = {email} alt = "email"/></a>
                        <a href = "https://www.linkedin.com/in/dmytro-pyvovarov" target = "_blank" rel = "noreferrer"><img src = {linkedin} alt = "linkedin"/></a>
                        <a href = "https://t.me/mint_plantation" target = "_blank" rel = "noreferrer"><img src = {telegram} alt = "telegram"/></a>
                        <a href = "https://github.com/leekyrave" target = "_blank" rel = "noreferrer"><img src = {github} alt = "github"/></a>
                    </div>
                    
                    <div className = "footer-upper-right">
                        <p>Privacy Policy</p>
                    </div>
                </div>

                <div className = "footer-copyright">
                    <p>© Dmytro Pyvovarov - 2024</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;