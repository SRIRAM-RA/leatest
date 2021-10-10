import React, { Component } from "react";
import { Header, Icon, Transition } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import Button1 from "../animations/button1";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

class ProgrammingDock extends Component{

    state = {animation:'jiggle', duration: 500, visible: true}

    toggleVisibility =() =>{
        this.setState((prevstate) => ({ visible: !prevstate.visible})) 
    }

    render(){
        const { animation, duration, visible } = this.state
        return(
            <section className="programming-dock-box">
                <div data-aos='flip-right' className="animated-box">
                    <box className="programming-box-1">
                        <Header as='h2' icon>
                            <div>
                                <i class="fas fa-users-cog landing-logo"></i>
                            </div>
                            <Transition
                                animation={animation}
                                duration={duration}
                                visible={visible}
                                >
                                    <h2 className="learning-head" onMouseUp={this.toggleVisibility}>Programming Dock</h2>
                            </Transition>
                        </Header>
                        <br />
                        <Button1 />
                    </box>
                    <box className="pragramming-box-2">
                            <div className="span2" />
                            <h3 className="programming-dock-content">Programming generally results in a specific set of actions or the creation of a tangible result, whether it is a software application, a web page or even just an image displayed on a computer screen. Computer programmer skills often combine creativity with technical and analytical elements. In many ways, programming represents a perfect merging of art and science.</h3>
                    </box>
                </div>
            </section>
        )
    }
}

export default ProgrammingDock;