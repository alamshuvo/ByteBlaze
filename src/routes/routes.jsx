import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import BlogItem from "../Pages/BlogItem";
import Bookmarks from "../Pages/Bookmarks";
import Content from "../components/Content/Content";
import Author from "../components/Author/Author";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayouts></MainLayouts>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/blogs",
          loader:()=>fetch('https://dev.to/api/articles?per_page=20&top=7'),
          element:<Blogs></Blogs>
        },
        {
          path:"/blog/:id",
          element:<BlogItem></BlogItem>,
          loader:({params})=>fetch (`https://dev.to/api/articles/${params.id}`),
          children:[
            {
            index:true,
            element:<Content></Content>,
            loader:({params})=>fetch (`https://dev.to/api/articles/${params.id}`),
           },
           {
            path:"author",
            element:<Author></Author>,
            loader:({params})=>fetch (`https://dev.to/api/articles/${params.id}`),
           }

           
          ]
        },
        {
          path:"/bookmarks",
          element:<Bookmarks></Bookmarks>
        }
      ]
    },
  ]);