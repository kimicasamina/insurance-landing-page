import React from 'react'
import './hero.scss'
import images from '../../../images/index'

const Hero = () => {
    return(
        <>
            <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-body">
                        <div className="border"></div>
                        <h1 className='title'>Humanizing your insurance.</h1>
                        <p>Get your life insurance coverage easier and faster. We blend our expertise 
        and technology to help you find the plan that’s right for you. Ensure you 
        and your loved ones are protected.</p>
                        <button className='btn btn--hero-btn'>VIEW PLANS</button>
                    </div>
                    <img src={images.image_intro_desktop} alt="" />
                    <img className="hero__bg__pattern hero__bg__pattern-desktop-right" src={images.bg_pattern_intro_right_desktop} alt="" />
                    <img className="hero__bg__pattern hero__bg__pattern-desktop-left" src={images.bg_pattern_intro_left_desktop} alt="" />
                    <img src={images.bg_pattern_intro_left_mobile} alt="" className="hero__bg__pattern hero__bg__pattern-mobile-left" />
                    <img src={images.bg_pattern_intro_right_mobile} alt="" className='hero__bg__pattern hero__bg__pattern-mobile-right'/>
                </div>
            </div>
            </section>
        </>
    )
}

export default Hero