import React from 'react';
import Proptype from 'prop-types';
import WarningIcon from '@material-ui/icons/Warning';
import * as constant from '../../consts/consts';
import { Modal } from 'react-bootstrap';
const ModalAlert = ({ show, onHide, onDelete }) => {

    return (
        <Modal
            show={show}
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <WarningIcon className='iconAlert' /> Advertencia
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{constant.alertDeleteUserDescription}</p>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onHide}>Volver</button>
                <button type="button" className="btn btn-primary" onClick={onDelete}>Aceptar </button>
            </Modal.Footer>
        </Modal>
    )
}

ModalAlert.prototype = {
    show: Proptype.bool.isRequired,
    onDelete: Proptype.func.isRequired,
    onHide: Proptype.func.isRequired
}
export default ModalAlert


