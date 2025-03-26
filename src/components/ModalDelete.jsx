const ModalDelete = ({id, name}) => {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Borrar contacto</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                    </div>
                    <div className="modal-body">
                        ¿Desea borrar a: <strong>{name}</strong>?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Borrar contacto</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalDelete