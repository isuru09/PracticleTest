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
        },
        setUserData:(state,action:{payload: {user: any}; type: string})=>{
            state.userDataFull=action.payload.user;
            state.fetchUser=false;
        }
    }
});

const { setLogingIn,setError,setUser,setUserData } = userSlice.actions;

export const UserAction = {
    setLogingIn,
    setError,
    setUser,
    setUserData
};

export default userSlice.reducer;