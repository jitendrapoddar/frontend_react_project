import { UPDATE_CLAIM } from "./actionType";

export function updateClaim(data){
    console.log('update claim action', data)
    return(dispatch)=> {
        dispatch({
            type: UPDATE_CLAIM,
            payload: data
        })
    }
}