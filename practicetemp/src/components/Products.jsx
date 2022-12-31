import React, { useEffect, useRef, useState } from "react";
import Form from "./Form";
import ProductsList from "./ProductsList";

function Products() {
	const [products, setProducts] = useState([]);
	const [page, setPage] = useState(1);
	const lastPage = useRef(0);

	useEffect(() => {
		const getData = async () => {
			const res = await fetch(
				`http://localhost:3080/products?_page=${page}&_limit=2&_sort=price&_order=desc`
			);

			const total = res.headers.get("X-Total-Count");

			lastPage.current = Math.ceil(total / 2);

			const data = await res.json();
			setProducts(data);
		};
		getData();
	}, [page]);

	return (
		<div>
			<Form
				setProducts={setProducts}
				page={page}
			/>
			<ProductsList
				products={products}
				setPage={setPage}
				page={page}
				lastPage={lastPage.current}
			/>
		</div>
	);
}

export default Products;
