import { useEffect, useState } from 'react'

function DayItem({daily}) {

    const [data, setData] = useState(null)
    
    useEffect(() => {
        setData(daily && daily.daily.filter((d, index) => index !== 0))
    }, [daily])


    const days = data && data.map((d, index) => (
        <div className="day-2" key={index}>
                <h2>{getDay(d.dt)}</h2>
                <div className="img-wrapper">
                    <img src={`http://openweathermap.org/img/wn/${d.weather[0].icon}@4x.png`} alt="weather icon"/>
                </div>
                <h4> {d.temp.day} &#176;</h4>
            </div>
    ))

    return days ? days : null
}

function getDay(utc) {
    
    const dayArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const date = new Date(utc * 1000)

    return dayArray[date.getDay()]

}

export default DayItem
