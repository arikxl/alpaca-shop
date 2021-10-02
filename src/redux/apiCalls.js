import { loginFailure, loginStart } from "./userRedux"

export const login =async (dispatch, user) => {
    dispatch(loginStart());
    try {

    } catch {
        dispatch(loginFailure())
    }

}