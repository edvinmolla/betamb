export const SET_LOCATION = 'SET_LOCATION';
export const SET_ROOM = 'SET_ROOM';
export const SET_FLOOR = 'SET_FLOOR';

export const setLocation = location => dispatch => {
    dispatch({
        type: SET_LOCATION,
        payload: location,
    });
};

export const setRoom = room => dispatch => {
    dispatch({
        type: SET_ROOM,
        payload: room,
    });
};

export const setFloor = floor => dispatch => {
    dispatch({
        type: SET_FLOOR,
        payload: floor,
    });
};