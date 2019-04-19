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
        temp_min,
        temp1,
        temp2,
        temp3,
        temp4,
        temp5,
        temp6,
        temp7,
        icon1,
        icon2,
        icon3,
        icon4,
        icon5,
        icon6,
        icon7,
        // tomorrow
        tomorrow_date,
        tomorrow_windDeg,
        tomorrow_temp,
        tomorrow_pressure,
        tomorrow_wind,
        tomorrow_icon,
        // aftertomorrow

        afterTomorrow_date,

        afterTomorrow_temp,
        afterTomorrow_pressure,
        afterTomorrow_wind,
        afterTomorrow_windDeg,
        afterTomorrow_icon,
        //afteraftertomorrow

        dayAfterTomorrow_date,

        dayAfterTomorrow_temp,
        dayAfterTomorrow_pressure,
        dayAfterTomorrow_wind,
        dayAfterTomorrow_windDeg,
        dayAfterTomorrow_icon
    } = props.weather;
    // var timer = time;
    // let hour = timer.slice(11, 16);
    // console.log(hour + 3);

    function hoursSet(n) {
        var dt = new Date();
        dt.setHours(dt.getHours() + n);
        var dupa = dt.toString();
        return dupa.slice(16, -47) + ':00';
    }

    function icona(a) {
        return `http://openweathermap.org/img/w/${a}.png`;
    }
    let iconset = `http://openweathermap.org/img/w/${icon}.png`;
    let tomorrow_iconset = `http://openweathermap.org/img/w/${tomorrow_icon}.png`;
    let afterTomorrow_iconset = `http://openweathermap.org/img/w/${afterTomorrow_icon}.png`;
    let dayAfterTomorrow_iconset = `http://openweathermap.org/img/w/${dayAfterTomorrow_icon}.png`;
    let content = null;
    if (!err && city) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
        content = (
            <div className="content">
                <div className="today__container">
                    <div>
                        <h3>Wyszukiwanie dla miasta {city}</h3>
                    </div>
                    <div>Na dzień: {date}</div>
                    <div>
                        temperatura: {temp} &#176;C od {temp_min} &#176;C do{' '}
                        {temp_max} &#176;C
                    </div>

                    <div>Wschód słońca: {sunriseTime}</div>
                    <div>Zachód słońca: {sunsetTime}</div>
                    <div>
                        Wiatr: {wind} m/s{' '}
                        <i
                            className="fas fa-location-arrow"
                            style={{ transform: `rotate(${windDeg - 43}deg)` }}
                        />
                    </div>
                    <div>Ciśnienie: {pressure} hPa</div>

                    <div className="icon__container">
                        <img src={iconset} alt="djis" />
                    </div>
                    <div className="later__today">
                        <div className="later__today-hours1 align-items">
                            <div className="hours">{hoursSet(3)}</div>&nbsp;
                            {temp1} &#176;C
                            <img src={icona(icon1)} alt="djis" />
                        </div>
                        <div className="later__today-hours2 align-items">
                            <div className="hours">{hoursSet(6)}</div>&nbsp;
                            {temp2} &#176;C
                            <img src={icona(icon2)} alt="djis" />
                        </div>
                        <div className="later__today-hours3 align-items">
                            <div className="hours">{hoursSet(9)}</div>&nbsp;
                            {temp3} &#176;C
                            <img src={icona(icon3)} alt="djis" />
                        </div>
                        <div className="later__today-hours4 align-items">
                            <div className="hours">{hoursSet(12)}</div>&nbsp;
                            {temp4} &#176;C
                            <img src={icona(icon4)} alt="djis" />
                        </div>
                        <div className="later__today-hours5 align-items">
                            <div className="hours">{hoursSet(15)}</div>&nbsp;
                            {temp5} &#176;C
                            <img src={icona(icon5)} alt="djis" />
                        </div>
                        <div className="later__today-hours6 align-items">
                            <div className="hours">{hoursSet(18)}</div>&nbsp;
                            {temp6} &#176;C
                            <img src={icona(icon6)} alt="djis" />
                        </div>
                        <div className="later__today-hours7 align-items">
                            <div className="hours">{hoursSet(21)}</div>&nbsp;
                            {temp7} &#176;C
                            <img src={icona(icon7)} alt="djis" />
                        </div>
                    </div>
                </div>

                {/* tomorrow */}
                <div className="next__days">
                    <div className="tomorrow">
                        <div>Na dzień: {tomorrow_date}</div>
                        <div>temperatura: {tomorrow_temp} &#176;C</div>

                        <div>
                            Wiatr: {tomorrow_wind} m/s{' '}
                            <i
                                className="fas fa-location-arrow"
                                style={{
                                    transform: `rotate(${tomorrow_windDeg -
                                        43}deg)`
                                }}
                            />
                        </div>
                        <div>Ciśnienie: {tomorrow_pressure} hPa</div>
                        <div className="icon__container">
                            <img src={tomorrow_iconset} alt="djis" />
                        </div>
                    </div>
                    {/* afterTomorrow */}
                    <div className="tomorrow">
                        <div>Na dzień: {afterTomorrow_date}</div>
                        <div>temperatura: {afterTomorrow_temp} &#176;C</div>

                        <div>
                            Wiatr: {afterTomorrow_wind} m/s{' '}
                            <i
                                className="fas fa-location-arrow"
                                style={{
                                    transform: `rotate(${afterTomorrow_windDeg -
                                        43}deg)`
                                }}
                            />
                        </div>
                        <div>Ciśnienie: {afterTomorrow_pressure} hPa</div>
                        <div className="icon__container">
                            <img src={afterTomorrow_iconset} alt="djis" />
                        </div>
                    </div>
                    {/* dayAfterTomorrow */}
                    <div className="tomorrow">
                        <div>Na dzień: {dayAfterTomorrow_date}</div>
                        <div>temperatura: {dayAfterTomorrow_temp} &#176;C</div>

                        <div>
                            Wiatr: {dayAfterTomorrow_wind} m/s{' '}
                            <i
                                className="fas fa-location-arrow"
                                style={{
                                    transform: `rotate(${dayAfterTomorrow_windDeg -
                                        43}deg)`
                                }}
                            />
                        </div>
                        <div>Ciśnienie: {dayAfterTomorrow_pressure} hPa</div>
                        <div className="icon__container">
                            <img src={dayAfterTomorrow_iconset} alt="djis" />
                        </div>
                    </div>
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
