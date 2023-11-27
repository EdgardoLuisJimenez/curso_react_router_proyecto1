import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { blogdata } from "../data/blogdata";
import { useAuth } from "../auth/auth";
import { EditPortal } from "./EditPortal";

function BlogPost() {
    const auth = useAuth()
    const navigate = useNavigate()

    const { slug } = useParams();

    const blogpost = blogdata.find(post => post.slug === slug)

    const canDelete = auth.user.permissions.Delete || blogpost.author === auth.user.username
    const canEdit = auth.user.permissions.overWrite || blogpost.author === auth.user.username

    // console.log(auth.user);

    const returnToBlog = () => {
        navigate('/blog')
    }

    return (<>
        <button
            onClick={returnToBlog}
            className="bg-sky-400 w-44 rounded-lg h-9 text-white hover:bg-amber-200 hover:scale-110 ease-in-out transition delay-100">
            Volver al blog
        </button>
        <div className="flex flex-col justify-between items-start mx-2.5 my-3.5 p-2.5 rounded-lg w-72 h-72  border-2">
            <h2>{blogpost.title}</h2>
            <p>Author: {blogpost.author}</p>
            <p>{blogpost.content}</p>

            <div className="flex gap-3">
                {canDelete && (
                    <button className="w-1/2 bg-red-600 text-white rounded-lg">Eliminar BlogPost</button>
                )}
                <EditPortal title={blogpost.title}/>
            </div>
        </div>

    </>)
}

export { BlogPost }