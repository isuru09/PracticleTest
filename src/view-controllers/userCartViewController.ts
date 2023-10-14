import useProductViewModel from "../view-models/userProdcuctViewModel";

const useCartViewController = () => {
    const {cart,removeFromCart}=useProductViewModel();

    const removeItemFromCart = (id:number) =>{
        removeFromCart(id);
    }

    return{
        cart,
        removeItemFromCart
    }
}

export default useCartViewController;