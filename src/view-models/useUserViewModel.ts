import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../types/stateTypes";
import { UserAction } from "../store/userSlice";
import useUserModel from "../models/useUserModel";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../navigation/screens";

const useUserViewModel = () => {
    const dispatch = useDispatch();
    const {loggingIn,errMsg,userData}=useSelector((state:StoreType) => state.user);

    const {login}=useUserModel();

    const {setLogingIn,setError,setUser} = UserAction;

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

    const logoutUser = () => {
        dispatch(setUser({user:{}}));
    }

    return {
        loggingIn,
        errMsg,
        userData,
        loginUser,
        logoutUser
    }
}

export default useUserViewModel;