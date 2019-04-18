import React, { Component } from 'react';
import './App.css';
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
        icon:"",
        err: false,
        recentInfo: [],
            allTimeInfo: []
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

        const ApiForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${
            this.state.value
        }&APPID=${ApiKey}&units=metric`;



        Promise.all([
            fetch(Api).then(response => response.json()),
            fetch(ApiForecast).then(response => response.json())
            ])
            .then((response) => {
                console.log(response);
                if(response.ok){


                    return response
                }


                   const time = new Date().toLocaleString();

                this.setState(prevState => ({
                    err: false,

                    date: time,

                    sunrise: response[0].sys.sunrise,
                    sunset: response[0].sys.sunset,
                    temp: response[1].list[0].main.temp,
                    pressure: response[1].list[0].main.pressure,
                    wind: response[1].list[0].wind.speed,
                    windDeg: response[1].list[0].wind.deg,
                    icon: response[1].list[0].weather[0].icon,
                    city: prevState.value,
                    temp_max: response[1].list[0].main.temp_max,
                    temp_min: response[1].list[0].main.temp_min
                }));
            })


















            .catch((err) => {
                console.log(err);
            });
    }

        // fetch(Api)
        // fetch(ApiForecast)
        //     .then(response => {

        //         if (response.ok) {
        //             return response


        //         }
        //         throw Error('lipa');
        //     })
            // .then(response => response.json())
            // .then(data => {
            //     console.log(data);

            //     const time = new Date().toLocaleString();

            //     this.setState(prevState => ({
            //         err: false,

            //         date: time,

            //         sunrise: data.list[0].sys.sunrise,
            //         sunset: data.list[0].sys.sunset,
            //         temp: data.list[0].main.temp,
            //         pressure: data.list[0].main.pressure,
            //         wind: data.list[0].wind.speed,
            //         windDeg: data.list[0].wind.deg,
            //         icon: data.list[0].weather[0].icon,
            //         city: prevState.value,
            //         temp_max: data.list[0].main.temp_max,
            //         temp_min: data.list[0].main.temp_min
            //     }));
            // })
            // .catch(
            //     err => console.log(err),
            //     this.setState(prevState => ({
            //         err: true,
            //         city: prevState.value
            //     }))
            // );







    render() {
        return (
            <div>
                <Form
                    value={this.state.value}
                    change={this.handleTextChange}
                    submit={this.handleCitySubmit}
                />
                <Result weather={this.state} />
            </div>
        );
    }
}

export default App;
