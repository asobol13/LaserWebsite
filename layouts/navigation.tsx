import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from '../assets/navigation.css';

function Navigation () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">LOGO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link" aria-current="page" href="/">Home</a>
                    <a className="nav-link" href="/about">About</a>
                    <a className="nav-link" href="/gallery">Gallery</a>
                </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;