import { useEffect, useState } from "react";
import useUserViewModel from "../view-models/useUserViewModel"
import BootSplash from "react-native-bootsplash";

const useUserViewController = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [msg,setMsg]=useState('');
    const {loggingIn,errMsg,userData,loginUser,logoutUser} = useUserViewModel();

    const onChangeUsername = (text:string) =>{
        setUsername(text);
    }

    const onChangePassword = (text:string) =>{
        setPassword(text);
    }

    const login = () =>{
        if ((username.length !== 0 && username!==null) && (password.length !== 0 && password!==null)) {
            setMsg('');
            loginUser(username,password);
        }else{
            setMsg('Wrong input');
        }
    }

    const splashHide = async () => {
        await BootSplash.hide({ fade: true });
    }

    useEffect(()=>{
        splashHide();
    },[]);

    return{
        loggingIn,
        errMsg,
        userData,
        msg,
        onChangeUsername,
        onChangePassword,
        login,
        splashHide
    }
}

export default useUserViewController;