import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import { blogdata } from "../data/blogdata";
import { Title } from "../components/Title";
import { useAuth } from "../auth/auth";

function BlogPage() {
    const auth = useAuth()
    const [blogdata, setBlogdata] = useState(auth.blogData)

    useEffect(() => {
        console.log(`Esto es desde el BlogPage ${blogdata}`);
    }, [auth.blogData])

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