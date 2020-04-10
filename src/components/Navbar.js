import React from "react"

function Navbar() {


function handleClick() {
    if(document.getElementById("inputDiv") !== null) {
        document.getElementById("inputDiv").classList.toggle("fadeOut");
    }
}

    return(
        <div id="navbar">
            <h1>BrewGuru</h1>
            <i 
                className="fas fa-search"
                onClick={handleClick}
            >
            </i>
        </div>
    )
}

export default Navbar