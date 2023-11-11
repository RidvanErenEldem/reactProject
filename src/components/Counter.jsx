import { Button } from "antd";
import { useState } from "react";
import { red, cyan, gold } from "@ant-design/colors";

function Counter() {
	console.log(red);
	const [count, setCount] = useState(0);

	const [name, setName] = useState("Ahmet");

	const changeName = () => {
		setName(name === "Ahmet" ? "Mehmet" : "Ahmet");
	};

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div style={{ textAlign: "center", marginTop: "50px" }}>
			<h3>{name}</h3>
			<h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Count: {count}</h1>
			<div>
				<Button type="primary" className="" onClick={increment} style={{ marginRight: "10px", backgroundColor: `${cyan[5]}` }}>
					Increment
				</Button>
				<Button type="primary" onClick={decrement} style={{ marginRight: "10px", backgroundColor: `${red[5]}` }}>
					Decrement
				</Button>
				<Button type="primary" onClick={changeName} style={{ backgroundColor: `${gold[5]}` }}>
					Ad Değiştir
				</Button>
			</div>
		</div>
	);
}

export default Counter;
