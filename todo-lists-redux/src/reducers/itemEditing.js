import * as types from '../constants/ActionTypes';

var initialState = {};

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.EDIT_TASK_ITEM:
            return action.task;
        case types.CLEAR_FORM:
            var taskEmpty ={
                id : '',
                name : '',
                status : true
            }
            state = taskEmpty;            
            return state;
        default: return state;
    }
    
}

export default myReducer;