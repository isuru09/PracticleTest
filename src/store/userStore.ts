import { UserStateType } from "../types/stateTypes";

const userStore:UserStateType={
    loggingIn:false,
    errMsg:'',
    userData:{}
}

export default userStore;