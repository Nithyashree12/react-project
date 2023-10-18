import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import CitiesList from "./CitiesList";

const List=()=>
{
    const[selectedState,setselectedState]=useState('');

    const handleStateChange=(event)=>
    {
        setselectedState(event.target.value);
    };
    const navigate = useNavigate();
    const handleSubmit=()=>{    
        navigate.push('/result');
    }
    return(
        <div>
            <h1>List Component</h1>
            <select value={selectedState} onChange={handleStateChange}>
                <option value="http://api.minebrat.com/api/v1/states">select a state</option>
                <option value="state1">State 1</option>
                <option value="state2">State 2</option>
                <option value="state3">State 3</option>
            </select>
            {selectedState && <CitiesList selectedState={selectedState}/>}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default List;