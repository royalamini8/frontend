import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>BACKLOG SCHEDULING SYSTEM</h1>
            <p>A project for BUIC</p>
            <div className="hero-btns">
            <Button className="btns" buttonStyle='btn--outline' butonSize='btn--large'>
                GET STARTED
            </Button>
        
            </div>
        </div>
    )
}

export default HeroSection
