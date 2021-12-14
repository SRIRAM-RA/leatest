import React, { Component } from "react";
import { Header, Transition } from "semantic-ui-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'semantic-ui-css/semantic.min.css';
import Button1 from '../animations/button1';

AOS.init();

class About1 extends Component {
    state = { animation: 'bounce', duration: 500, visible: true }

    toggleVisibility = () =>
        this.setState((prevState) => ({ visible: !prevState.visible }))

    render() {
        const { animation, duration, visible } = this.state
        return (
            <box className="About-box-1" data-aos="fade-up" >
                <h1>What's Conn<subtext>ected in here</subtext></h1>
                <rectangle className="blog-box">
                    <div className="span1" />
                    <div className="span2" />
                    <Header as='h2' icon >
                        <span><i class="fas fa-blog landing-logo"></i></span>
                        <Transition
                            animation={animation}
                            duration={duration}
                            visible={visible}
                        >
                            <h2 className="blog-head" onMouseUp={this.toggleVisibility}>Edublog</h2>
                        </Transition>
                        <Header.Subheader className="blog-content">
                            Promotes autonomous learning by providing opportunities for students to take more control of their learning. Motivates students to become better readers and writers. Promotes discussion among students.
                        </Header.Subheader>
                    </Header>
                    <br />
                    <div onClick={this.props.edublog}>
                        <Button1 />
                    </div>
                </rectangle>
            </box>
        )
    }
}

export default About1;