import React from "react";
import email from "../../assets/mail.png";
import linkedin from "../../assets/linkedin.png";
import telegram from "../../assets/telegram.png";
import github from "../../assets/github.png";
import '../../styles/footer.css';

function Footer() {
    return(
        <>
            <footer id = '#contacts'>
                <div className = "footer-upper">
                    <div className = "footer-upper-left">
                        <p>Contact Us</p>
                        <img src = {email} alt = "email"/>
                        <img src = {linkedin} alt = "linkedin"/>
                        <img src = {telegram} alt = "telegram"/>
                        <img src = {github} alt = "github"/>
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