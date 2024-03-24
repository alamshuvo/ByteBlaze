import toast from "react-hot-toast";

export const getBlogs=()=>{
    let blogs=[];
    const storedBlogs=localStorage.getItem('blogs');
    if (storedBlogs) {
       blogs=JSON.parse(storedBlogs);     
    }
    return blogs;
}


// save 
export const saveBlogs=(blog)=>{
    let blogs=getBlogs();
    const isExisit=blogs.find(b=>b.id==blog.id);
    if (isExisit) {
        return toast.error("already bookmarked");
    }
    blogs.push(blog);
    localStorage.setItem('blogs',JSON.stringify(blogs));
    toast.success("Blog Bookmarked Sucessfully ");
}

// delete
export const deletBlogs=id=>{
    const blogs=getBlogs();
    const remaining=blogs.filter(b=>b.id!==id);
    localStorage.setItem('blogs',JSON.stringify(remaining));
    toast.success("Blog Removed Form Bookmarked");
}