import {
    createSlice
} from '@reduxjs/toolkit';

export const initialState = {
    isLogin: true,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin(state, action) {
            //state?.isLogin = action?.payload?.isLogin;
            if (action && action.payload && typeof action.payload.isLogin !== 'undefined') {
                state.isLogin = action.payload.isLogin;
                isLogin = state.isLogin;
            }
        },
    },
});
export const {
    setLogin
} = authSlice.actions;
const authReducer = authSlice.reducer
export default authReducer;
