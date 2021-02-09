import { restFull } from "./BaseService";

const getListUser = () => {
    const response = restFull('/users');
    return response;
}
const getDetailsUser = (idUser) => {
    return restFull(`/users/${idUser}`)
}
const deleteUser = (idUser) => {
    return restFull(`/users/${idUser}`)
}
const putUser = (idUser, params) => {
    return restFull(`/users/${idUser}`, 'PUT', params)
    
}
export {
    getListUser,
    getDetailsUser,
    deleteUser,
    putUser
}


