import React from 'react'
import { Avatar } from '@material-ui/core';
import { connect } from 'react-redux';
import { getSaveUser } from '../../store/User/reducer'
import Proptype from 'prop-types';
import { Modal } from 'react-bootstrap';
import '../../assets/styles/modals.scss'

const ModalDetail = ({ show, getSaveUser, onHide }) => {
    const user = getSaveUser


    return (

        <Modal
            show={show}
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Detalles de Usuario
             </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Avatar className="form-label mt-3" alt={user.first_name} src={user.avatar} />
                <div className="form-label mt-3" >Nombre: {user.first_name}</div>
                <div className="form-label">Apellido: {user.last_name}</div>
                <div className="form-label">Email: {user.email}</div>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onHide}>Volver</button>
            </Modal.Footer>
        </Modal>
    )
}
ModalDetail.prototype = {
    onClose: Proptype.func.isRequired
}
const mapStateToProps = (state) => {
    return {
        getSaveUser: getSaveUser(state)
    }
}
export default connect(mapStateToProps)(ModalDetail) 