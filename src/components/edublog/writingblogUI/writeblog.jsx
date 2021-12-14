import React, { Component } from "react";
import { Button } from 'semantic-ui-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import 'semantic-ui-css/semantic.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";

AOS.init();

class WriteStory extends Component {
    state = { title: "", story: "", linkedin: "", github: "" }

    constructor(props) {
        super(props);

        this.modules = {
            toolbar: [
                // [{ 'font': [] }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                ['bold', 'italic', 'underline'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'align': [] }],
                [{ 'color': [] }, { 'background': [] }],
                ['link', 'image', 'video'],
                ['blockquote', 'code-block'],
                ['clean']
            ]
        };

        this.formats = [
            'size',
            'bold', 'italic', 'underline',
            'list', 'bullet',
            'align',
            'color', 'background',
            'image', 'link', 'video',
            'blockquote', 'code-block'
        ];

        // this.state = {
        //     story: ''
        // }

        // this.rteChange = this.rteChange.bind(this);
    }

    rteChange = (content) => {
        this.setState({ story: content })
        // console.log((this.state.story));
    }

    inputData = (event) => {
        this.setState({ title: event.target.value })
    }

    inputData1 = (event) => {
        this.setState({ linkedin: event.target.value })
    }

    inputData2 = (event) => {
        this.setState({ github: event.target.value })
    }
    insertData = async (event) => {
        event.preventDefault()
        const title = this.state.title
        const story = this.state.story
        const linkedin = this.state.linkedin
        const github = this.state.github
        console.log(title, story, linkedin, github)
        axios.post('/upload', {
            title: title, story: story, linkedin: linkedin, github: github
        }).then(response => {
            console.log(response);
        })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className="write-blog-outer-box">
                <section data-aos="fade-up" className="write-blog-inner-box">
                    <h2> Write a Story</h2>
                    <label> Title </label><p />
                    <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.inputData.bind(this)} />
                    <br />
                    <label> Linkedin </label><p />
                    <input type="text" name="linkedin" placeholder="LinkedIn link here" value={this.state.linkedin} onChange={this.inputData1.bind(this)} />
                    <br />
                    <label> Github </label><p />
                    <input type="text" name="github" placeholder="Github link here" value={this.state.github} onChange={this.inputData2.bind(this)} />
                    <br />
                    <label> Story </label><p />
                    <ReactQuill theme="bubble" className="editor" name="story" modules={this.modules}
                        formats={this.formats}
                        value={this.state.story} onChange={this.rteChange} />
                    <br />
                    <div onClick={this.props.edublog}>
                        <Button type="submit" onClick={this.insertData.bind(this)}> Publish</Button>
                    </div>
                </section>
            </div>
        )
    }
}
export default WriteStory;