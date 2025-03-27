import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { obtenerContactos } from "../store.js";
import Card from "../components/Card.jsx";
import ModalDelete from "../components/ModalDelete.jsx";
import ModalEdit from "../components/ModalEdit.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const [showModalDelete, setShowModalDelete] = useState({
		showModal: false,
		id: undefined,
		name: undefined,

	})

	const [showModalEdit, setShowModalEdit] = useState({
		showModal: false,
		id: undefined,
		contact: undefined,

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
						onDelete={() => setShowModalDelete({
							showModal: true,
							id: value.id,
							name: value.name,
						})}
						onEdit={() => setShowModalEdit({
							showModal: true,
							id: value.id,
							contact: value,
						})}
					/>
				)
				//<li key={value.id}> {value.name} </li>
			})}
			<ModalDelete
				id={showModalDelete.id}
				name={showModalDelete.name}
				showModal={showModalDelete.showModal}
				onClose={() => setShowModalDelete({ showModal: false })}
			/>
			<ModalEdit
				id={showModalEdit.id}
				contact={showModalEdit.contact}
				showModal={showModalEdit.showModal}
				onClose={() => setShowModalEdit({ showModal: false })}
			/>

		</div>
	);
}; 