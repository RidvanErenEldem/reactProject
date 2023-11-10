import ProductItem from "./ProductItem";
import "./Products.css";
import { productData } from "../../productData";
import { useState } from "react";
import NewProduct from "./Form/NewProduct";

function Products() {
	const [name, setName] = useState("Rıdvan Eren");
	const [products, setProducts] = useState(productData);

	const handleClick = (clickName) => setName(clickName);

	function handleNewProduct(productToAdd) {
		setProducts([...products, { id: products.length + 1, productTitle: productToAdd.name, productPrice: productToAdd.price, imageUrl: productToAdd.image }]);
	}

	return (
		<div className="products inline-flex flex-col">
			<NewProduct newProduct={handleNewProduct} />
			<h2>{name}</h2>
			<div className="prodcuts-wrapper flex gap-4 mt-4">
				{products.map(function (product) {
					return <ProductItem imageUrl={product.imageUrl} productTitle={product.productTitle} productPrice={product.productPrice} key={product.id} click={handleClick} />;
				})}
			</div>
		</div>
	);
}

export default Products;
