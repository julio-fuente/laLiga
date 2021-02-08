import {restFull} from "../assets/utils/utils";

const postLogin = (params) => {
    restFull('/login','POST', params)
}
export {
    postLogin,
}