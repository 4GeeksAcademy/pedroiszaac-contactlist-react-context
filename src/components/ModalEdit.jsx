import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useEffect, useState } from "react";
import{modificarContactos} from "../store.js"

const ModalEdit = ({id, contact}) => {
    const { store, dispatch } = useGlobalReducer()
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const modificarContacto = async (e) => {
        e.preventDefault()
        console.log(name, address, phone, email)
        let nuevoContacto = {
            "name": name,
            "phone": phone,
            "email": email,
            "address": address,
        }
        let resp = await modificarContactos(nuevoContacto, dispatch, id)
        console.log(resp)
        if (resp) {
            alert("Contacto modificado exitosamente")
            navigate("/")
        } else {
            alert("Algo salió mal")
        }
    }

    const cargarInfo=()=>{
        setName(contact?.name)
        setAddress(contact?.address)
        setPhone(contact?.phone)
        setEmail(contact?.email)
    }

    useEffect(()=>{
        cargarInfo()
    },[id])
    return (
        <div class="modal fade" id="exampleModalEdit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Editar contacto</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Name:</span>
                            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Address:</span>
                            <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Phone:</span>
                            <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Email:</span>
                            <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-success" onClick={(e)=>modificarContacto(e)} data-bs-dismiss="modal">Editar contacto</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalEdit