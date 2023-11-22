import React, { useState } from "react";
import { useAuth } from "../auth/auth";
import { Navigate } from "react-router-dom";
import { Title } from "../components/Title";

function LoginPage() {
    const auth = useAuth()
    const [username, setUsername] = React.useState('')

    const login = (e) => {
        e.preventDefault()
        auth.login({ username })
    }

    if (auth.user) {
        return <Navigate to="/profile" />
    }

    return (<>
        <Title text={"Login"} />

        <form onSubmit={login} className="flex mt-6 gap-5 items-center">
            <label >
                Escribe tu nombre de usuario:
            </label>
            <input type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="bg-gray-100 rounded-lg w-52 h-9" />
            <button
                type="submit"
                className="bg-sky-400 w-44 rounded-lg h-9 text-white hover:bg-amber-200 hover:scale-110 ease-in-out transition delay-100">
                Entrar
            </button>
        </form>
    </>)
}

export { LoginPage }