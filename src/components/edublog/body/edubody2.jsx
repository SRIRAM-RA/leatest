import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";

AOS.init();

class BlogBox extends Component {
    constructor() {
        super();

        this.state = {
            linkedin: 'No link',
            github: 'No link',
            title: 'Loading...'
        }
    }
    componentDidMount = () => {
        axios.get("/getdata").then(response => {
            console.log(response);
            this.setState({
                linkedin: response.data.linkedin,
                github: response.data.github,
                title: response.data.title
            })
        })
    }
    render() {
        return (
            <section className="blogbox-outer" id="edubody">
                <box className="blogbox-inner" data-aos="fade-up-right"  >
                    <div className="blog-thumbnail-box">
                        <img src="/images/blogimage.png" className="blog-thumbnail" />
                    </div>
                    <div className="blog-content-section" >
                        <h3>DESIGN</h3>
                        <h2 onClick={this.props.singleBlog}>{this.state.title}.</h2>
                        <box className="blog-links-btns">
                            <a href={this.state.linkedin}>
                                <Button animated="vertical" className="blog-linkedin">
                                    <Button.Content visible><a href={this.state.linkedin}>LinkedIn</a></Button.Content>
                                    <Button.Content hidden className="blog-icon-links">
                                        <a href={this.state.linkedin}><Icon name='linkedin alternate' size="large" /></a>
                                    </Button.Content>
                                </Button>
                            </a>
                            <a href={this.state.github}>
                                <Button animated className="blog-linkedin">
                                    <Button.Content visible><a href={this.state.github}>GitHub</a></Button.Content>
                                    <Button.Content hidden className="blog-icon-links">
                                        <a href={this.state.github}><Icon name='github' size="large" /></a>
                                    </Button.Content>
                                </Button>
                            </a>
                        </box>
                        <h4>17/09/2021  |  15 min read</h4>
                    </div>
                </box>
                <box className="blogbox-inner" data-aos="fade-up-right" >
                    <div className="blog-thumbnail-box">
                        <img src="/images/blogimage.png" className="blog-thumbnail" />
                    </div>
                    <div className="blog-content-section">
                        <h3>DESIGN</h3>
                        <h2 onClick={this.props.singleBlog}>{this.state.title}.</h2>
                        <box className="blog-links-btns">
                            <a href={this.state.linkedin}>
                                <Button animated="vertical" className="blog-linkedin">
                                    <Button.Content visible><a href={this.state.linkedin}>LinkedIn</a></Button.Content>
                                    <Button.Content hidden className="blog-icon-links">
                                        <a href={this.state.linkedin}><Icon name='linkedin alternate' size="large" /></a>
                                    </Button.Content>
                                </Button>
                            </a>
                            <a href={this.state.github}>
                                <Button animated className="blog-linkedin">
                                    <Button.Content visible><a href={this.state.github}>GitHub</a></Button.Content>
                                    <Button.Content hidden className="blog-icon-links">
                                        <a href={this.state.github}><Icon name='github' size="large" /></a>
                                    </Button.Content>
                                </Button>
                            </a>
                        </box>
                        <h4>17/09/2021  |  15 min read</h4>
                    </div>
                </box>
            </section>
        )
    }
}

export default BlogBox;