import React from 'react';

const Result = props => {
    const {
        err,
        city,
        temp,
        date,
        sunrise,
        sunset,
        pressure,
        wind,
        windDeg,
        icon,
        temp_max,
        temp_min
    } = props.weather;
    let iconset = `http://openweathermap.org/img/w/${icon}.png`;
    let content = null;
    if (!err && city) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
        content = (
            <div className="content">
                <div>Wyszukiwanie dla miasta {city}</div>
                <div>Na dzień: {date}</div>
                <div>
                    temperatura: {temp} &#176;C od {temp_min} &#176;C do{' '}
                    {temp_max} &#176;C
                </div>

                <div>Wschód słońca: {sunriseTime}</div>
                <div>Zachód słońca: {sunsetTime}</div>
                <div>
                    Wiatr: {wind} m/s {windDeg}
                </div>
                <div>Ciśnienie: {pressure} hPa</div>
                <div>
                    <img src={iconset} alt="djis" />
                </div>
            </div>
        );
    }
    return (
        <div className="result">
            {err ? `Nie mamy w bazie ${city}` : content}
            {/* <div>Pogoda dla: {city}</div>
            <div>Na dzień: {date}</div>
            <div>temperatura: {temp}</div>

            <div>Wschód słońca: {sunrise}</div>
            <div>Zachód słońca: {sunset}</div>
            <div>Wiatr: {wind}</div>
            <div>Ciśnienie: {pressure}</div> */}
        </div>
    );
};
export default Result;
