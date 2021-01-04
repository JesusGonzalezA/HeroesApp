import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Testing auth Reducer', () => {
    
    let user;
    beforeEach( () => {
        user = {
            name: 'Jesus',
            logged: false
        };
    })

    test('should return the default state', () => {
        expect(authReducer(user, {})).toEqual(user);
    });

    test('should auth and set the user name', () => {
        const action = {
            type: types.login,
            payload: user
        };
        expect(authReducer({}, action)).toEqual({
            name: user.name,
            logged: true
        });
    });

    test('should delete the user name and set logged to false', () => {
        const action = {
            type: types.logout
        };
        expect(authReducer(user, action)).toEqual({
            logged: false
        });
    });
    
})
