import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../types/stateTypes";
import { UserAction } from "../store/userSlice";
import useUserModel from "../models/useUserModel";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../navigation/screens";

const useUserViewModel = () => {
    const dispatch = useDispatch();
    const {loggingIn,errMsg,userData,userDataFull}=useSelector((state:StoreType) => state.user);

    const {login,fetchUser}=useUserModel();

    const {setLogingIn,setError,setUser,setUserData} = UserAction;

    const loginUser = (username:string,password:string) => {
        dispatch(setLogingIn({login:true}));
        const data=login(username,password);
        data.then((resp)=>{
            dispatch(setUser({user:resp.data}));
        }
        ).catch((e)=>{
            dispatch(setError({msg:e.response.data.message}));
        });
    }

    const getUser = (id:number) =>{
        const data=fetchUser(id);
        data.then((resp)=>{
            dispatch(setUserData({user:resp.data}));
        }
        ).catch((e)=>{
            dispatch(setUserData({user:{}}));
        });
    }

    const logoutUser = () => {
        dispatch(setUser({user:{}}));
    }

    return {
        loggingIn,
        errMsg,
        userData,
        userDataFull,
        loginUser,
        logoutUser,
        getUser
    }
}

export default useUserViewModel;