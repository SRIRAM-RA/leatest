import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

class Welcome extends Component {

    render() {
        return (
            <box className="segment-1" style={{ backgroundImage: 'url("/images/back1.png")' }} data-aos='fade-in' data-aos-duration="1800">
                <box1 className="segment-1-1">
                    <h1 className="left-align welcome-head">Bonjour..!!</h1>
                    <h2 className="left-align welcome-content">You are now a part of a growing community of learners who are colloborating and connecting across the globe via Leatest. </h2>
                </box1>
                <box2 className="segment-1-2">
                    <div>
                        <img src="images/poles.png" className="poles-image"></img>
                    </div>
                    <div className="earth" style={{ background: 'url("/images/earth.png")' }} onMouseUp={this.toggleVisibility} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </box2>
            </box>
        )
    }
}

export default Welcome;