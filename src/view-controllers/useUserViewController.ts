import { useState } from "react";
import useUserViewModel from "../view-models/useUserViewModel"
import { useNavigation } from "@react-navigation/native";
import { screens } from "../navigation/screens";

const useUserViewController = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [msg,setMsg]=useState('');
    const {loggingIn,errMsg,userData,loginUser,logoutUser} = useUserViewModel();

    const navigation=useNavigation();
    
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

    const logout = () =>{
        logoutUser();
        navigation.navigate(screens.login);
    }

    return{
        loggingIn,
        errMsg,
        userData,
        msg,
        onChangeUsername,
        onChangePassword,
        login,
        logout
    }
}

export default useUserViewController;