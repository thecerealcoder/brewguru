import React from "react"

function Navbar() {


function handleClick() {
    document.getElementById("inputDiv").classList.toggle("fadeOut");
    console.log("click")
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