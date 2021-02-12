
const initialState = { user:{avatar: "", email: "", first_name: "", idUser: 0, last_name: "" } };

export default (state = initialState, action) => {
    if (action.type === 'SELECT_USER') {
        return {
            ...state,
            user: action.payload
        }
    }
    return state
};
export const getSaveUser = state => state.userReducer.user