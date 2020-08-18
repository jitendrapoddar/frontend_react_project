import { combineReducers } from 'redux'
import { UPDATE_CLAIM } from '../action/actionType'

const initialState = {
    claims: {
            prefix: 'Mr.',
            firstName: "Jitendra",
            middleName: "",
            lastName: "Kumar",
            suffix: "Poddar",
            dob: "1993-08-01" ,
            gender : "Male",
            empid:"1606829",
            address:"Gachibowli flyover, behind MAharaja Hotel",
            city:"Hyderabad",
            state:"Telangana State",
            zip:"500032",
            phone:"790-337-4302",
            doh: "2020-12-25",
            rtw: "2020-08-20",
            salary: 90000,
            fda:"2020-08-01",
        },
    loadingClaims:true,
    addingClaims:false,
   
}

const claimReducer = (state = initialState, action) => {
    console.log('in reducer', action.payload)
    console.log("###",state.claims)

    switch(action.type){
        case UPDATE_CLAIM:
            return Object.assign({}, state, {
                addingClaims:true,
                claims: state.claims=action.payload
                
            })

        default: return state
    }
}

const reducer = combineReducers({
    main: claimReducer,
})

export default reducer


