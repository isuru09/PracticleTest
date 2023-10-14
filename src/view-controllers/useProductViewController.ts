import { useEffect, useState } from "react";
import useProductViewModel from "../view-models/userProdcuctViewModel";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../navigation/screens";

const useProductViewController = () =>{
    const [qty,setQty]=useState(0);
    const [imgIndex,setImgIndex] = useState(0);
    const [msg,setMsg]=useState('');
    const {fetchProduct,selectedProduct,getSingleProduct,addToCart}=useProductViewModel();
    const navigation=useNavigation();

    const back = () =>{
        navigation.goBack();
    }

    useEffect(()=>{
        getSingleProduct()
    },[]);

    const addProductTocart = (pro:any) =>{
        if(qty>0){
            addToCart(pro,qty);
            navigation.navigate(screens.cartStack);
        }else{
            setMsg('Quantity should be more than 0')
        }
    }

    const nextImg = (length:number) =>{
        if(imgIndex<length-1){
            setImgIndex(imgIndex+1);
        }else{
            setImgIndex(0);
        }
    }

    const prevImg = (length:number) =>{
        if(imgIndex>0){
            setImgIndex(imgIndex-1);
        }else{
            setImgIndex(length-1);
        }
    }

    return{
        fetchProduct,
        selectedProduct,
        qty,
        imgIndex,
        msg,
        addProductTocart,
        setQty,
        back,
        nextImg,
        prevImg
    }
}

export default useProductViewController;