import React, { useState } from "react";
import Breweries from "./Breweries";

//Object of URLs for API Calls
const apiBase = {
	city: "https://api.openbrewerydb.org/breweries?by_city=",
	state: "https://api.openbrewerydb.org/breweries?by_state=",
	name: "https://api.openbrewerydb.org/breweries?by_name=",
};

function Form() {
	const [search, setSearch] = useState("city"); //Changes Placeholder text for search input
	const [query, setQuery] = useState("");
	const [breweries, setBreweries] = useState({});

	//Fades search input and then retrieves breweries and resets query
	function handleChange(evt) {
		if (evt.key === "Enter") {
			document.getElementById("inputDiv").classList.toggle("fadeOut");
			fetch(`${apiBase[search]}${query}`)
				.then((res) => res.json())
				.then((result) => {
					setBreweries(result);
					setQuery("");
				});
		}
	}

	return (
		<div>
			<div className="container">
				<div id="inputDiv">
					<div id="radioButtons">
						<label>
							City
							<input type="radio" name="search" value="city" onChange={(ev) => setSearch(ev.target.value)} checked={search === "city"} />
						</label>
						&nbsp;
						<label>
							State
							<input type="radio" name="search" value="state" onChange={(ev) => setSearch(ev.target.value)} checked={search === "state"} />
						</label>
						&nbsp;
						<label>
							Name
							<input type="radio" name="search" value="name" onChange={(ev) => setSearch(ev.target.value)} checked={search === "name"} />
						</label>
					</div>
					<input id="searchBar" type="text" name="query" placeholder={`Search by ${search}...`} onChange={(ev) => setQuery(ev.target.value)} onKeyPress={handleChange} value={query} />
				</div>
			</div>
			<div className="breweryContainer">
				<Breweries breweries={breweries} />
			</div>
		</div>
	);
}

export default Form;
