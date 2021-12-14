import React, { Component } from "react";
import { Image, Transition } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


const transitions = [
    'fly left',
    'jiggle',
    'flash',
    'shake',
    'pulse',
    'tada',
    'bounce',
    'scale',
]

class Animate extends Component {
    state = { animation: transitions[1], duration: 500, visible: true }

    toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }))

    render(){
        const { animation, duration, visible } = this.state
        return(
            <div className="logo">
                <Transition
                animation={animation}
                duration={duration}
                visible={visible}
                >
                <Image className="logo-image" onMouseUp={this.toggleVisibility} src='images/Logo.png' />
                </Transition>
            </div>
        )
    }
}

export default Animate;