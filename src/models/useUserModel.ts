import axios from "axios";

const useUserModel = () => {
    const login = (username: string,password:string) => {
        const data=axios({
            method: 'post',
            url: 'https://dummyjson.com/auth/login',
            data: {
                username: username,
                password: password
            }
        })

        return data;
    }

    const fetchUser = (id:number) => {
        const data=axios({
            method: 'get',
            url: 'https://dummyjson.com/user/'+id,
        })

        return data;
    }

    return {
        login,
        fetchUser
    };
}

export default useUserModel;