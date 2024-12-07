import BlogCard from "../components/BlogCard";
import useBlogs from "../hooks/useBlogs";

const Blogs = () => {
    const {blogs, loading} = useBlogs();

    if(loading) return <div>Loading...</div>

  return (
    <div className="flex flex-col p-10 items-center">
        {blogs.map((blog, i) => (
            <BlogCard key={i} title={blog.title} content={blog.content} user={{firstName: blog.user.firstName, lastName: blog.user.lastName}} publishedDate={blog.publishedDate}/>
        ))}
        {/* <BlogCard title="How to become a 10x dev in 6 weeks" content="Start with js fundamentals. Then learn the MERN stack, become great as node and react. Learn Next.js, get good at tailwind." firstName="Ayush" lastName="Shah" publishedDate={new Date(Date.now())}  /> */}
    </div>
  );
};

export default Blogs;
