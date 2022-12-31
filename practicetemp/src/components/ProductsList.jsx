import React, { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList({ products, page, setPage, lastPage }) {
	const [formattedProducts, setFormattedProducts] = useState([]);

	useEffect(() => {
		const prodElems = products.map((e) => (
			<Product
				key={e.id}
				title={e.title}
				image={e.image}
				price={e.price}
				category={e.category}
			/>
		));
		console.log(prodElems);
		setFormattedProducts(prodElems);
	}, [products]);

	return (
		<div>
			{formattedProducts}
			<button onClick={(e) => page > 1 && setPage((P) => P - 1)}>
				previous
			</button>
			<h3>{page}</h3>
			<button onClick={(e) => page < lastPage && setPage((P) => P + 1)}>
				next
			</button>
		</div>
	);
}

export default ProductsList;
