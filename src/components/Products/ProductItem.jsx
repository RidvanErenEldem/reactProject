import "./ProductItem.css";
import Button from "../UI/Button";
import { useState } from "react";

function ProductItem(props) {
	const addToCart = () => {
		props.addToCart({
			title: props.productTitle,
			price: props.productPrice,
			id: props.id,
			image: props.imageUrl,
		});
	};

	const [name, setName] = useState(props.productTitle);
	return (
		<div className="product-item">
			<img src={props.imageUrl} alt="" className="product-image" />
			<div className="product-info p-3">
				<strong className="product-title">{name}</strong>
				<span className="product-price">{props.productPrice}₺</span>
				<div className="button-container">
					<Button title="Sil" addClass="danger" onClick={() => props.destroyProduct(props.id)} />
					<Button title="Sepete Ekle" addClass="success" onClick={addToCart} />
					<Button
						title="Change Title"
						addClass="warning"
						onClick={() => {
							setName(name === props.productTitle ? "Mehmet Ali" : props.productTitle);
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default ProductItem;
