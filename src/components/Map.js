import React, { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";

function Map(props) {
	const [center, setCenter] = useState({});
	const [hasCenter, setHasCenter] = useState(false);

	useEffect(() => {}, [setCenter]);

	Geocode.setApiKey(process.env.REACT_APP_API_KEY);
	Geocode.setLanguage("en");

	const mapStyles = {
		height: "100vh",
		width: "100%",
	};

	let centerHolder = {};

	//Geocodes coordinates from address if lat and lng not present for brewery in API
	if (!hasCenter) {
		if (!props.lat !== true && props.lng !== true) {
			centerHolder = {
				lat: Number(props.lat),
				lng: Number(props.lng),
			};
			setCenter(centerHolder);
			setHasCenter(true);
		} else {
			Geocode.fromAddress(props.address).then(
				(response) => {
					let { lat, lng } = response.results[0].geometry.location;
					centerHolder = {
						lat: Number(lat),
						lng: Number(lng),
					};
					setCenter(centerHolder);
					setHasCenter(true);
				},
				(error) => {
					console.error(error);
				}
			);
		}
	}

	//Hides map from flow when exit is pressed
	function handleClick() {
		document.getElementById(props.name).style.opacity = "0%";
		document.getElementById(props.name).style.zIndex = "-999";
	}

	return (
		<div id={props.name} className="map">
			<GoogleMap mapContainerStyle={mapStyles} zoom={13} center={center}>
				<Marker position={center} />
			</GoogleMap>
			<i className="fas fa-window-close" onClick={handleClick}></i>
		</div>
	);
}

export default Map;
