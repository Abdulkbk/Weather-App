import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import DayItem from './DayItem'

function Days() {

    const [data, setData] = useState(null)

    const { forcast } = useSelector(state => state.weather)

    useEffect(() => {
        setData(forcast && forcast)
    }, [forcast])


    return (
        <div className="days">
            <DayItem daily={data} />
        </div>
    )
}

export default Days
