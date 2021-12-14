import React, { Component } from "react";
import axios from "axios";


class Weather extends Component {
    constructor() {
        super();
        this.state = {
            weather: "not yet gotten"
        }
    }

    componentDidMount = () => {
        axios.get("/getweather").then(response => {
            console.log(response);
            this.setState({
                weather: response.data.temp
            });
        });
    };

    render() {
        return (
            <div>
                <button type="submit"> get weather</button>
                <p1> The weather is : {this.state.weather}</p1>
            </div>
        );
    }
}

export default Weather;