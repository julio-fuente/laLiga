import React from 'react';
import { connect } from 'react-redux';
import { getSaveUser } from '../../store/User/reducer';
import Proptype from 'prop-types';
import { Formik, Field, Form, withFormik } from "formik";
import { Modal } from 'react-bootstrap';

const ModalEdit = ({ getSaveUser, show, onHide, upDateUser }) => {
    const user = getSaveUser

    return (
        <Modal
            show={show}
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modificar Usuario
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={{
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email
                    }}
                    onSubmit={(values) => {
                        values['id'] = user.id;
                        upDateUser(values);
                        onHide();
                    }}
                >
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="first_name" className="form-label">Nombre </label>
                            <Field type="text" className="form-control" name="first_name" />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="form-label">Apellido </label>
                            <Field type="text" className="form-control" name="last_name" />
                        </div>

                        <div>
                            <label htmlFor="email" className="form-label" >Email </label>
                            <Field
                                className="form-control"
                                name="email"
                                type="email"
                            />
                        </div>
                        <div className="mb-3" />
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onHide}>Cerrar</button>
                            <button type="submit" className="btn btn-primary" >Modificar</button>
                        </div>
                    </Form>
                </Formik>
            </Modal.Body>
        </Modal>
    )
}
const mapStateToProps = (state) => {
    return {
        getSaveUser: getSaveUser(state)
    }
}
ModalEdit.prototype = {
    show: Proptype.bool.isRequired,
    onHide: Proptype.func.isRequired,
    upDateUser: Proptype.func.isRequired
}
export default connect(mapStateToProps)(ModalEdit)