import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../redux/weatherSlice';
import map from '../assets/images/map-pin.svg';

function SearchBar() {
	const [date, setDate] = useState(null);
	const [city, setCity] = useState('');
	const dispatch = useDispatch();

	const { defaultData } = useSelector((state) => state.weather);

	useEffect(() => {
		setDate(defaultData && defaultData.dt);
	}, [date, defaultData]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getWeather(city));
	};

	return (
		<div className='search-bar'>
			<div>
				<h6 className='day'>{converter(date)}</h6>
				<form onSubmit={handleSubmit}>
					<img src={map} alt='map icon' style={{ opacity: '.5' }} />
					<input
						type='text'
						placeholder='kaduna...'
						value={city}
						onChange={(e) => setCity(e.target.value)}
					/>
				</form>
			</div>
		</div>
	);
}

function converter(utc) {
	const dayArray = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	const date = new Date(utc * 1000);

	return dayArray[date.getDay()];
}

export default SearchBar;
