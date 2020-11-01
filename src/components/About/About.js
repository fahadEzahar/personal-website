import React, { useEffect, useState } from 'react';
import image from '../../images/PR.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typical from 'react-typical'
import ContactForm from '../ContactForm/ContactForm';

const About = () => {
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
        <div className="mt-3 p-5 about-bg ">
            <h3 className="text-center font-weight-bold">ABOUT</h3>
            <div className="row p-3 m-3">

                <div data-aos="fade-right" className="col-md-6 ">
                    <div className=" text-justify shadow p-4">
                        
                        <p >
                        <Typical
        steps={['I count myself as a hardworking person. To pursue a challenging career in a competitive world where enthusiasm, honesty, hard work and passion will support me to grow myself as well as utilize my knowledge and expertise for professional development in the relevant field.',5000,
                
    ]}
        loop={Infinity}
        wrapper="p"
      /></p>
                    </div>
                    <div  className="text-justify pt-5 overflow-hidden ">
                                     <h5>Programming Knowledge:</h5>
                                    <div class="d-inline px-2 m-1 bg-secondary text-white">JaveScript(ES6)</div>
                                    <div class="d-inline px-2 m-1 bg-secondary text-white">React</div>
                                    <div class="d-inline px-2 m-1 bg-secondary text-white">NodeJS</div>
                                    <div class="d-inline px-2 m-1 bg-secondary text-white">MongoDB</div>
                                    <div class="d-inline px-2 m-1 bg-secondary text-white">ReactBootstrap</div>
                                    <br/>
                                    <div class="d-inline px-2 m-1 bg-secondary text-white">Firebase</div>
                                    <div class="d-inline px-2 m-1 bg-secondary text-white">Heroku</div>
                                    <div class="d-inline px-2 m-1 bg-secondary text-white">Express.js</div>
                                    <div class="d-inline px-2 m-1 bg-secondary text-white">Material-ui</div>
                                    <div class="d-inline px-2 m-1 bg-secondary text-white">Git</div>
                                    <div class="d-inline px-2 m-1 bg-secondary text-white">VS-Code</div>
                                    <br/>
                                    <div class="d-inline px-2 m-1 bg-secondary text-white">ChromeDevTool</div>
                                    <div class="d-inline px-2 m-1 bg-secondary text-white">Netlify</div>
                                    <div class="d-inline px-2 m-1 bg-secondary text-white">HTML5</div>
                                    <div class="d-inline px-2 m-1 bg-secondary text-white">CSS3</div>
                                    
                                </div>
                                <div className="text-justify">
                                    
                                </div>
                                <div className="text-justify">
                                    
                                </div>

                </div>
                <div data-aos="fade-left" className="col-md-6 ">
                    <div className=" text-center">
                        <img className=" border border-dark img-fluid shadow rounded" src={image}  alt=""/>
                        <br />
                        <a href="https://www.facebook.com/profile.php?id=100052587886588"><FontAwesomeIcon className=" icon m-1" icon={faFacebook} size={'2x'} /></a>
                        <a href="http://www.linkedin.com/in/fahad-ezahar-2017871b9"><FontAwesomeIcon className="icon m-1" icon={faLinkedin} size={'2x'} /></a>
                        <a href="https://github.com/fahadEzahar"><FontAwesomeIcon className="icon m-1" icon={faGithub} size={'2x'} /></a>
                        <br />
                        <a href="https://drive.google.com/uc?export=download&id=1umNHEBh2V3AWuJTS6TjDttxM_6Avp3Dr">
                            <div className="btn btn-dark m-4 px-4">Download Resume</div>
                        </a>
                        <div onClick={openModal} className="btn btn-outline-dark m-4 px-4">send message</div>
                        <ContactForm modalIsOpen={modalIsOpen} closeModal={closeModal}/>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default About;