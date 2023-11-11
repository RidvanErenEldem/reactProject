import ProductItem from "./ProductItem";
import "./Products.css";
import { productData } from "../../productData";
import { useEffect, useState } from "react";

function Products() {
	const [products, setProducts] = useState(productData);
	const [isLoaded, setIsLoaded] = useState(false);

	const destroyProduct = (id) => {
		if (!window.confirm("Silmek istediğinizden emin misiniz?")) return;
		setProducts((prevProducts) => {
			return prevProducts.filter((product) => product.id !== id);
		});
	};

	useEffect(() => {
		fetchProductsData();
	}, []);

	async function fetchProductsData() {
		setIsLoaded(false);
		try {
			const response = await fetch("https://fakestoreapi.com/products");
			const data = await response.json();
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
		} catch (err) {
			console.log(err);
		} finally {
			console.log("finally");
			setIsLoaded(true);
		}
	}

	return (
		<div className="products flex flex-col">
			{/* <NewProduct setShowModal={setShowModal} setProducts={setProducts} />
			<Button onClick={fetchProductsData}>Fetch Products</Button>
			<h2>{name}</h2> */}
			<h1 className="text-center text-3xl font-bold">Ürün Listesi</h1>
			{isLoaded ? (
				<div className="products-wrapper gap-4 mt-4">
					{products.map(function (product) {
						return <ProductItem imageUrl={product.imageUrl} productTitle={product.productTitle} productPrice={product.productPrice} key={product.id} id={product.id} destroyProduct={destroyProduct} />;
					})}
				</div>
			) : (
				<p>Loading products...</p>
			)}
		</div>
	);
}

export default Products;
