import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeather } from './redux/weatherSlice'
import load from './assets/images/loading.gif'

import './App.css';
import Wrapper from './components/Wrapper';

function App() {

  const { isLoading } = useSelector(state => state.weather)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getWeather())
  }, [dispatch])


  return (
    <div className="App">
      {isLoading === true ? <div className="loader-wrapper">
        <img src={load} alt="Loading..." className=""/>
      </div> : null}
      <Wrapper />
    </div>
  );
}

export default App;
