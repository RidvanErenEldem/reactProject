function Card(props) {
	console.log(props);
	return (
		<div className="card">
			<div className="card-header">{props.title}</div>
			<div className="card-content">{props.children}</div>
		</div>
	);
}

export default Card;
