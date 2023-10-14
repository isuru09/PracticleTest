import axios from "axios";

const useProductModel = () => {
    const getProducts = () => {
        const data=axios({
            method: 'get',
            url: 'https://dummyjson.com/products',
        })

        return data;
    }

    const getProduct = (id:number) => {
        const data=axios({
            method: 'get',
            url: 'https://dummyjson.com/products/'+id,
        })

        return data;
    }


    return {
        getProducts,
        getProduct
    };
}

export default useProductModel;