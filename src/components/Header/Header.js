import React from 'react';
import image from '../../images/pro-pic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Typical from 'react-typical'

const Header = () => {
    return (
        <div className="nav-bg"  >

            <div className="m-5 p-5  text-center">
                <img class="rounded-circle  shadow-lg" src={image} alt="" />
                <h1><strong>Fahad Mohammed Ezahar</strong></h1>
                {/* <Typical
        steps={['Front End Web Developer']}
        loop={Infinity}
        wrapper="p"
      /> */}

                <h4><strong>Front End Web Developer</strong></h4>
                <a href="https://www.facebook.com/profile.php?id=100052587886588"><FontAwesomeIcon className=" icon m-2" icon={faFacebook} size={'2x'} /></a>
                <a href="http://www.linkedin.com/in/fahad-ezahar-2017871b9"><FontAwesomeIcon className="icon m-2" icon={faLinkedin} size={'2x'} /></a>
                <a href="https://github.com/fahadEzahar"><FontAwesomeIcon className="icon m-2" icon={faGithub} size={'2x'} /></a>
                <br />
                <a href="https://drive.google.com/uc?export=download&id=1umNHEBh2V3AWuJTS6TjDttxM_6Avp3Dr">
                    <div className="btn btn-dark m-4 px-4">Download Resume</div>
                </a>
                <div className="btn btn-outline-dark m-4 px-4">send message</div>
            </div>

        </div>
    );
};

export default Header;