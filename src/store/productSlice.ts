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
        addCart:(state,action:{payload: {product: any}; type: string})=>{
            const p=state.cart.find(e=>e.id===action.payload.product.id);
            if(p){
                p.qty=p.qty+action.payload.product.qty;
            }else{
                state.cart.push(action.payload.product);
            }
        },
        removeCart:(state,action:{payload: {id: number}; type: string})=>{
            state.cart=state.cart.filter((e:any)=>e.id!==action.payload.id);
        },
        clearCart:(state)=>{
            state.cart=[];
        },
    }
});

const { setProducts,setProduct,setProductId,addCart,removeCart,clearCart } = productSlice.actions;

export const ProductAction = {
    setProducts,
    setProduct,
    setProductId,
    addCart,
    removeCart,
    clearCart
};

export default productSlice.reducer;