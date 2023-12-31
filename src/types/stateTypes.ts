export type UserStateType = {
    loggingIn: boolean;
    errMsg:string;
    userData: any;
    fetchUser:boolean;
    userDataFull:any;
}

export type ProductStateType = {
    fetchProducts:boolean,
    products:any;
    fetchProduct:boolean,
    selectedProductId:number;
    selectedProduct:any;
    cart:any;
}

export type StoreType={
    user:UserStateType,
    product:ProductStateType
}