import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, TablePagination, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import DetailsIcon from '@material-ui/icons/Details';
import EditIcon from '@material-ui/icons/Edit';
import Buttons from '../../components/Buttons';
import { deleteUser, getListUser } from "../../services/ListUserService";


const List = () => {
    const [rowData, setTableData] = useState([])

    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then((response) => {
                setTableData(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, []);

    const deleteUser = (User) => {

    }
    const detailsUser = (User) => {

    }
    const editUser = (User) => {

    }
    return (
        <>
            <TableContainer>

                <h2>Lista de Usuarios Registrados</h2>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Avatar</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Nombre</TableCell>
                            <TableCell align="center">Apellido</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowData.map(row =>
                        (<TableRow key={row.id}>
                            <TableCell align="center">
                                <Avatar alt={row.first_name} src={row.avatar} />
                            </TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.first_name}</TableCell>
                            <TableCell align="center">{row.last_name}</TableCell>
                            <TableCell>
                                <IconButton aria-label="delete" onClick={() => deleteUser.bind(this)(row)}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                            <TableCell>
                                <IconButton aria-label="detail" onClick={() => detailsUser.bind(this)(row)}>
                                    <DetailsIcon />
                                </IconButton>
                            </TableCell>
                            <TableCell>
                                <IconButton aria-label="edit" onClick={() => editUser.bind(this)(row)}>
                                    <EditIcon />
                                </IconButton>
                            </TableCell>

                        </TableRow>
                        ))}
                    </TableBody>
                    {/*  <TablePagination
                    // rowsPerPageOptions={[5, 10, 25]}
                    // component="div"
                    //count={row.length}
                    //rowsPerPage={rowsPerPage}
                    //page={page}
                    //onChangePage={handleChangePage}
                    // onChangeRowsPerPage={handleChangeRowsPerPage}
                    /> */}
                </Table>
            </TableContainer>
        </>
    )
}
export default List