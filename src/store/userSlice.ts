import { createSlice } from "@reduxjs/toolkit";
import userStore from "./userStore";

const initialState = userStore;

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLogingIn:(state,action:{payload: {login: boolean}; type: string})=>{
            state.loggingIn=action.payload.login;
        },
        setError:(state,action:{payload: {msg: string}; type: string})=>{
            state.errMsg=action.payload.msg;
            state.loggingIn=false;
        },
        setUser:(state,action:{payload: {user: any}; type: string})=>{
            state.userData=action.payload.user;
            state.loggingIn=false;
        }
    }
});

const { setLogingIn,setError,setUser } = userSlice.actions;

export const UserAction = {
    setLogingIn,
    setError,
    setUser,
};

export default userSlice.reducer;