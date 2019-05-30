import React from "react";
import "./TrafficLight.css";

export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			arr: [{ isLight: false }, { isLight: false }, { isLight: false }]
		};
	}

	onClick(index) {
		let array = this.state.arr;
		this.setState(
			(array = [
				{ isLight: false },
				{ isLight: false },
				{ isLight: false }
			])
		);
		array[index].isLight = true;
		this.setState({ arr: array });
	}

	render() {
		let colorArr = ["bg-danger", "bg-warning", "bg-success"];
		let off = { width: 50, height: 50 };
		let on = { width: 50, height: 50, boxShadow: "0 0 40px 20px #fff" };
		return (
			<main className="pt-5">
				<span className="bg-dark p-2 mt-5">
					{this.state.arr.map((el, index) => (
						<div
							key={index}
							className={colorArr[index] + " rounded-circle m-2 "}
							style={this.state.arr[index].isLight ? on : off}
							onClick={this.onClick.bind(this, index)}>
							&nbsp;
						</div>
					))}
				</span>
			</main>
		);
	}
}
