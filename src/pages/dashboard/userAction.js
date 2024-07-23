import {getUserPending, getUserSuccess, getUserFail} from './userSlice.js'
import {fetchUser} from '../../api/userApi.js'
export const getUserProfile = () => async (dispatch) => {
    try {
        dispatch(getUserPending())

        const result = await fetchUser()
        
        if(result.user && result.user._id) {
            dispatch(getUserSuccess(result.user)); 
        } else {
            dispatch(getUserFail("User not found"))
        }

    } catch(error) {
        dispatch(getUserFail(error.message))
    }
}