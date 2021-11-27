import * as types from './../constants/ActionTypes';

var randomID = require("randomstring");

var findIndex = (tasks,id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index
        }
    });
    return result;
}

var data = JSON.parse(localStorage.getItem('tasks'));

var initialState = data ? data : [];

var myReducer = (state = initialState, action) =>{
    var index = -1; 
    switch(action.type){
        case types.LIST_ALL: 
            return state;
        case types.SAVE_TASK:
            var task = {
                id : action.task.id,
                name : action.task.name,
                status : action.task.status
            }
            if(task.id){
                index = findIndex(state, action.task.id);
                if(index !== -1){
                    state[index] = task;
                }
            } else {
                task.id = randomID.generate();
                state.push(task);
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.UPDATE_STATUS_TASK:
            index = findIndex(state, action.id);
            if(index !== -1){
                state[index] = {
                    ...state[index],
                    status : !state[index].status
                }
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state];
        case types.DELETE_TASK:
            state.forEach((task, index) => {
                if(task.id === action.id){
                    state.splice(index, 1);
                    localStorage.setItem('tasks', JSON.stringify(state));
                }
            });
            return [...state];
        default: return state;
    }
    
}

export default myReducer;