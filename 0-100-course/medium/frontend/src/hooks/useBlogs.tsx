import { useEffect, useState } from 'react'
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { Blog } from '../types/Blog';
const useBlogs = () => {
    const[loading, setLoading] = useState(true);
    const[blogs, setBlogs] = useState<Blog[]>([]);
    useEffect(() => {
        async function getBlogs(){
            try {
                const res = await axios.get(`${BACKEND_URL}/api/blog`);
                console.log(res.data.allBlogs);
                setBlogs(res.data.allBlogs);
                setLoading(false);
              } catch (err) {
                console.log("Error fetching blogs", err);
              }
        }
        getBlogs();
    }, [])
  return {loading, blogs}
}

export default useBlogs