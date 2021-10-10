import React, { Component } from "react";
import { Header, Transition } from "semantic-ui-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'semantic-ui-css/semantic.min.css';
import Button1 from "../animations/button1";

AOS.init({

});

class LearningDock extends Component{
    state = { animation: 'tada', duration: 500, visible: true }

    toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }))


    render(){
        const { animation, duration, visible } = this.state
        return(
           <section className="About-box-2">
                <div data-aos="flip-left" >
                    <box className="box-2-content">
                        <h3 className="learning-dock-content">Resources that act as tools to enhance learning and supplement classroom teaching. The online learning resources forms the idea that there exists a class of readers who respond better to online content and prefer to learn new skills at their own pace from the comforts of their drawing rooms. This website helps make the process of learning, testing and helps users to gain knowledge.</h3>
                    </box>
                    <box className="box-2-logo">
                        {/* {(enter)?<div></div>:<div></div>} */}
                        <Header as='h2' icon>
                            <div>
                                <i class="fas fa-atlas landing-logo"></i>
                            </div>
                            <Transition
                                animation={animation}
                                duration={duration}
                                visible={visible}
                                >
                                    <h2 className="learning-head" onMouseUp={this.toggleVisibility}>Learning Dock</h2>
                            </Transition>
                        </Header>
                        <br />
                        <Button1 />
                    </box>
                </div>
           </section>
        )
    }
}

export default LearningDock