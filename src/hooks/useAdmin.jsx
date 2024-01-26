import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth"
import { useAxiosSecure } from "./useAxiosSecure";

export const useAdmin = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  // Use axios secure with react query
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res.data.admin;
    }
  });
  return [isAdmin, isAdminLoading]
}