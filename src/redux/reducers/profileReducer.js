



const profileList = (state = [], action) => {
    console.log(action.payload);
    
    switch (action.type) {
        case 'SET_PROFILE':
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

export default profileList
 