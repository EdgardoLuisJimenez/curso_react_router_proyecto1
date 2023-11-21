import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { blogdata } from "../data/blogdata";
import { useAuth } from "../auth/auth";

function BlogPost() {
    const auth = useAuth()
    const navigate = useNavigate()

    const { slug } = useParams();

    const blogpost = blogdata.find(post => post.slug === slug)

    const canDelete = auth.user.permissions.Delete || blogpost.author === auth.user.username
    // console.log(auth.user);

    const returnToBlog = () => {
        navigate('/blog')
    }

    return (<>
        <h2>{blogpost.title}</h2>
        <button onClick={returnToBlog}>Volver al blog</button>
        <p>{blogpost.author}</p>
        <p>{blogpost.content}</p>

        {canDelete && (
            <button>Eliminar BlogPost</button>
        )}

    </>)
}

export { BlogPost }