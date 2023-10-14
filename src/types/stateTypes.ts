export type UserStateType = {
    loggingIn: boolean;
    errMsg:string;
    userData: any;
}

export type StoreType={
    user:UserStateType,
}