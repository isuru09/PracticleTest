import { useEffect } from "react";
import useUserViewModel from "../view-models/useUserViewModel";

const useProfileViewController = () =>{
    const {userData,userDataFull,getUser,logoutUser}=useUserViewModel();

    useEffect(()=>{
        getUser(userData.id);
    },[]);

    const logout = () =>{
        logoutUser();
    }

    return{
        userData,
        userDataFull,
        logout
    };
}

export default useProfileViewController;