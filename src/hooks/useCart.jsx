import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { useAxiosSecure } from './useAxiosSecure';

export const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem('access_token');
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    // General use case
    // queryFn: async () => {
    //   const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
    //     headers: {
    //       authorization: `bearer ${token}`
    //     }
    //   })
    //   return res.json();
    // },

    // Interceptor use case
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`)
      console.log(res);
      return res.data;
    },
  })
  return [cart, refetch]
}
