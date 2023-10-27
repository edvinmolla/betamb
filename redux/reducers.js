import { SET_LOCATION, SET_ROOM, SET_FLOOR } from './actions';

const initialState = {
    location: 'Royce Hall',
    room: '152',
    floor: '1',
    age: 0,
}

function locationReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOCATION:
            return { ...state, location: action.payload };
        case SET_ROOM:
            return { ...state, room: action.payload };
        case SET_FLOOR:
            return { ...state, floor: action.payload };
        default:
            return state;
    }
}

export default locationReducer;