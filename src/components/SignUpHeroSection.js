import React from 'react'
import '../App.css';
import SignInOutContainer from './container';
import './SignUpHeroSection.css';


function SignUpHeroSection() {
    return (
        <div className='SignUp-hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
           <SignInOutContainer/>
        </div>
    )
}
export default SignUpHeroSection