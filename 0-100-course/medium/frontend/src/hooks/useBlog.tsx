import { useEffect, useState } from 'react'
import { Blog } from '../types/Blog';
import axios from 'axios';
import { BACKEND_URL } from '../../config';

const useBlog = (id: number) => {
    const[blogInfo, setBlogInfo] = useState<Blog>();
    const[loading, setLoading] = useState(true);
    

    useEffect(() => {
        async function getBlog(){
            try{
            const res = await axios.get(`${BACKEND_URL}/api/blog/${id}`);
            console.log(res.data);
            setLoading(false);
            setBlogInfo(res.data.msg);
            }
            catch(err){
                console.log(err, "Fetch Error");
                
            }
        }
        getBlog();
    })

  return {blogInfo, loading}
}

export default useBlog