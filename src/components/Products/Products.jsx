import ProductItem from "./ProductItem";
import "./Products.css";
import { productData } from "../../productData";
import { useEffect, useState } from "react";
import NewProduct from "./Form/NewProduct";
import { Button } from "antd";

function Products({ setShowModal }) {
	const [name, setName] = useState("Rıdvan Eren");
	const [products, setProducts] = useState(productData);

	const handleClick = (clickName) => setName(clickName);

	const destroyProduct = (id) => {
		setProducts((prevProducts) => {
			return prevProducts.filter((product) => product.id !== id);
		});
	};

	useEffect(() => {
		fetchProductsData();
	}, []);

	function fetchProductsData() {
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((data) => {
				const newProducts = data.map((product) => ({
					id: product.id,
					productTitle: product.title,
					productPrice: product.price,
					imageUrl: product.image,
				}));
				setProducts((prevProducts) => {
					let biggestId = prevProducts.length === 0 ? 1 : prevProducts[prevProducts.length - 1].id + 1;
					newProducts.forEach((product) => {
						product.id = biggestId;
						biggestId++;
					});
					return [...prevProducts, ...newProducts];
				});
			})
			.catch((err) => console.log(err))
			.finally(() => console.log("finally"));
	}

	return (
		<div className="products flex flex-col">
			<NewProduct setShowModal={setShowModal} setProducts={setProducts} />
			<Button onClick={fetchProductsData}>Fetch Products</Button>
			<h2>{name}</h2>
			<div className="products-wrapper gap-4 mt-4">
				{products.map(function (product) {
					return <ProductItem imageUrl={product.imageUrl} productTitle={product.productTitle} productPrice={product.productPrice} key={product.id} id={product.id} click={handleClick} destroyProduct={destroyProduct} />;
				})}
			</div>
		</div>
	);
}

export default Products;
