import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useFetchData = (API, requiresAuth = true) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { auth } = useAuthContext();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
            setLoading(true);

            const config = {
                headers: {},
            };

            if (requiresAuth && auth?.token) {
                config.headers['Authorization'] = `Bearer ${auth.token}`;
            }

            const response = await axios.get(process.env.REACT_APP_API_URL + API, config);
            setData(response.data);
            setLoading(false);
            setError(null);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
            setError(error?.response?.data?.error || error.message);
        }
      };

      fetchData();
    }, [auth, API, requiresAuth]);

    return { data, loading, error };
};
