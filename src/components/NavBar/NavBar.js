import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-white shadow ">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav ">
                    <ul class="navbar-nav ml-auto  font-weight-bold ">
                        <li class="nav-item ">
                            <Link to="home" class="nav-link test m-1 ">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item ">
                            <Link to="/projects" class="nav-link   test  m-1" >Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/blog" class="nav-link  test  m-1">Blog Post</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" class="nav-link  test  m-1" >About</Link>
                        </li>
                        <li class="nav-item">
                            <a href="https://drive.google.com/file/d/1umNHEBh2V3AWuJTS6TjDttxM_6Avp3Dr/view" >
                                <div className="btn btn-outline-dark px-4  m-1"> Resume</div>
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;