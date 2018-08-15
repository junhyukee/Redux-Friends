import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHED_FRIENDS = 'FETCHED_FRIENDS';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const SAVED_FRIENDS = 'SAVED_FRIENDS';
export const UPDATING_FRIENDS = 'UPDATING_FRIENDS';
export const UPDATED_FRIENDS = 'UPDATED_FRIENDS';
export const DELETING_FRIENDS = 'DELETING_FRIENDS';
export const DELETED_FRIENDS = 'DELETED_FRIENDS';
export const ERROR = 'ERROR';

export const fetchFriends = () => {
    return dispatch => {
        dispatch({ type: FETCHING_FRIENDS });

        axios.get('http://localhost:5000/api/friends')
            .then(res => {
                dispatch({ type: FETCHED_FRIENDS, payload: res });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err});
            })
    }
}