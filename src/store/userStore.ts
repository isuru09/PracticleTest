import { UserStateType } from "../types/stateTypes";

const userStore:UserStateType={
    loggingIn:false,
    errMsg:'',
    userData:{},
    fetchUser:true,
    userDataFull:{}
}

export default userStore;