import {
  SET_FILTER_STUDENT,
  FETCH_STUDENTS_START,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE
} from '../../actions';

const initialState = {
      isLoading: false,
      error: null,
      studentList: [],
      searchTerm: ""
}

export const studentTableReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_STUDENTS_START:
          return {
              ...state,
              isLoading: true,
              error: null,
          };
      case FETCH_STUDENTS_SUCCESS:
          return {
              ...state,
              isLoading: false,
              error: null,
              studentList: action.payload,
          };
      case FETCH_STUDENTS_FAILURE:
          return {
              ...state,
              isLoading: false,
              error: action.payload,
          }
       
        case SET_FILTER_STUDENT:
            return {
                ...state,
                searchTerm: action.payload
            }
      default: return state;

  }
}