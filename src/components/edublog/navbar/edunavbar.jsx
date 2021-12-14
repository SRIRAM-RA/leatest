import React, { Component } from "react";
import Animate from "../animations/animation";

class EduNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }
    myFunction() {
        var x = document.getElementById("edunav");
        if (x.className === "edutopnav") {
            x.className += " responsive";
        } else {
            x.className = "edutopnav";
        }
    };

    render() {
        return (
            <div className="edutopnav" id="edunav">
                <div onClick={this.props.home}>
                    <Animate />
                </div>
                <div className="nav-contents">
                    <a href="#home" name='home' className={this.state.active ? 'active' : null} onClick={this.toggleClass}>Home</a>
                    <a href="#news" name='about' className={this.state.active ? 'active' : null} onClick={this.toggleClass}>Articles</a>
                    <a href="#contact" name='contact' className={this.state.active ? 'active' : null} onClick={this.toggleClass}>Team</a>
                    <a href="#about" name='login' className={this.state.active ? 'active' : null} onClick={this.toggleClass}>Login</a>
                    <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default EduNav;