import { useSelector } from 'react-redux';
import Days from './Days';
import Display from './Display';
import SearchBar from './SearchBar';
import twitter from '../assets/images/twitter.svg';
import github from '../assets/images/github.svg';

function Wrapper() {
	const { isLoading } = useSelector((state) => state.weather);

	return (
		<div className={`wrapper ${isLoading && 'isLoading'}`}>
			<div className='social'>
				<a href='https://github.com/Abdulkbk'>
					<img src={github} alt='' />
				</a>
				<a href='https://twitter.com/Thevelopher'>
					<img src={twitter} alt='' />
				</a>
			</div>
			<SearchBar />
			<Display />
			<Days />
		</div>
	);
}

export default Wrapper;
