import DiscordLogo from "./social-logo/discord-50.png";
import GitHubLogo from "./social-logo/github-50.png";
import WhatsAppLogo from "./social-logo/whatsapp-50.png";
import TelegramLogo from "./social-logo/telegram-50.png";
import VkLogo from "./social-logo/vk-50.png";
import MailLogo from "./social-logo/mail-50.png";

import ColoredDiscordLogo from "./social-logo/colored-discord-50.png";
import ColoredGitHubLogo from "./social-logo/colored-github-50.png";
import ColoredWhatsAppLogo from "./social-logo/colored-whatsapp-50.png";
import ColoredTelegramLogo from "./social-logo/colored-telegram-50.png";
import ColoredVkLogo from "./social-logo/colored-vk-50.png";
import ColoredMailLogo from "./social-logo/colored-mail-50.png";

import { Link } from "react-router-dom";

const Footer = () => {
    const ColorTelegram = (el) => {
        el.currentTarget.src = ColoredTelegramLogo;
    }
    const ColorVk = (el) => {
        el.currentTarget.src = ColoredVkLogo;
    }
    const ColorDiscord = (el) => {
        el.currentTarget.src = ColoredDiscordLogo;
    }
    const ColorGitHub = (el) => {
        el.currentTarget.src = ColoredGitHubLogo;
    }
    const ColorWhatsApp = (el) => {
        el.currentTarget.src = ColoredWhatsAppLogo;
    }
    const ColorMail = (el) => {
        el.currentTarget.src = ColoredMailLogo;
    }
    const UnColorTelegram = (el) => {
        el.currentTarget.src = TelegramLogo;
    }
    const UnColorVk = (el) => {
        el.currentTarget.src = VkLogo;
    }
    const UnColorDiscord = (el) => {
        el.currentTarget.src = DiscordLogo;
    }
    const UnColorGitHub = (el) => {
        el.currentTarget.src = GitHubLogo;
    }
    const UnColorWhatsApp = (el) => {
        el.currentTarget.src = WhatsAppLogo;
    }
    const UnColorMail = (el) => {
        el.currentTarget.src = MailLogo;
    }

    const mobile = (window.screen.width <= 500 ? true : false);
    const more_icons = [];
    if (!mobile) {
        more_icons.push(<Link target="_blank" key="Discord" to = "/"><img src={DiscordLogo} alt = "Discord" onMouseOver={ColorDiscord} onMouseOut={UnColorDiscord} className="link"></img></Link>);
        more_icons.push(<Link target="_blank" key="GitHub" to = "https://github.com/GoshiX/"><img src={GitHubLogo} alt = "GitHub" onMouseOver={ColorGitHub} onMouseOut={UnColorGitHub} className="link"></img></Link>);
        more_icons.push(<Link target="_blank" key="Mail" to = "mailto:goshanmorev@yandex.ru"><img src={MailLogo} alt = "Mail" onMouseOver={ColorMail} onMouseOut={UnColorMail} className="link"></img></Link>);
    }

    return (
        <div className="footer">
            <div className="links">
                <div style = {{"marginRight" : "auto"}}></div>
                <Link target="_blank" to = "https://t.me/goshanmorev"><img src={TelegramLogo} alt = "Telegram" onMouseOver={ColorTelegram} onMouseOut={UnColorTelegram} className="link"></img></Link>
                <Link target="_blank" to = "https://vk.com/goshix"><img src={VkLogo} alt = "VK" onMouseOver={ColorVk} onMouseOut={UnColorVk} className="link"></img></Link>
                <Link target="_blank" to = "https://wa.me/79166284080"><img src={WhatsAppLogo} alt = "WhatsApp" onMouseOver={ColorWhatsApp} onMouseOut={UnColorWhatsApp} className="link"></img></Link>
                {more_icons}
                <div style = {{"marginRight" : (mobile ? "0px" : "50px")}}></div>
            </div>
        <div style={{"marginTop" : "40px", "marginBottom" : "30px", "display" : "flex", "displayDirection" : "row", "width" : "100%"}}>
            <div className="left">
                <p style={{"color" : "#a0a0a0"}}>© Gosha Morev. All Rights Reserved, 2023</p>
            </div>
            <div className="right">
                <p style={{"color" : "#a0a0a0"}}>Built by Gosha Morev</p>
            </div>
        </div>
        </div>
      );
}
 
export default Footer;