import types from './../actions/types';

const initialState = {list: []};

export function student(state = initialState, action) {
  switch (action.type) {
    case types.SEE_STUDENT:
      return Object.assign({}, state, { list: action.students });
    case types.DELETE_STUDENT:
      let newStudentsAfterDeleted = state.list.filter(student =>
        student.idStudent !== action.payload
      );
      return Object.assign({}, state, { list: newStudentsAfterDeleted });
    case types.EDIT_STUDENT:
      let newStudentsAfterEdited = state.list.map(student =>
        student.id === action.id ?
          Object.assign({}, student, { studentName: action.studentName, id: action.id }) :
          student
      );
      return Object.assign({}, state, { list: newStudentsAfterEdited });

    case types.STUDENT_FETCH:
      return Object.assign({}, state, { list: action.payload });

    case types.ADD_STUDENT_TO_GROUP:
      return Object.assign({}, state, { list: [...(state.list), action.payload] });

    default:
      return state;
  }
}