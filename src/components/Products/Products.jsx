import ProductItem from "./ProductItem";
import "./Products.css";
import { productData } from "../../productData";
import { useState } from "react";
import NewProduct from "./Form/NewProduct";

function Products({ setShowModal }) {
	const [name, setName] = useState("Rıdvan Eren");
	const [products, setProducts] = useState(productData);

	const handleClick = (clickName) => setName(clickName);

	const destroyProduct = (id) => {
		setProducts((prevProducts) => {
			return prevProducts.filter((product) => product.id !== id);
		});
	};

	return (
		<div className="products inline-flex flex-col">
			<NewProduct setShowModal={setShowModal} setProducts={setProducts} />
			<h2>{name}</h2>
			<div className="prodcuts-wrapper flex gap-4 mt-4">
				{products.map(function (product) {
					return <ProductItem imageUrl={product.imageUrl} productTitle={product.productTitle} productPrice={product.productPrice} key={product.id} id={product.id} click={handleClick} destroyProduct={destroyProduct} />;
				})}
			</div>
		</div>
	);
}

export default Products;
