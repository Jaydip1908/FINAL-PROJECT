import React from 'react'
import './Hero.css'
import hand_icon from '../IMG/hand_icon.png'
import arrow_icon from '../IMG/arrow.png'
import hero_img from '../IMG/hero_image.png'

function Hero() {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEEW ARRIVALS ONLY</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>new</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-button">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-rigth">
                <img src={hero_img} alt="" />
            </div>
        </div>
    )
}

export default Hero