import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar.js";
import { shallow } from "enzyme";

describe("Navbar component", () => {
	it("Renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<Navbar />, div);
	});

	test("Search Icon correctly fades inputDiv in and out", () => {
		document.body.innerHTML = "<div>" + '  <div id="inputDiv" ></div>' + "</div>";

		const wrapper = shallow(<Navbar />);
		const searchIcon = wrapper.find(".fa-search");
		const inputDiv = document.getElementById("inputDiv");

		searchIcon.simulate("click");
		expect(inputDiv.classList.contains("fadeOut")).toEqual(true);
		searchIcon.simulate("click");
		expect(inputDiv.classList.contains("fadeOut")).toEqual(false);
	});
});
