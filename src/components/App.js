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
        temp1: '',
        time:'',
temp2: '',
temp3: '',
temp4: '',
temp5: '',
temp6: '',
temp7: '',
        pressure: '',
        wind: '',
        icon: '',
        icon1: '',
icon2: '',
icon3: '',
icon4: '',
icon5: '',
icon6: '',
icon7: '',

        err: false,
        // tomorrow
        tomorrow_value: '',
        tomorrow_date: '',

        tomorrow_sunrise: '',
        tomorrow_sunset: '',
        tomorrow_temp: '',
        tomorrow_pressure: '',
        tomorrow_wind: '',
        tomorrow_icon: '',
        // aftertomorrow
        afterTomorrow_value: '',
        afterTomorrow_date: '',

        afterTomorrow_sunrise: '',
        afterTomorrow_sunset: '',
        afterTomorrow_temp: '',
        afterTomorrow_pressure: '',
        afterTomorrow_wind: '',
        afterTomorrow_icon: '',
        //afteraftertomorrow
        dayAfterTomorrow_value: '',
        dayAfterTomorrow_date: '',

        dayAfterTomorrow_sunrise: '',
        dayAfterTomorrow_sunset: '',
        dayAfterTomorrow_temp: '',
        dayAfterTomorrow_pressure: '',
        dayAfterTomorrow_wind: '',
        dayAfterTomorrow_icon: ''
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
            .then(response => {
                console.log(response);
                if (response.ok) {
                    return response;
                }

                const time = new Date().toLocaleString();

                this.setState(prevState => ({
                    err: false,

                    date: time,

                    sunrise: response[0].sys.sunrise,
                    sunset: response[0].sys.sunset,
                    time: response[1].list[0].dt_txt,
                    temp: response[1].list[0].main.temp,
                    temp1: response[1].list[1].main.temp,
                    temp2: response[1].list[2].main.temp,
                    temp3: response[1].list[3].main.temp,
                    temp4: response[1].list[4].main.temp,
                    temp5: response[1].list[5].main.temp,
                    temp6: response[1].list[6].main.temp,
                    temp7: response[1].list[7].main.temp,
                    pressure: response[1].list[0].main.pressure,
                    wind: response[1].list[0].wind.speed,
                    windDeg: response[1].list[0].wind.deg,
                    icon: response[1].list[0].weather[0].icon,
                    icon1: response[1].list[1].weather[0].icon,
                    icon2: response[1].list[2].weather[0].icon,
                    icon3: response[1].list[3].weather[0].icon,
                    icon4: response[1].list[4].weather[0].icon,
                    icon5: response[1].list[5].weather[0].icon,
                    icon6: response[1].list[6].weather[0].icon,
                    icon7: response[1].list[7].weather[0].icon,
                    city: prevState.value,
                    temp_max: response[1].list[0].main.temp_max,
                    temp_min: response[1].list[0].main.temp_min,
                    // tomorrow

                    tomorrow_date: response[1].list[5].dt_txt,

                    tomorrow_temp: response[1].list[5].main.temp,

                    tomorrow_pressure: response[1].list[5].main.pressure,
                    tomorrow_wind: response[1].list[5].wind.speed,
                    tomorrow_icon: response[1].list[5].weather[0].icon,
                    tomorrow_windDeg: response[1].list[5].wind.deg,
                    // aftertomorrow

                    afterTomorrow_date: response[1].list[13].dt_txt,
                    afterTomorrow_windDeg: response[1].list[13].wind.deg,
                    afterTomorrow_temp: response[1].list[13].main.temp,
                    afterTomorrow_pressure: response[1].list[13].main.pressure,
                    afterTomorrow_wind: response[1].list[13].wind.speed,
                    afterTomorrow_icon: response[1].list[13].weather[0].icon,
                    //afteraftertomorrow

                    dayAfterTomorrow_date: response[1].list[21].dt_txt,
                    dayAfterTomorrow_windDeg: response[1].list[21].wind.deg,
                    dayAfterTomorrow_temp: response[1].list[21].main.temp,
                    dayAfterTomorrow_pressure:(response[1].list[21].main.pressure),

                    dayAfterTomorrow_wind: response[1].list[21].wind.speed,
                    dayAfterTomorrow_icon: response[1].list[21].weather[0].icon
                }));
            })

            .catch(err => {
                console.log(err);
            });
    };

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
