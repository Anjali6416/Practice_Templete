import React from "react";

function Product({ category, title, image, price }) {
	return (
		<div style={{ background: "rgba(0,0,0,0.25)", margin: "1rem 0" }}>
			<img
				src={image}
				alt='title'
			/>
			<h2>{title}</h2>
			<p>{price}</p>
			<p>{category}</p>
		</div>
	);
}

export default Product;
