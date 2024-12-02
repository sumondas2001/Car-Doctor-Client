import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
     baseURL: 'https://car-doctor-server-finle.vercel.app',
     withCredentials: true
})
const useAxiosSecure = () => {
     const { logOut } = useAuth();
     useEffect(() => {
          axiosSecure.interceptors.response.use((res) => {
               return res;
          }, error => {
               console.log('error track by interceptors', error.response);
               if (error.response.status === 401 || error.response.status === 403) {
                    console.log('logOut the user')
                    logOut()
                         .then()
                         .catch(err => {
                              console.log(err)
                         })
               }
          })
     }, [logOut])
     return axiosSecure
};

export default useAxiosSecure;