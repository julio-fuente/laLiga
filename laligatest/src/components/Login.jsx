import React from 'react'
import { Formik, Field, Form, withFormik } from "formik";
import axios from 'axios';
import '../assets/styles/modals.scss'
import { toast } from 'react-toastify';
import { Modal } from 'react-bootstrap';


const Login = ({ handleSubmit, errors, show, onHide }) => {

    const Send = (value) => {
        axios.post(`https://reqres.in/api/login`, value)
            .then((response) => {
                toast.success(`Correcto token:${response.data.token}`, {
                    position: "top-center",
                    autoClose: 5000,
                });
                onHide()
            })
            .catch((error) => {
                toast.error(error.response.data.error, {
                    position: "top-center",
                    autoClose: 5000,
                });
            })
    }
    const closeButton =()=>{
        onHide()
    }
    return (
        <Modal show={show} id='login' centered>
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    Acceder
             </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={{
                        password: '',
                        email: ''
                    }}
                    onSubmit={(values) => {
                        Send(values);
                    }}
                >
                    <Form>
                        <div className="form-floating mb-3">
                            <Field
                                className="form-control"
                                name="email"
                                type="email"
                                required
                            />
                            <label htmlFor="floatingInput" className="form-label" > Email </label>
                        </div>
                        <div className="form-floating mb-3">
                            <Field
                                className="form-control"
                                type="password"
                                name="password"
                                required
                            />
                            <label htmlFor="floatingInput" >Password</label>
                        </div>
                        <div className="mb-3" />
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onHide}>Cerrar</button>
                            <button type="submit" className="btn btn-primary" >Enviar</button>
                        </div>
                    </Form>
                </Formik>
            </Modal.Body>
        </Modal>
    );
}

export default withFormik({
    validate(values) {
    },
    handleSubmit(values, formikBag) {

    }
})(Login)
