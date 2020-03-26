import React, {useState} from "react"

function Breweries(props) {
    function handleClick(evt) {
        document.body.classList.remove("found")
        document.body.style.backgroundImage = `url(https://maps.googleapis.com/maps/api/staticmap?center=${queryParser(props.brewery.street)}&zoom=13&markers=color:red%7Clabel%7C${queryParser(props.brewery.street)}&size=2560x1440&key=${process.env.REACT_APP_API_KEY})`
        document.body.style.backgroundSize = "contain"
        document.body.style.backgroundAttachment = "fixed"
    }

    function queryParser(query) {
        query = query.replace(/ /g, '+')
        return query
    }

    return(
        <div className="flex">
            <div className="brewery">
                {
                    props.brewery.name === "" ?
                    <h3>Name not found</h3> : <h3>{props.brewery.name}</h3>
                }
                {
                    props.brewery.street === "" ?
                    <p>Address not found</p> 
                    : 
                    <div 
                        id="location"
                        onClick={handleClick}    
                    >
                            <span>{props.brewery.street}</span>
                            &ensp;
                            <i className="fas fa-map-marker-alt"></i>
                    </div>
                }
                {
                    (props.brewery.city === "" || props.brewery.state === "" || props.brewery.postal_code === "") ?
                    <p>Location not found</p> : (<p>{props.brewery.city}, {props.brewery.state} {props.brewery.postal_code}</p>)
                }
            </div>
        </div>
    )
}

export default Breweries