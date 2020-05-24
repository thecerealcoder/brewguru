import React, { useState } from "react";
import NotFound from "./NotFound";
import Brewery from "./Brewery";
import { LoadScript } from "@react-google-maps/api";

function Breweries(props) {
  // function queryParser(query) {
  //   if (query !== undefined) {
  //     query = query.replace(/ /g, "+");
  //     return query;
  //   }
  // }

  return (
    <div>
      {props.breweries.length !== undefined &&
        (props.breweries.length !== 0 ? (
          props.breweries.map((brewery, key) => (
            <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
              <Brewery brewery={brewery} />
            </LoadScript>
          ))
        ) : (
          <NotFound />
        ))}
    </div>
  );
}

export default Breweries;
