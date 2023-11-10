import Card from "./components/UI/Card";
import Products from "./components/Products/Products";
import { Fragment } from "react";
import { DatePicker } from "antd";
import trTR from "antd/es/date-picker/locale/tr_TR";
import "dayjs/locale/tr";
import Counter from "./components/Counter";
import Button from "./components/UI/Button";

function App() {
	return (
		<div className="container mx-auto">
			{/* <h1>Hello, world!</h1>
			<Card title="Default card title">
				<p>Card content</p>
				<p>Card content</p>
				<p>Card content</p>
			</Card>
			<DatePicker locale={trTR} />
			<button>Ekle</button>*/}
			<Products />
			<Counter />
			<Button title="Ekle" addClass="success" />
		</div>
	);
}

export default App;
