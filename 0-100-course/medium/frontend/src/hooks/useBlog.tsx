import { useEffect, useState } from 'react'
import { Blog } from '../types/Blog';
import axios from 'axios';
import { BACKEND_URL } from '../../config';

const useBlog = (id: number) => {
    const [blogInfo, setBlogInfo] = useState<Blog>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function getBlog() {
            if (!id || isNaN(id)) {
                setError("Invalid blog ID");
                setLoading(false);
                return;
            }

            try {
                const res = await axios.get(`${BACKEND_URL}/api/blog/${id}`);
                if (isMounted) {
                    setBlogInfo(res.data.msg);
                }
            } catch (err) {
                if (isMounted) {
                    if (axios.isAxiosError(err)) {
                        // Handle 404 differently than other errors
                        if (err.response?.status === 400) {
                            setError("Blog not found");
                        } else {
                            setError("Failed to load blog");
                        }
                    } else {
                        setError("An unexpected error occurred");
                    }
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        getBlog();

        // Cleanup function to prevent setting state on unmounted component
        return () => {
            isMounted = false;
        };
    }, [id]);

    return { blogInfo, loading, error };
}

export default useBlog;