import './App.css';
import NavBar from './components/leatest/navbar/navbar1';
import Welcome from './components/leatest/headerbody/body1';
import About1 from './components/leatest/body/bodyContent1';
import LearningDock from './components/leatest/body/bodyContent2';
import ProgrammingDock from './components/leatest/body/bodyContent3';
import FooterComponent from './components/leatest/body/bodyContent4';
import EduWelcome from './components/edublog/body/edubody1';
import BlogBox from './components/edublog/body/edubody2';
import SingleBlogWelcome from './components/edublog/singleblog/singleblogbody1';
import SingleBlogBody from './components/edublog/singleblog/singleblogbody2';
// import WriteStory from './components/edublog/writingblogUI/writeStory';
import "./index.css";
import "./css/edublog/writeBlog.css";
import "./css/edublog/edublog.css";
import WriteStoryNav from './components/edublog/writingblogUI/nav';
// import WriteStory from './components/edublog/writingblogUI/story';
import WriteStory from './components/edublog/writingblogUI/writeblog';
// import RichTextEditor from './components/edublog/writingblogUI/quilleditor';
import { Component } from 'react';


class App extends Component {
    constructor() {
        super()
    }

    state = { currentState: "", singleBlog: "", writeBlog: "" };

    home = () => {
        window.scrollTo(0, 0);
        this.setState(state => ({ currentState: 'home', singleBlog: state.singleBlog, writeBlog: state.writeBlog }))
    }
    edublog = () => {
        window.scrollTo(0, 0);
        this.setState(state => ({ currentState: 'blog', singleBlog: state.singleBlog, writeBlog: state.writeBlog }))
    }

    singleBlog = () => {
        window.scrollTo(0, 0);
        this.setState(state => ({ currentState: 'singleblog', singleBlog: state.singleBlog, writeBlog: state.writeBlog }))
    }

    writeBlog = () => {
        window.scrollTo(0, 0);
        this.setState(state => ({ currentState: 'writeblog', singleBlog: state.singleBlog, writeBlog: state.writeBlog }))
    }

    programmingdock = () => {
        window.scrollTo(0, 0);
        this.setState(state => ({ currentState: 'compiler', singleBlog: state.singleBlog, writeBlog: state.writeBlog }))
    }

    learningdock = () => {
        window.scrollTo(0, 0);
        this.setState(state => ({ currentState: 'tutorials', singleBlog: state.singleBlog, writeBlog: state.writeBlog }))
    }


    returnComponent = (currentState) => {
        switch (currentState) {

            case 'home':
                return (
                    <div>
                        <NavBar home={this.home} />
                        <Welcome />
                        <About1 edublog={this.edublog} />
                        <LearningDock learningdock={this.learningdock} />
                        <ProgrammingDock programmingdock={this.programmingdock} />
                        <FooterComponent />
                    </div>
                )
            case 'blog':
                return (
                    <div>
                        <EduWelcome home={this.home} writeBlog={this.writeBlog} />
                        <BlogBox singleBlog={this.singleBlog} />
                    </div>
                )
            case 'singleblog':
                return (
                    <div>
                        <SingleBlogWelcome edublog={this.edublog} />
                        <SingleBlogBody />
                    </div>
                )

            case 'writeblog':
                return (
                    <div>
                        <WriteStoryNav home={this.home} />
                        <WriteStory edublog={this.edublog} />
                        {/* <RichTextEditor /> */}
                    </div>
                )
            // case 'compiler':
            //     return (
            //         <div>
            //             <Onprocess />
            //         </div>
            //     )

            // case 'tutorials':
            //     return (
            //         <div>
            //             <Onprocess />
            //         </div>
            //     )

            default:
                return (
                    <div>
                        <NavBar home={this.home} />
                        <Welcome />
                        <About1 edublog={this.edublog} />
                        <LearningDock learningdock={this.learningdock} />
                        <ProgrammingDock programmingdock={this.programmingdock} />
                        <FooterComponent />
                    </div>
                )
        }
    }

    render() {
        return (
            <div>
                {this.returnComponent(this.state.currentState)}
            </div>
        )
    }

}

// function App() {
//     return (
//         <div className="App" >

//             {/* leatest */}
//             {/* <NavBar />
//             <Welcome />
//             <About1 />
//             <LearningDock />
//             <ProgrammingDock />
//             <FooterComponent /> */}

//             {/* Edublog */}
//             {/* <EduWelcome />
//             <BlogBox /> */}

//             {/* single blog */}
//             {/* <SingleBlogWelcome />
//             <SingleBlogBody /> */}

//             {/* Write a blog */}
//             <WriteStoryNav />
//             <WriteStory />
//         </div>
//     );
// }

export default App;