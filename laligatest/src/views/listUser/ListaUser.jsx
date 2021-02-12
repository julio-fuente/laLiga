import React, { useState, useEffect } from 'react';
import { IconButton, Avatar } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from 'react-redux';
import { saveUser } from '../../store/User/action'
import { getSaveUser } from '../../store/User/reducer'
import ModalDetail from "./ModalDetail";
import ModalAlert from './ModalAlert'
import ModalEdit from './ModalEdit';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../../assets/styles/listaUser.scss';



const List = ({ getSaveUser, saveUser }) => {
    const [rowData, setTableData] = useState([])
    const [openAlert, setOpenAlert] = useState(false)
    const [openDetails, setOpenDetails] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)

    useEffect(() => {
        getUsers()
    }, []);

    const deleteUser = (user) => {
        getOneUser(user)
        setOpenAlert(true)
    };

    const detailsUser = (user) => {
        getOneUser(user)
        setOpenDetails(true)
    };

    const editUser = (user) => {
        getOneUser(user)
        saveUser(user)
        setOpenEdit(true)
    };

    const getOneUser = (user) => {

        axios.get(`https://reqres.in/api/users/${user.id}`)

            .then((response) => {
                saveUser(response.data.data)
            })
            .catch((error) => {
                toast.error('Error', {
                    position: "top-center",
                    autoClose: 5000,
                });
                setOpenDetails(false)
            })
    };

    const putUser = (userData) => {

        axios.put(`https://reqres.in/api/users/${userData.id}`, userData)
            .then((response) => {
                getUsers();
                toast.success(`Usuario modificado correctamente`, {
                    position: "top-center",
                    autoClose: 5000,
                });
            })
            .catch((error) => {
                toast.error('Error', {
                    position: "top-center",
                    autoClose: 5000,
                });
                setOpenEdit(false)
            })

    };

    const getUsers = () => {
        fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then((response) => {
                setTableData(response.data);
            })
            .catch((error) => {
                toast.error(error.response.data.error, {
                    position: "top-center",
                    autoClose: 5000,
                });
            });
    };

    const deleteOneUser = () => {
        const user = getSaveUser;
        axios.delete(`https://reqres.in/api/users/${user.id}`)
            .then((response) => {
                toast.success(`Usuario borrado correctamente`, {
                    position: "top-center",
                    autoClose: 5000,
                });
            })
            .catch((error) => {
                toast.error('Error', {
                    position: "top-center",
                    autoClose: 5000,
                });
            })
        setOpenAlert(false)
        getUsers();
    };

    return (
        <div>
            <h2>Lista de Usuarios Registrados</h2>
            <table className="table table-hover ">
                <thead className="align-items-center">
                    <tr>
                        <th scope="col">Avatar</th>
                        <th scope="col">Email</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {rowData.map(row => (
                        <tr key={row.id}>
                            <th scope="row"><Avatar alt={row.first_name} src={row.avatar} /></th>
                            <td>{row.first_name}</td>
                            <td>{row.email}</td>
                            <td>{row.last_name}</td>
                            <td>
                                <IconButton aria-label="detail" onClick={() => detailsUser.bind(this)(row)}>
                                    <InfoIcon />
                                </IconButton>
                                <IconButton aria-label="delete" onClick={() => deleteUser.bind(this)(row)}>
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton aria-label="edit" onClick={() => editUser.bind(this)(row)}>
                                    <EditIcon />
                                </IconButton>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <ModalAlert show={openAlert} onHide={() => setOpenAlert(false)} onDelete={() => deleteOneUser()} ></ModalAlert>
            <ModalDetail show={openDetails} onHide={() => setOpenDetails(false)} ></ModalDetail>
            <ModalEdit show={openEdit} onHide={() => setOpenEdit(false)} upDateUser={(value) => putUser(value)}></ModalEdit>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        getSaveUser: getSaveUser(state)
    }
}
export default connect(mapStateToProps, { saveUser })(List)