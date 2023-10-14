import axios from "axios";

const useUserModel = () => {
    const login = (username: string,password:string) => {
        const data=axios({
            method: 'post',
            url: 'https://dummyjson.com/auth/login',
            data: {
                username: 'kminchelle',
                password: '0lelplR'
            }
        })

        return data;
    }

    return {
        login
    };
}

export default useUserModel;