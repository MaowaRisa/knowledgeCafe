import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="w-2/3">
            <h3 className="text-4xl">Total Blogs: {blogs.length}</h3>
        </div>
    );
};

export default Blogs;