import "./ProductItem.css";
import Button from "../UI/Button";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext.jsx";

function ProductItem({ productTitle, productPrice, imageUrl, id, destroyProduct }) {
	const { setCartItems } = useContext(CartContext);

	const addToCart = () => {
		const newCartItem = {
			id: id,
			productTitle: productTitle,
			productPrice: productPrice,
			imageUrl: imageUrl,
		};
		setCartItems((prevCartItems) => {
			return [...prevCartItems, newCartItem];
		});
	};

	const [name, setName] = useState(productTitle);
	return (
		<div className="product-item">
			<img src={imageUrl} alt="" className="product-image" />
			<div className="product-info p-3">
				<strong className="product-title">{name}</strong>
				<span className="product-price">{productPrice}₺</span>
				<div className="button-container">
					<Button title="Sil" addClass="danger" onClick={() => destroyProduct(id)} />
					<Button title="Sepete Ekle" addClass="success" onClick={addToCart} />
					<Button
						title="Change Title"
						addClass="warning"
						onClick={() => {
							setName(name === productTitle ? "Mehmet Ali" : productTitle);
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default ProductItem;
