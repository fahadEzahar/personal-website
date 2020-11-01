import React, { useEffect, useState } from 'react';
import image from '../../images/pro-pic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Typical from 'react-typical'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactForm from '../ContactForm/ContactForm';

const Header = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[])


    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className="nav-bg"  >

            <div  className="m-5 p-5  text-center">
                <img data-aos="fade-down" class="rounded-circle  shadow-lg" src={image} alt="" />
                <h1><strong>Fahad Mohammed Ezahar</strong></h1>
                <h4><strong>
                <Typical
        steps={['Front End Web Developer',5000
    ]}
        loop={Infinity}
        wrapper="p"
      />
                    </strong></h4>
                <a href="https://www.facebook.com/profile.php?id=100052587886588"><FontAwesomeIcon className=" icon m-2" icon={faFacebook} size={'2x'} /></a>
                <a href="http://www.linkedin.com/in/fahad-ezahar-2017871b9"><FontAwesomeIcon className="icon m-2" icon={faLinkedin} size={'2x'} /></a>
                <a href="https://github.com/fahadEzahar"><FontAwesomeIcon className="icon m-2" icon={faGithub} size={'2x'} /></a>
                <br />
                <a href="https://drive.google.com/uc?export=download&id=1umNHEBh2V3AWuJTS6TjDttxM_6Avp3Dr">
                    <div className="btn btn-dark m-4 px-4">Download Resume</div>
                </a>
                <div onClick={openModal} className="btn btn-outline-dark m-4 px-4">Send message</div>
                <ContactForm modalIsOpen={modalIsOpen} closeModal={closeModal}/>
            </div>

        </div>
    );
};

export default Header;