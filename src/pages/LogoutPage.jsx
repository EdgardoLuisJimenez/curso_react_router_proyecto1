import React from "react";
import { useAuth } from "../auth/auth";

function LogoutPage() {
    const auth = useAuth()

    const logout = (e) => {
        e.preventDefault()
        console.log('Logout');
        auth.logout()
    }

    return (<>
        <h1>Login</h1>

        <form onSubmit={logout}>
            <label >
                Seguro que quiere salir?
            </label>

            <button type="submit">Salir</button>
        </form>
    </>)
}

export { LogoutPage }