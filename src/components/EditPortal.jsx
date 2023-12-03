import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { useAuth } from "../auth/auth"


function EditPortal({ title, content, id }) {
    const auth = useAuth()
    const [showModal, setShowModal] = useState(false)
    const [textTitle, setTextTitle] = useState(title)
    const [textContent, setTextContent] = useState(content)
    const [blogdata, setblogdata] = useState(auth.blogData)
    const objIdx = blogdata.findIndex((obj => obj.id === id))

    const canEdit = auth.user.permissions.overWrite || blogdata[objIdx].author === auth.user.username

    console.log();

    const saveTheEdit = (e) => {
        e.preventDefault()
        setShowModal(false)
        const updateBlogData = [...blogdata]
        updateBlogData[objIdx].title = textTitle
        updateBlogData[objIdx].content = textContent
        auth.modifyBlogData(updateBlogData)
    }

    return (
        <>
            {canEdit && (
                <button
                    className="w-1/2 bg-green-600 text-white rounded-lg"
                    onClick={() => setShowModal(true)}>
                    Editar BlogPost
                </button>
            )}
            {showModal && createPortal(
                <div className="absolute inset-0">
                    <div className="flex flex-col justify-center items-center w-full h-full">
                        <div className="flex flex-col w-6/12 h-3/6 justify-around items-center border-4 rounded-lg">

                            <form onSubmit={saveTheEdit}>
                                <label>Title: </label>
                                <input
                                    type="text"
                                    defaultValue={title}
                                    onChange={e => setTextTitle(e.target.value)} />

                                <label>Content: </label>
                                <textarea type="text" defaultValue={content}
                                    onChange={e => setTextContent(e.target.value)} />

                                <button
                                    className="w-1/2 bg-red-600 text-white rounded-lg"
                                    onClick={() => setShowModal(false)}
                                    type="button">
                                    Salir sin Guardar
                                </button>
                                <button
                                    type="submit"
                                    className="w-1/2 bg-green-600 text-white rounded-lg">
                                    Guardar y salir
                                </button>
                            </form>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    )
}

export { EditPortal }