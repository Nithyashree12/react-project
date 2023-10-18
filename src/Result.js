import React from "react";

const Result=
({
    selectedCityName,selectedStateName
})=>{
    return(
        <div>
            <h1>You Have Selected{selectedCityName},{selectedStateName}</h1>
        </div>
    )
}
export default Result;