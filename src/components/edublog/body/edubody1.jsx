import React, { Component } from 'react';
import EduNav from '../navbar/edunavbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

AOS.init();

class EduWelcome extends Component {

    scrolldown = () => {
        window.scrollTo(0, 1000)
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
                            <h3 id="edu-welcome-content">Blogging is a great way to present yourself as a thought leader in your industry, but what else can it do for your knowledge?</h3>
                            <div onClick={this.props.writeBlog}>
                                <Button className='write-a-blog-btn'>Create a Blog</Button>
                            </div>
                        </box>
                        <br />
                        <box className="scrolldown">
                            <a href="#edubody"><i class="fas fa-hand-point-down" style={{ cursor: "pointer" }} ></i></a>
                        </box>
                    </section>
                </box>
            </section>
        )
    }
}

export default EduWelcome;