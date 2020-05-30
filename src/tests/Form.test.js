import React from "react";
import ReactDOM from "react-dom";
import Form from "../components/Form.js";
import { shallow } from "enzyme";

describe("Found component", () => {
	it("Renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<Form />, div);
	});

	it("Search bar onChange value is accurate", () => {
		document.body.innerHTML = "<div>" + '  <div id="inputDiv" ></div>' + "</div>";

		const wrapper = shallow(<Form />);
		const form = wrapper.find("#searchBar");
		const inputDiv = document.getElementById("inputDiv");

		form.props().onChange({
			target: {
				value: "Testing",
			},
		});
		expect(wrapper.find("#searchBar").props().value).toEqual("Testing");

		form.simulate("keypress", { key: "Enter" });

		expect(inputDiv.classList.contains("fadeOut")).toEqual(true);
		expect(document.body.classList.contains("found")).toEqual(true);
	});
});
