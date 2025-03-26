const Card = ({ id, name, phone, email, address, onDelete }) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://img.freepik.com/vector-gratis/circulo-azul-usuario-blanco_78370-4707.jpg" className="img-fluid rounded-start" alt={name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">{name}</h5>
                                <div className="div">
                                    <button className="btn btn-outline-info mx-1"><i className="fa fa-pen"></i></button>
                                    <button className="btn btn-outline-danger mx-1" onClick={()=>onDelete()} data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-trash"></i></button>
                                </div>
                            </div>
                            <p className="card-text">📍 Address: {address}</p>
                            <p className="card-text">📞 Phone: {phone}</p>
                            <p className="card-text">📩 Email: {email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card