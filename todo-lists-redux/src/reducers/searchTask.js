import * as types from '../constants/ActionTypes';

var initialState = {
                    keyword : ''
                };

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.SEARCH_TASK:
            return {
                keyword : action.keyword
            };
        default: return state;
    }
    
}

export default myReducer;