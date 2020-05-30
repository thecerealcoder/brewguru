import React from "react";

function Navbar() {
	//Fades search input in and out when search icon is clicked
	function handleClick() {
		if (document.getElementById("inputDiv") !== null) {
			document.getElementById("inputDiv").classList.toggle("fadeOut");
		}
	}

	return (
		<div id="navbar">
			<div></div>
			<h1>BrewGuru</h1>
			<i className="fas fa-search" onClick={handleClick}></i>
		</div>
	);
}

export default Navbar;
