import axios from 'axios';

export const FETCH_STUDENTPROGESS_START = 'FETCH_STUDENTPROGESS_START';
export const FETCH_STUDENTPROGESS_SUCCESS = 'FETCH_STUDENTPROGESS_SUCCESS';
export const FETCH_STUDENTPROGESS_FAILURE = 'FETCH_STUDENTPROGESS_FAILURE';

export const getStudentProgress = student_id => dispatch => {
    dispatch({ type: FETCH_STUDENTPROGESS_START })
    axios.get(`https://speak-out-be-staging.herokuapp.com/api/?table=progress_report&where=student_id=${student_id}`)
    .then(res => { 
        dispatch({
            type: FETCH_STUDENTPROGESS_SUCCESS,
            payload: res.data.tableData[0] //taking off array lets me see payload in console and brings success message 
        })
    })
    .catch(err => {
       dispatch({
        type: FETCH_STUDENTPROGESS_FAILURE,
        payload: err.data
       }) 
    })
}