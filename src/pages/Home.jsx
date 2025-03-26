import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { obtenerContactos } from "../store.js";
import Card from "../components/Card.jsx";
import ModalDelete from "../components/ModalDelete.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const [showModalDelete, setShowModalDelete] = useState({
		showModal: false,
		id: undefined,
		name: undefined,

	})

		useEffect(() => {
			obtenerContactos(dispatch);
		}, []);

	return (
		<div className="text-center mt-5">
			{store.contacts.map((value, index) => {

				return (
					<Card
						key={value.id}
						name={value.name}
						phone={value.phone}
						address={value.address}
						email={value.email}
						id={value.id}
						onDelete={()=>setShowModalDelete({
							showModal: true,
							id: value.id, 
							name: value.name,
						})}
					/>
				)
				//<li key={value.id}> {value.name} </li>
			})}
			<ModalDelete
			id = {showModalDelete.id}
			name = {showModalDelete.name}
			showModal = {showModalDelete.showModal}
			onClose = {()=>setShowModalDelete({showModal:false})}
			/>

		</div>
	);
}; 