import { useEffect } from "react";

function Modal({ setShowModal }) {
	useEffect(() => {
		// clean-up function
		return () => {
			console.log("modal kapatıldı.");
		};
	}, []);

	return (
		<div className=" absolute w-[100%] h-[100%] flex justify-center items-center top-0 ">
			<div className="absolute bg-red-300 opacity-40 w-[100%] h-[100%]" onClick={() => setShowModal(false)}></div>
			<div className="modal-wrapper bg-gray-200 p-10 relative z-50">
				<h3>Inputlar boş olamaz</h3>
				<p>Lütfen tüm inputların dolu olduğundan emin olalım.</p>
				<button className="bg-red-600 text-white p-3 rounded-md mt-10" onClick={() => setShowModal(false)}>
					Kapat
				</button>
			</div>
		</div>
	);
}

export default Modal;
