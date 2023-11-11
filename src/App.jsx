import Products from "./components/Products/Products";

import "dayjs/locale/tr";

import { Fragment, useState } from "react";
import Modal from "./components/UI/Modal";
import Header from "./components/UI/Header";

function App() {
	const [showModal, setShowModal] = useState(false);

	return (
		<Fragment>
			<Header />
			{showModal ? <Modal setShowModal={setShowModal}></Modal> : ""}

			<div className="container mx-auto">
				{/* <h1>{name}</h1>
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
				</Button> */}
				<Products />
				{/* <Counter />
				<Button title="Ekle" addClass="success" /> */}
			</div>
		</Fragment>
	);
}

export default App;
