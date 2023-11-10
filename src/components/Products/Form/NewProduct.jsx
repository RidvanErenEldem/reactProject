import { useState } from "react";

export default function NewProduct(props) {
	const [product, setProduct] = useState({ name: "", price: "", image: "" });

	function handleSubmit(event) {
		event.preventDefault();
		console.log(`Name: ${product.name} Price: ${product.price} Image: ${product.image}`);
		props.newProduct(product);
	}

	function handleChange(event) {
		const { name, value } = event.target;
		setProduct((prevProduct) => {
			return {
				...prevProduct,
				[name]: value,
			};
		});
	}

	return (
		<form className="product-form mt-4 flex gap-x-2" onSubmit={handleSubmit}>
			<div className="product-form-input inline-flex flex-col">
				<label htmlFor="title" className="text-gray-700 font-bold mb-2">
					Ürün Adı
				</label>
				<input onChange={handleChange} type="text" id="title" name="name" placeholder="Ürün Adı Giriniz ..." className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
			</div>
			<div className="product-form-input inline-flex flex-col">
				<label htmlFor="price" className="text-gray-700 font-bold mb-2">
					Ürün Fiyatı
				</label>
				<input onChange={handleChange} type="text" id="price" name="price" placeholder="Ürün Fiyatı Giriniz ..." className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
			</div>
			<div className="product-form-input inline-flex flex-col">
				<label htmlFor="picture" className="text-gray-700 font-bold mb-2">
					Ürün Görseli
				</label>
				<input onChange={handleChange} type="text" id="picture" name="image" placeholder="Ürün Görseli Giriniz ..." className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
			</div>
			<button className="border bg-green-400 text-white w-20 rounded-md" type="submit">
				Ekle
			</button>
		</form>
	);
}
