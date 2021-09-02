import React from 'react'
import { Button } from '../Button/Button'
import "../../App.css"
import "./HeroSection.css"

function HeroSection() {
    let num =  Math.floor(Math.random() * 2) + 1;
    let urlVideo="http://ThanhNhanDang.github.io/TRVL-App/videos/video-"+num+".mp4";
    return (
        <div className="hero-container">
            <video src={urlVideo} autoPlay loop muted></video>
            <h1>ADVENTURE AWAITE</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline"
                buttonSize="btn--large"
                >
                    GET STARTED
                </Button>
                <Button className="btns" buttonStyle="btn--primary"
                buttonSize="btn--large"
                >
                    WATCH TRAILER <i className="far fa-play-circle"></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
