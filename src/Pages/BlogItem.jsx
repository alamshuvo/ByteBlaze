import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";
import { saveBlogs } from "../utilities";
// import Lodar from "../components/Lodar/Lodar";


const BlogItem = () => {
    const [tabIndex,setIndex]=useState(0);
  const item = useLoaderData();
 
  console.log(item.tags);

  const handlebookMark=(blog)=>{
    console.log(blog);
    saveBlogs(blog);
  }



  
  return (
    <div>
      <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              {item.title}
            </h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
              <div className="flex items-center md:space-x-2">
                <img
                  src={item.social_image}
                  alt=""
                  className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                />
                <p className="text-sm">
                  {item.user.name} {item.readable_publish_date}
                </p>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                Comment: {item.public_reactions_count}
              </p>
            </div>
            {/* tabs */}
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center md:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
              <Link
                to={''}
                onClick={()=>setIndex(0)}
                rel="noopener noreferrer"
                href="#"
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  rounded-t-lg dark:border-gray-600 dark:text-gray-900 ${tabIndex===0 ?'border border-b-0':'border-b'}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Content </span>
              </Link>
              <Link
                to={`author`}
                onClick={()=>setIndex(1)}
                rel="noopener noreferrer"
                href="#"
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  rounded-t-lg dark:border-gray-600 dark:text-gray-900 ${tabIndex===1 ?'border border-b-0':'border-b'}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span>Author</span>
              </Link>
           <div onClick={()=>handlebookMark(item)} className="flex  items-center justify-center gap-2 rounded-full hover:bg-secondary hover:bg-opacity-30% bg-opacity-20% cursor-pointer p-4 hover:scale-105">
         <FaRegBookmark className="text-primary" /> 
              
           </div>
            </div>
          </div>
          <Outlet></Outlet>
        </article>
        <div>
          <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
      
            
           
          
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
