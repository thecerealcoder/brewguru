import React from "react"

function Breweries(props) {
    return(
        <div className="brewery">
            <h3>{props.brewery.name}</h3>
            <p>{props.brewery.street}</p>
            <p>{props.brewery.city}</p>
            <p>{props.brewery.state}</p>
        </div>

    )
}

export default Breweries