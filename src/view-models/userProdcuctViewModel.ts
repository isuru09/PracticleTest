import { useDispatch, useSelector } from "react-redux";
import useProductModel from "../models/useProductModel";
import { ProductAction } from "../store/productSlice";
import { StoreType } from "../types/stateTypes";

const useProductViewModel = () => {
    const dispatch = useDispatch();
    const {products,selectedProduct,selectedProductId,fetchProduct,fetchProducts,cart}=useSelector((state:StoreType) => state.product);

    const {getProducts,getProduct} =useProductModel();

    const {setProducts,setProduct,setProductId,addCart,removeCart} = ProductAction;

    const getAllProducts = () => {
        const data=getProducts();
        data.then((resp)=>{
            dispatch(setProducts({products:resp.data}));
        }
        ).catch((e)=>{
            dispatch(setProducts({products:{}}));
        });
    }

    const setSingleProduct = (id:number) =>{
        dispatch(setProductId({productId:id}));
    }

    const getSingleProduct = () =>{
        const data=getProduct(selectedProductId);
        data.then((resp)=>{
            dispatch(setProduct({product:resp.data}));
        }
        ).catch((e)=>{
            dispatch(setProduct({product:{}}));
        });
    }

    const addToCart = (pro:any,qty:number) =>{
        pro={...pro,qty};
        dispatch(addCart({product:pro}));
    }

    const removeFromCart = (id:number) =>{
        dispatch(removeCart({id:id}));
    }

    return{
        fetchProduct,
        fetchProducts,
        products,
        selectedProduct,
        cart,
        getAllProducts,
        setSingleProduct,
        getSingleProduct,
        addToCart,
        removeFromCart
    }
}

export default useProductViewModel;