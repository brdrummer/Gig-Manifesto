import { createStore, combineReducers, applyMiddleware } from 'redux';



const gigList = (state = [], action) => {
    console.log(action.payload);
    
    switch (action.type) {
        case 'SET_GIGS':
            return action.payload;
        default:
            return state;
    }
};

// const editItem = (state = {}, action) => {
//     switch(action.type){
//         case 'ADD_EDIT_ITEM':
//             return action.payload;
//         default:
//             return state;
//     }
// }

export default combineReducers({
    gigList,
})
 