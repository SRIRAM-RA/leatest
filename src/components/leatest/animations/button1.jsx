import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

class Button1 extends Component {
    render() {
        return (
            <Button animated size='large' className="learning-btn"  >
                <Button.Content visible>Have a look</Button.Content>
                <Button.Content hidden>
                    <Icon name='hand point right outline' />
                </Button.Content>
            </Button>
        )
    }
}

export default Button1;