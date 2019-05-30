import React from "react";
import { TrafficLight } from "./TrafficLight";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return <TrafficLight />;
	}
}
