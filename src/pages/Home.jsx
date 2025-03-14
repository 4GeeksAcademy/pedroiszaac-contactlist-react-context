import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { obtenerContactos } from "../store.js";
import Card from "../components/Card.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		obtenerContactos(dispatch);
	}, []);

	return (
		<div className="text-center mt-5">
				{store.contacts.map((value, index) => {

					return (
						<Card
						key = {value.id}
						name = {value.name}
						phone = {value.phone}
						address = {value.address}
						email = {value.email}
						id = {value.id}
						/>
					)
					//<li key={value.id}> {value.name} </li>
				})}
		</div>
	);
}; 