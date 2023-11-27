import { useState } from "react"
import { createPortal } from "react-dom"
import { useAuth } from "../auth/auth"


function EditPortal({title}) {
    const auth = useAuth()
    const [showModal, setShowModal] = useState(false)

    const canEdit = auth.user.permissions.overWrite || blogpost.author === auth.user.username

    return (
        <>
            {canEdit && (
                <button
                    className="w-1/2 bg-red-600 text-white rounded-lg"
                    onClick={() => setShowModal(true)}>
                    Editar BlogPost
                </button>
            )}
            {showModal && createPortal(
                <div className="flex justify-center items-center absolute inset-0 w-full h-full">
                    <h2>{title}</h2>
                    {/* <p>Author: {blogpost.author}</p>
                    <p>{blogpost.content}</p> */}
                </div>,
                document.body
            )}
        </>
    )
}

export { EditPortal }