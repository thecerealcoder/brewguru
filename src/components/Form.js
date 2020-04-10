import React, {useState} from 'react'
import Breweries from "./Breweries"
import NotFound from "./NotFound"

const apiBase = {
                    city:"https://api.openbrewerydb.org/breweries?by_city=",
                    state:"https://api.openbrewerydb.org/breweries?by_state=",
                    name:"https://api.openbrewerydb.org/breweries?by_name="
                }

function Form() {

    const [search, setSearch] = useState("city")
    const [query, setQuery] = useState("")
    const[brewery, setBrewery] = useState({})

    function handleChange(evt) {
        if(evt.key === "Enter") {
                document.getElementById("inputDiv").classList.toggle("fadeOut")
                document.body.classList.add("found") 
                fetch(`${apiBase[search]}${query}`)
                    .then(res => res.json())
                    .then(result => {
                        setBrewery(result)
                        setQuery("")
                    })   
                }
    }

    return(
        <div className="container">
             <div id="inputDiv">
                <div id="radioButtons">
                    <label>
                        City:
                        <input type="radio" name="search" value="city" onChange={ev=> setSearch(ev.target.value)} checked={search === "city"} />
                    </label>
                    &nbsp;
                    <label>
                        State:
                        <input type="radio" name="search" value="state" onChange={ev=> setSearch(ev.target.value)} checked={search === "state"} />
                    </label>
                    &nbsp;
                    <label>
                        Name:
                        <input type="radio" name="search" value="name" onChange={ev=> setSearch(ev.target.value)} checked={search === "name"} />
                    </label>
                </div>
                <input 
                    id="searchBar"
                    type="text"
                    name="query"
                    placeholder={`Search by ${search}...`}
                    onChange={ev => setQuery(ev.target.value)}
                    onKeyPress={handleChange}
                    value={query}
                />
            </div>
            {(brewery.length !== undefined) &&
                (brewery.length !== 0 ?
                    brewery.map(brewery => (
                        <Breweries brewery={brewery} />
                    ))
                     : 
                    <NotFound />
                )
            }
        </div>
    )
}

export default Form