import { createSlice } from "@reduxjs/toolkit";
import productStore from "./productStore";

const initialState = productStore;

export const productSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setProducts:(state,action:{payload: {products: any}; type: string})=>{
            state.products=action.payload.products;
            state.fetchProducts=false;
        },
        setProductId:(state,action:{payload: {productId: number}; type: string})=>{
            state.selectedProductId=action.payload.productId;
        },
        setProduct:(state,action:{payload: {product: any}; type: string})=>{
            state.selectedProduct=action.payload.product;
            state.fetchProduct=false;
        },
    }
});

const { setProducts,setProduct,setProductId } = productSlice.actions;

export const ProductAction = {
    setProducts,
    setProduct,
    setProductId
};

export default productSlice.reducer;