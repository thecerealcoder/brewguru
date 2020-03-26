import React, {useState} from 'react'
import Breweries from "./Breweries"
import NotFound from "./NotFound"

const apiBase = "https://api.openbrewerydb.org/breweries?by_postal="

function Form() {

    const [query, setQuery] = useState("")
    const[brewery, setBrewery] = useState({})

    function handleChange(evt) {
        if(evt.key === "Enter") {
                document.getElementById("inputDiv").classList.toggle("fadeOut")
                document.body.style.backgroundImage = `url(https://www.publicdomainpictures.net/pictures/30000/velka/plain-white-background.jpg)`
                document.body.style.backgroundSize = "contain"
                document.body.style.backgroundAttachment = "fixed"
                document.body.classList.add("found") 
                fetch(`${apiBase}${query}`)
                    .then(res => res.json())
                    .then(result => {
                        setBrewery(result)
                        setQuery("")
                        console.log(result)
                    })   
                }
    }

    return(
        <div className="container">
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
            {(brewery.length !== undefined) &&
                (brewery.length !== 0 ?
                    brewery.map(brewery => (
                        <Breweries key={brewery.id} brewery={brewery} />
                    ))
                     : 
                    <NotFound />
                )
            }
        </div>
    )
}

export default Form