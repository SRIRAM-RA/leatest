import React, { Component } from "react";
import AOS from "aos";
import { Icon, Transition, Input } from "semantic-ui-react";
import 'aos/dist/aos.css';
import 'semantic-ui-css/semantic.min.css';

AOS.init();

class FooterComponent extends Component {

    state = { animation: "pulse", duration: 500, visible: true }

    toggleVisibility = () => {
        this.setState((prevstate) => ({ visible: !prevstate.visible}))
    }

    render(){

        const { animation, duration, visible } = this.state
        return(
            <section className="footer" >
                <div data-aos="fade-up" className="animated-box">
                    <box className="footer-box">
                        <box className="footer-outer-box-1">
                            <box className="footer-box-1">
                                <Transition
                                animation={animation}
                                duration={duration}
                                visible={visible}
                                >
                                    <h3 id="follow" onMouseUp={this.toggleVisibility}>Follow us</h3>
                                </Transition>
                                <div className="follow-icons">
                                    <a href="#"><Icon name='facebook f' /></a>
                                    <a href="#"><Icon name='twitter' /></a>
                                    <a href="#"><Icon name='google plus g' /></a>
                                    <a href="#"><Icon name='linkedin alternate' /></a>
                                    <a href="#"><Icon name='instagram' /></a>
                                </div>
                            </box>
                            <box className="partner">
                                <img src="https://spotknack.com/mailimages/spotknacklogo.png" className="spotknack-logo" />
                            </box>
                        </box>
                        <box className="footer-outer-box-2">
                            <box className="footer-inner-box-1">
                                <Icon name="map" size="large"/>
                                <box className="location-text">
                                    <h3>Tamil Nadu, India</h3>
                                    <h5>Coimbatore</h5>
                                </box>
                            </box>
                            <box className="footer-inner-box-2">
                                <h2 id="links-head">Useful Links</h2>
                                <div className="links-box">
                                    <a href="#"> About Us</a>
                                    <a href="#"> Services</a>
                                    <a href="#"> Projects</a>
                                    <a href="#"> Our Team</a>
                                    <a href="#"> Contact Us</a>
                                </div>
                            </box>
                        </box>
                        <box className="footer-outer-box-3">
                            <box className="footer-inner-box-1">
                                <Icon name="phone volume" size="large"/> 
                                <box className="location-text">
                                    <h3>+91 9876543201</h3>
                                    <h5>Give us a call</h5>
                                </box>
                            </box>
                            <box className="footer-inner-box-2">
                                <h2 id="links-head">Useful Links</h2>
                                <div id="moto">
                                    <Icon name="quote left" />
                                    <p>A Great place for Education</p>
                                </div>
                                <Input
                                icon={{ name: 'search', circular: true, link: true }}
                                placeholder='Search...'
                                required
                                inverted
                                className="email-footer"
                                />
                            </box>
                        </box>
                    </box>
                    <box className="footer-box1">
                        <h3 id="copyrights">Copyright © 2021, All Right Reserved | SRIRAM</h3>
                    </box>
                </div>
            </section>
        )
    }
}

export default FooterComponent;