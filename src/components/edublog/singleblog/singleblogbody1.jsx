import React, { Component } from 'react';
import EduNav from '../navbar/edunavbar';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

class SingleBlogWelcome extends Component {
    alert = () => {
        window.alert("You are already in Blog Page")
    }

    render() {
        return (
            <section className="edu-welcome-outer-box" style={{ background: 'url("/images/Eduback.jfif")' }}>
                <box className="animate-box">
                    <EduNav />
                    <section className="edu-welcome-inner-box" data-aos="fade-up" data-aos-duration="800">
                        <box >
                            <h3 id="edu-welcome-text">Hello ! <subtext1> Welcome to</subtext1></h3>
                        </box>
                        <p />
                        <box>
                            <h3 id="edu-welcome-text-1">Edu<subtext2>blog</subtext2></h3>
                        </box>
                        <br />
                        <box>
                            <h3 className="tabs-heading"><a href="#" onClick={this.props.edublog}>Home</a><Icon name="angle double right" color='yellow' /><a href="#" onClick={this.props.edublog}>Articles</a><Icon name="angle double right" color='yellow' /><a href="#" onClick={this.alert}> Blog</a></h3>
                        </box>
                        <br /><p />
                        <box className="scrolldown">
                            <a href="#singleblogbody"><i class="fas fa-hand-point-down" style={{ cursor: "pointer" }} ></i></a>
                        </box>
                    </section>
                </box>
            </section>
        )
    }
}

export default SingleBlogWelcome;