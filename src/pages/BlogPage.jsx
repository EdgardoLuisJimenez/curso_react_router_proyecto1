import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blogdata } from "../data/blogdata";
import { Title } from "../components/Title";

function BlogPage() {
    return (<>
        <Title text={"BlogPage"}/>

        <Outlet/>

        <ul>
            {
                blogdata.map(post => (
                    <BlogLink
                        key={post.id}
                        post={post} />
                ))
            }

        </ul>
    </>)
}

function BlogLink({ post }) {
    return (
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
    )
}



export { BlogPage }