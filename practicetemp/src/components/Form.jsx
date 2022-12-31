import { useState } from "react";

function Form({ setProducts, page }) {
	const [formData, setFormData] = useState({
		title: "",
		gender: "male",
		price: 0,
		category: "",
		image: "https://picsum.photos/200",
	});

	const inputHandler = (e) => {
		console.log(formData);
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		const res = await fetch("http://localhost:3080/products", {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const resp = await fetch(
			`http://localhost:3080/products?_page=${page}&_limit=2`
		);
		const data = await resp.json();

		setProducts(data);
	};

	return (
		<form
			onSubmit={submitHandler}
			style={{
				display: "flex",
				gap: "1rem",
				flexDirection: "column",
				maxWidth: "30rem",
				margin: "auto",
			}}>
			<input
				type='text'
				name='title'
				placeholder='Enter Title'
				onChange={inputHandler}
			/>
			<select
				name='gender'
				id='gender'
				onChange={inputHandler}>
				<option value='male'>Male</option>
				<option value='female'>Female</option>
			</select>
			<input
				type='number'
				name='price'
				placeholder='Enter Price'
				onChange={inputHandler}
			/>
			<input
				type='text'
				name='category'
				placeholder='Enter Category'
				onChange={inputHandler}
			/>
			<input
				type='text'
				name='image'
				placeholder='Enter Image URL'
				onChange={inputHandler}
			/>
			<input
				type='submit'
				value={"submit"}
			/>
		</form>
	);
}

export default Form;
