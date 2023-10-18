import React, { useEffect, useState } from "react";

const CitiesList=({selectedState})=>
{
    const[cities,setCities]= useState([]);

    const[selectedCity,setselectedCity]=useState('');
     useEffect(()=>
     {
        fetchCities(selectedState);
     },[selectedState]
     );

     const fetchCities=(state)=>
     {
        fetch('http://api.minebrat.com/api/v1/states/cities/%7BstateId%7D=${state}').then(Response.json()).then(data=>setCities(data)).catch(error=>console.log(error));
     };
     const handleCityChange=(event)=>
     {
        setselectedCity(event.target.value);
     }
    return(
        <div>
            <h2>CitiesList Component</h2>
            <select value={selectedCity} onChange={handleCityChange}>
                <option value="">select a City</option>
                {
                    cities.map(city=>
                    (
                     <option key={city.id} value={city.name}>{city.name}</option>
                    )
                  )
                }
            </select>
        </div>
    )
}
export default CitiesList;