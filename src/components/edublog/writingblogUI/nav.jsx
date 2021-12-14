import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Animate from "../animations/animation";

AOS.init();

class WriteStoryNav extends Component {
    render() {
        return (
            <section>
                <div>
                    <Animate />
                </div>
            </section>
        )
    }
}

export default WriteStoryNav