import { Link } from "react-router-dom";


const Blog = ({blog}) => {
    console.log(blog);
    return (
        <Link
              to={`/blog/${blog.id}`}
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 border-2 transition hover:scale-105 hover:border-secondary border-primary opacity-30%"
            >
              <img
              src={blog.cover_image}
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {blog.title}
                </h3>
                <span className="text-xs dark:text-gray-600">
                {
                new Date(blog.published_timestamp).toLocaleDateString()
              }
                </span>
                <p>
                  {blog.description}
                </p>
              </div>
        </Link>
    );
};

export default Blog;