import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

AOS.init();

class SingleBlogBody extends Component {

    constructor() {
        super();
        this.state = {
            title: 'Not gotten',
            story: 'loading'
        }
    }

    componentDidMount = () => {
        axios.get("/getdata").then(response => {
            console.log(response);
            this.setState({
                title: response.data.title,
                story: response.data.story
            })
        })
    }

    render() {
        return (
            <section className="singleblog-box-content" id="singleblogbody">
                <box className="singleblog-box-content-innerbox" data-aos="fade-up">
                    {/* <img src="/images/blogimage.png" className="blog-head-image" /> */}
                    <div className="profile-box">
                        <div className="profile-image">
                            <img src="/images/profile.png" className="blog-profile-head-image" />
                        </div>
                        <div className="profile-info-box">
                            <h2>Lorem Ipsium</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et.</p>
                        </div>

                    </div>
                    <h1 className="singleblog-title" dangerouslySetInnerHTML={{ __html: this.state.title }}></h1>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p> */}
                    <div dangerouslySetInnerHTML={{ __html: this.state.story }} />
                </box>
            </section>
        )
    }
}

export default SingleBlogBody;