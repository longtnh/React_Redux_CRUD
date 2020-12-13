import { ADD_USER, DELETE_USER, UPDATE_USER } from '../action/user.actions'

const users = [
    {
        id : 1,
        name : 'Truong Ngoc Hai Long',
        username: 'LongTNH'
    },
    {
        id : 2,
        name : 'Tran Van Chuong',
        username: 'ChuongTV'
    },
    {
        id : 3,
        name : 'Tran Huy Vu',
        username: 'VuTH'
    },
    {
        id : 4,
        name : 'Huynh Thi Nhat Uyen',
        username: 'UyenHTN'
    },     
]

const userReducer = (state = users, action) => {
    let newUsers;
    switch(action.type) {
        case ADD_USER: 
            newUsers = [...state];
            // newUsers.push(action.payload);
            // console.log(action.payload.name)

            return [...state, action.payload];
        case DELETE_USER:
            newUsers = [...state];
            newUsers = newUsers.filter(user => user.id !== action.payload)
            return newUsers;
        case UPDATE_USER:
            newUsers = [...state];
            newUsers[action.payload.id - 1] = action.payload
            // let index = -1;
            // const userUpdate = action.payload;
            // for(let i = 0; i < newUsers.length; i++) {
            //     index++;
            //     if(newUsers[i].id === userUpdate.id) {
            //         break;
            //     }
            // }
            // if(index !== -1) {
            //     newUsers[index] = action.payload;
            // }
            return newUsers;
        default:
            return state;    
    }
}
export default userReducer;