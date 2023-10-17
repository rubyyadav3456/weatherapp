import React, { useEffect, useState } from 'react';
import './index.css';

const App = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect( () => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1d3dce0089cc0531630fd643b1a241e9`;
            //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
            const response = await fetch(url);
            // console.log(response); 
            const respJson = await response.json();
            // console.log(resJson);

            setCity(respJson.main); 
        }
        
        fetchApi();
    } , [search]);

    return (
        <>
            <div className='box'>
            <h1>Weather App</h1><hr/>
                <div className='inputData'>
                    <input
                        type='search'
                        value={search}
                        className='inputField'
                        onChange={(event) => { setSearch(event.target.value) }}
                    />
                </div>

                {!city ? (
                    <p className='errormsg'>No Data Found</p>
                ) : (
                    <div>
                    <div className='info'>
                    <h2 className='location'>{search}</h2>
                    <h1 className='temp'>{city.temp}°Cel</h1>
                    <h3 className='tempmin_max'>
                        Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
                    </h3>
                </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default App;
