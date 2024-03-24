import { useLoaderData } from "react-router-dom";
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";


const Content = () => {
    const blog=useLoaderData()
    console.log(blog);
    return (
       <div
        className="max-w-full group hover:no-underline focus:no-underline dark:bg-gray-50 border-2 p-2 opacity-30%"
      >
        <img
        src={blog.cover_image}
          role="presentation"
          className="object-cover w-full  rounded h-44 dark:bg-gray-500"
          
        />
             {
            blog.tags.map((tag,idx)=>
            <a
            key={idx}
            rel="noopener noreferrer"
            href="#"
            className=" px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
          >
            #{tag}
          </a>
            )
           }
        <div className="p-6 space-y-2 mt-5">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {blog.title}
          </h3>
          <span className="text-xs dark:text-gray-600">
          {
          new Date(blog.published_timestamp).toLocaleDateString()
        }
          </span>
          <p>
            <Markdown rehypePlugins={[rehypeRaw]}>{blog.body_html.slice(0,1000)}</Markdown>
          
          </p>
        </div>
        </div>
    );
};

export default Content;