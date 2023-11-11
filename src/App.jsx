import Card from "./components/UI/Card";
import Products from "./components/Products/Products";
import { DatePicker } from "antd";
import trTR from "antd/es/date-picker/locale/tr_TR";
import "dayjs/locale/tr";
import Counter from "./components/Counter";
import Button from "./components/UI/Button";
import { Fragment, useEffect, useState } from "react";
import Modal from "./components/UI/Modal";

function App() {
	const [name, setName] = useState("Rıdvan Eren");
	const [counter, setCounter] = useState(0);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		console.log("Run this after every render");
	}, [counter]);

	return (
		<Fragment>
			{showModal ? <Modal setShowModal={setShowModal}></Modal> : ""}

			<div className="container mx-auto">
				<h1>{name}</h1>
				<h1>{counter}</h1>
				<Card title="Default card title">
					<p>Card content</p>
					<p>Card content</p>
					<p>Card content</p>
				</Card>

				<DatePicker locale={trTR} />
				<Button title="+1" addClass="warning" onClick={() => setCounter(counter + 1)}>
					+1
				</Button>
				<Button title="Change Name" addClass="success" onClick={() => setName(name === "Rıdvan Eren" ? "Mehmet Ali" : "Rıdvan")}>
					Change Name
				</Button>
				<Products setShowModal={setShowModal} />
				<Counter />
				<Button title="Ekle" addClass="success" />
			</div>
		</Fragment>
	);
}

export default App;
