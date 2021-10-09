import React, { Component } from "react";
import Animate from "../animations/animation";
import 'semantic-ui-css/semantic.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

class NavBar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            active: false}
    }
    toggleClass = (e) => {
        // e.classList.add('active')
        const currentState = this.state.active
        this.setState({ active: !currentState })
    }  
    myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
    };  

    render(){
        return(
            <div className="topnav" id="myTopnav" data-aos="fade-in" data-aos-duration="1800">
                <div>
                    <Animate />
                </div>
                <div className="nav-contents">
                    <a href="#home"  name='home'  className = {this.state.active ? 'active': null}  onClick = {this.toggleClass}>Home</a>
                    <a href="#news" name='about'  className = {this.state.active ? 'active': null} onClick = {this.toggleClass}>About</a>
                    <a href="#contact" name='contact' className = {this.state.active ? 'active': null} onClick = {this.toggleClass}>Contact</a>
                    <a href="#about" name='login' className = {this.state.active ? 'active': null} onClick = {this.toggleClass}>Login</a>
                    <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>
                    <i className="fa fa-bars"></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default NavBar;