import * as constant from '../consts/url'

const restFull = (url, method, param) => {
    const requestOptions = {
        method: method ? method : 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(param)
    };
    fetch(constant.URLBASE + url, requestOptions)
        .then(res => res.json())
        .then((response) => {
            return response
        })
        .catch((error)=>{
            console.error(error)
        })
}
export {
    restFull
}