import * as actions from '../../src/actions/student'
import * as types from '../../src/actions/types/student'

describe('actions', () => {
    it('should create an action to add a student', () => {
        const text = 'ADD_STUDENT'
        const expectedAction = {
            type: types.ADD_STUDENT,
            text
        }
        expect(actions.editStudent(text)).toEqual(expectedAction)
    });

    it('shoud create an action edit student',() => {
        const expectedAction = {
            type : types.EDIT_STUDENT
        }
        let student = {};
        expect(actions.editStudent(1,student),expectedAction);
    })
})