import { ProductStateType, UserStateType } from "../types/stateTypes";

const productStore:ProductStateType={
    fetchProducts:true,
    products:{},
    selectedProductId:0,
    fetchProduct:true,
    selectedProduct:{},
    cart:[]
}

export default productStore;