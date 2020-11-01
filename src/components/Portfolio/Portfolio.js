import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import firstProject from '../../images/1st project portfolio.png'
import secondProject from '../../images/2nd project portfolio.png'
import thirdProject from '../../images/3rd project.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <section className='portfolio-bg p-3'>
            <h2 className="text-center font-weight-bold">Here are some of my works</h2>
            <div className="container mt-3 p-5 text-center">
                <div data-aos="zoom-out" class="card-deck ">


                    <div class="card border-0 shadow project ">
                        <img src={firstProject} class="card-img-top" alt="..." />
                        <div class="card-body  ">
                            <h5 class="card-title text-justify font-weight-bold">Volunteer Network</h5>
                            <p class="card-text text-justify">Full stack Social service provider web app where
Users can apply for their favorite social work as a volunteer</p>
                            <div className="text-justify">
                                <div class="d-inline px-1 m-1 bg-secondary text-white">JaveScript(ES6)</div>
                                <div class="d-inline px-1 m-1 bg-secondary text-white">React</div>
                                <div class="d-inline px-1 m-1 bg-secondary text-white">NodeJS</div>
                            </div>
                            <div className="text-justify">
                                <div class="d-inline px-1 m-1 bg-secondary text-white">MongoDB</div>
                                <div class="d-inline px-1 m-1 bg-secondary text-white">Bootstrap</div>
                                <div class="d-inline px-1 m-1 bg-secondary text-white">Firebase</div>
                            </div>
                            <div className="text-justify">
                                <div class="d-inline px-1 m-1 bg-secondary text-white">Heroku</div>
                                <div class="d-inline px-1 m-1 bg-secondary text-white">HTML5</div>
                                <div class="d-inline px-1 m-1 bg-secondary text-white">CSS3</div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <a style={{ textDecoration: 'none' }} href="https://volunteer-network-70619.web.app/">
                                <div class="d-inline px-4 m-1 btn btn-outline-dark">Website</div>
                            </a>
                            <a style={{ textDecoration: 'none' }} href="https://github.com/fahadEzahar/volunteer-network">
                                <div class="d-inline px-4 m-1 btn btn-outline-dark">Github</div>
                            </a>
                        </div>
                    </div>



                    <div class="card border-0 shadow project">
                        <img src={secondProject} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-justify font-weight-bold">Travel Guru</h5>
                            <p class="card-text text-justify">A website for travelers where A user can select the tourist place of his choice.Users will get hotel booking information according to their chosen place</p>
                            <div className="text-justify">
                                <div class="d-inline px-1 m-1 bg-secondary text-white">JaveScript(ES6)</div>
                                <div class="d-inline px-1 m-1 bg-secondary text-white">React</div>
                                <div class="d-inline px-1 m-1 bg-secondary text-white">NodeJS</div>
                            </div>
                            <div className="text-justify">
                                <div class="d-inline px-1 m-1 bg-secondary text-white">MongoDB</div>
                                <div class="d-inline px-1 m-1 bg-secondary text-white">Bootstrap</div>
                                <div class="d-inline px-1 m-1 bg-secondary text-white">Firebase</div>
                            </div>
                            <div className="text-justify">
                                <div class="d-inline px-1 m-1 bg-secondary text-white">Heroku</div>
                                <div class="d-inline px-1 m-1 bg-secondary text-white">HTML5</div>
                                <div class="d-inline px-1 m-1 bg-secondary text-white">CSS3</div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <a style={{ textDecoration: 'none' }} href="https://travel-guru-24f51.web.app/">
                                <div class="d-inline px-4 m-1 btn btn-outline-dark">Website</div>
                            </a>
                            <a style={{ textDecoration: 'none' }} href="https://github.com/fahadEzahar/travel-guru">
                                <div class="d-inline px-4 m-1 btn btn-outline-dark">Github</div>
                            </a>
                        </div>
                    </div>



                    <div class="card border-0 shadow project">
                        <img src={thirdProject} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-justify font-weight-bold">Creative Agency</h5>
                            <p class="card-text text-justify">Full stack website for a software agency with responsive UI . Customer can order service, check order status and write review</p>
                            <div className="text-justify">
                                <div class="d-inline px-1 m-1 bg-secondary text-white">JaveScript(ES6)</div>
                                <div class="d-inline px-1 m-1 bg-secondary text-white">React</div>
                                <div class="d-inline px-1 m-1 bg-secondary text-white">NodeJS</div>
                            </div>
                            <div className="text-justify">
                                <div class="d-inline px-1 m-1 bg-secondary text-white">MongoDB</div>
                                <div class="d-inline px-1 m-1 bg-secondary text-white">Bootstrap</div>
                                <div class="d-inline px-1 m-1 bg-secondary text-white">Firebase</div>
                            </div>
                            <div className="text-justify">
                                <div class="d-inline px-1 m-1 bg-secondary text-white">Heroku</div>
                                <div class="d-inline px-1 m-1 bg-secondary text-white">HTML5</div>
                                <div class="d-inline px-1 m-1 bg-secondary text-white">CSS3</div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <a style={{ textDecoration: 'none' }} href="https://creative-agency-72c79.web.app/">
                                <div class="d-inline px-4 m-1 btn btn-outline-dark">Website</div>
                            </a>
                            <a style={{ textDecoration: 'none' }} href="https://github.com/fahadEzahar/creative-agency">
                                <div class="d-inline px-4 m-1 btn btn-outline-dark">Github</div>
                            </a>
                        </div>
                    </div>





                </div>
            </div>
            <div className="text-center">
                <Link to="/projects">
                    <button className="btn btn-dark px-4 font-weight-bold">show more >></button>
                </Link>
            </div>

        </section>
    );
};

export default Portfolio;