import * as actionTypes from '../actions/search'

const initialState={
    startDate:null,
    endDate:null,
    focusedInput:null
}

const reducer=(state=initialState,action)=>{
    // if(action.type===actionTypes.CHANGE_DATES){
    //     console.log('change dates')
    //     return {
    //         ...state,
    //         startDate:action.startDate,
    //         endDate:action.endDate
    //     }
    // }
    // if(action.type===actionTypes.FOCUS_INPUT){
    //     console.log('focus input')
    //     return {
    //         ...state,
    //         focusedInput:action.focusedInput
    //     }
    // }
    return state
}

export default reducer 