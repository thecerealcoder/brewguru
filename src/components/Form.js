import React, {useState} from 'react';
import Breweries from "./Breweries"
import NotFound from "./NotFound"

const apiBase = "https://api.openbrewerydb.org/breweries?by_postal="

function Form() {

    const [query, setQuery] = useState("")
    const[brewery, setBrewery] = useState({})

    function handleChange(evt) {
        if(evt.key === "Enter") {
                document.getElementById("inputDiv").classList.toggle("fadeOut")
                document.body.classList.toggle("found") 
                console.log(document.getElementById("inputDiv").classList)
         fetch(`${apiBase}${query}`)
            .then(res => res.json())
            .then(result => {
                setBrewery(result)
                setQuery("")
            })   
        }
    }

    return(
        <div>
            {(brewery.length !== undefined) &&
                (brewery.length !== 0 ?
                    brewery.map(brewery => (
                        <Breweries key={brewery.id} brewery={brewery} />
                    ))
                     : 
                    <NotFound />
                )
            }
            <div id="inputDiv">
                <h1>Enter your Zipcode</h1>
                <input 
                    type="text"
                    name="zipcode"
                    placeholder="zipcode"
                    onChange={ev => setQuery(ev.target.value)}
                    onKeyPress={handleChange}
                    value={query}
                />
            </div>
        </div>
    )
}

export default Form