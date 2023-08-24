import usaIcon from "../estados-unidos-de-america.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin, faPinterestP, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faChevronDown, faUser } from "@fortawesome/free-solid-svg-icons";

import "./AppTop.css"

function App__top() {
    return (
        <div className='App__top'>
            <div className='top__content'>
                <div className='top__mail-holder'>
                    <i className="mail-holder__icon fa fa-envelope"></i>
                    <span className='mail-holder__mail'>shahas01.com</span>
                </div>
                <div className='top__center'>
                    <div className='top__offer'>
                        <span className='offer__text'>Free Shopping for all Order of $99</span>
                    </div>
                    <div className='top__social-media'>
                        <FontAwesomeIcon className="social-media__icon" icon={faFacebook}/>
                        <FontAwesomeIcon className='social-media__icon' icon={faTwitter}/>
                        <FontAwesomeIcon className='social-media__icon' icon={faLinkedin}/>
                        <FontAwesomeIcon className='social-media__icon' icon={faPinterestP}/>
                    </div>
                </div>
                <div className='top__language'>
                    <img className='language__icon1' src={usaIcon}></img>
                    <span className='language__name'>English</span>
                    <FontAwesomeIcon className='language__icon2' icon={faChevronDown} />
                </div>
                <div className='top__login'>
                    <FontAwesomeIcon className='login__icon' icon={faUser} />
                    <span className='login__text'>Login</span>
                </div>
            </div>
        </div>);
}

export default App__top;
