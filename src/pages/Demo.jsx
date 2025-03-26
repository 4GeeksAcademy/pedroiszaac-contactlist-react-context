// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useState } from "react";
import { crearContactos } from "../store";

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  const agregarContacto = async (e) => {
    e.preventDefault()
    console.log(name, address, phone, email)
    let nuevoContacto = {
      "name": name,
      "phone": phone,
      "email": email,
      "address": address,
    }
    let resp = await crearContactos(nuevoContacto, dispatch)
    console.log (resp)
  }

  return (
    <div className="container">
      <h1>Agregar contactos</h1>
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
      <button className="btn btn-success mx-2" onClick={(e)=>agregarContacto(e)}>Agregar contacto</button>

      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
