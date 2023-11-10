import { useEffect } from "react";
import Button from "./Button";
import "./Modal.css";

const Modal = ({ setShowModal }) => {
	useEffect(() => {
		// This function will run when the component is mounted
		return () => {
			console.log("Modal unmounted");
		};
	}, []);

	return (
		<div className="modal-wrapper absolute bg-gray-200  p-10">
			<h3>Input boş olamaz</h3>
			<p>Lütfen tüm inputları dolduralım</p>
			<Button title="Kapat" addClass="danger" onClick={() => setShowModal(false)} />
		</div>
	);
};

export default Modal;
