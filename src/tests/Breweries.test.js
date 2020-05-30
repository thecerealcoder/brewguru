import React from "react";
import ReactDOM from "react-dom";
import Breweries from "../components/Breweries.js";
import { queryParser } from "../components/Utils.js";
import { shallow } from "enzyme";

const brewery = {
	data: "data",
	street: "fake avenue",
};

describe("Breweries component", () => {
	test("Renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<Breweries brewery={brewery} />, div);
	});

	test("Correctly adds + to spaces for query", () => {
		expect(queryParser("testing queryParser")).toBe("testing+queryParser");
	});

	test("Displays Google Maps background", () => {
		const wrapper = shallow(<Breweries brewery={brewery} />);
		const button = wrapper.find("#location");
		button.simulate("click");
		expect(document.body.style.backgroundImage).toEqual(`url(https://maps.googleapis.com/maps/api/staticmap?center=${queryParser(brewery.street)}&zoom=13&markers=color:red%7Clabel%7C${queryParser(brewery.street)}&size=2560x1440&key=${process.env.REACT_APP_API_KEY})`);
	});
});
