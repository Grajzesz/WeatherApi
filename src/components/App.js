import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
const ApiKey = '3f5adde1534ce63dfb72e3180a717319';
class App extends Component {
    state = {
        value: '',
        date: '',
        city: '',
        sunrise: '',
        sunset: '',
        temp: '',
        pressure: '',
        wind: '',
        err: false
    };

    handleTextChange = e => {
        this.setState({
            value: e.target.value
        });
    };
    handleCitySubmit = e => {
        e.preventDefault();
        console.log('lala');

        const Api = `https://api.openweathermap.org/data/2.5/weather?q=${
            this.state.value
        }&APPID=${ApiKey}&units=metric`;

        fetch(Api)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error('lipa');
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                
                const time =new Date().toLocaleString()

                this.setState({
                    err: false,

                    date: time,

                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset,
                    temp: data.main.temp,
                    pressure: '',
                    wind: ''

                });
            })
            .catch(
                err => console.log(err),
                this.setState({
                    err: true
                })
            );
    };
    render() {
        return (
            <div>
                <Form
                    value={this.state.value}
                    change={this.handleTextChange}
                    submit={this.handleCitySubmit}
                />
                <Result error = {this.state.err}/>
            </div>
        );
    }
}

export default App;
