import { useState, useEffect } from 'react';
import humidity from '../assets/images/humidity.png';
import windSpeed from '../assets/images/wind.png';
import { useSelector } from 'react-redux';

function Display() {
	const { defaultData } = useSelector((state) => state.weather);
	const [data, setData] = useState(null);

	useEffect(() => {
		setData(defaultData);
	}, [defaultData]);

	return (
		<div className='display'>
			<div className='display-wrapper'>
				<div className='weather-icon'>
					{data ? (
						<img
							src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
							alt='weather icon'
						/>
					) : null}
				</div>
				<div className='weather-decr'>
					<div className='descr-1'>
						<h1 className='temp'>
							{data ? data.main.temp : null}
							<sup>&#176;C</sup>
						</h1>
					</div>
					<div className='descr-2'>
						<div>
							<img src={humidity} alt='humidity icon' />
							<p>{data && data.main.humidity}</p>
						</div>
						<div>
							<img src={windSpeed} alt='wind speed icon' />
							<p>{data && data.wind.speed + ' km/h'}</p>
						</div>
						<div className='min-max'>
							<h4>min / max</h4>
							<p>
								{data &&
									data.main.temp_min + ' / ' + data &&
									data.main.temp_max}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Display;
