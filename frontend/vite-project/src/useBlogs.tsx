import axios from "axios";
import { useEffect, useState } from "react";
import { BACKENDURL } from "./config";


export interface Blog{
    "title":string,"content":string,"author":{"name":string,} ,"id":number
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]); // Replace `any[]` with the appropriate type if known, e.g., `BlogType[]`

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/v1/blog/bulk` ,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        });
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { loading, blogs };
};

export const useBlog = ({id}:{id:string}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>(); // Replace `any[]` with the appropriate type if known, e.g., `BlogType[]`
  
    useEffect(() => {
      const fetchBlog= async () => {
        try {
          const response = await axios.get(`${BACKENDURL}/api/v1/blog/${id}` ,{
              headers:{
                  Authorization:localStorage.getItem("token")
              }
          });
          setBlog(response.data.blog);
        } catch (error) {
          console.error("Error fetching blogs:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchBlog();
    }, [id]);
  
    return { loading, blog };
  };

   
