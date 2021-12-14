import React, { Component } from "react";
import { Menu, Segment, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Navbar extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Segment inverted className="navbar">
            <Menu inverted pointing secondary size='large' >
                <Image src='images/Logo.png' className = 'logo'/>
                <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
                position = 'right'
                className = 'navItems'
                />
                <Menu.Item
                name='About'
                active={activeItem === 'About'}
                onClick={this.handleItemClick}
                />
                <Menu.Item
                name='Contact'
                active={activeItem === 'Contact'}
                onClick={this.handleItemClick}
                />
                <Menu.Item
                name='Login'
                active={activeItem === 'Login'}
                onClick={this.handleItemClick}
                />
            </Menu>
        </Segment>
      )
    }
  }

export default Navbar;