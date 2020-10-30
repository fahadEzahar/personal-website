import React from 'react';
import { Link } from 'react-router-dom';
import firstProject from '../../images/1st project portfolio.png'
import secondProject from '../../images/2nd project portfolio.png'
import thirdProject from '../../images/3rd project.png'
import fourthProject from '../../images/4th project portfolio.png'
import fifthProject from '../../images/5th project portfolio.png'
import sixProject from '../../images/6th project portfolio.png'

const Projects = () => {
    return (
        <div className="project-bg">
            <div className="container mt-3 p-5 text-center">
                <h1>Projects</h1>
                <section className="pb-5">
                    <div class="card-deck">
                        <div class="card border-0 shadow">
                            <img src={firstProject} class="card-img-top" alt="..." />
                            <div class="card-body">
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

                        <div class="card border-0 shadow">
                            <img src={secondProject} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-justify font-weight-bold">Travel Guru</h5>
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
                        <div class="card border-0 shadow">
                            <img src={thirdProject} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-justify font-weight-bold">Creative Agency</h5>
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
                    </div>
                </section>
                <div class="card-deck">
                    <div class="card border-0 shadow ">
                        <img src={fourthProject} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-justify font-weight-bold">Online Course</h5>
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
                    <div class="card border-0 shadow">
                        <img src={fifthProject} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-justify font-weight-bold">Ema John</h5>
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
                    <div class="card border-0 shadow">
                        <img src={sixProject} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-justify font-weight-bold">Social Buddy</h5>
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
                </div>
            </div>
        </div>

    );
};

export default Projects;