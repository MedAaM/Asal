import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const usePostData = (API, requiresAuth = true) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { auth } = useAuthContext();

    const postData = async (payload) => {
        try {
            setLoading(true);

            const config = {
                headers: {},
            };

            if (requiresAuth && auth?.token) {
                config.headers['Authorization'] = `Bearer ${auth.token}`;
            }

            const response = await axios.post(process.env.REACT_APP_API_URL + API, payload, config);
            setData(response.data);
            setError(null);
        } catch (error) {
            console.error('Error posting data:', error);
            setError(error?.response?.data?.error || error.message);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, postData };
};
