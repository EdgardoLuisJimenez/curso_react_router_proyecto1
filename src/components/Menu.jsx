import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/auth";

function Menu() {
    const auth = useAuth()


    return (
        <nav className="w-full">
            <ul className="flex flex-row list-none justify-around py-4">
                {routes.map(route => {
                    // If the user is authenticated, then Login is no show
                    if (route.publicOnly && auth.user) return null
                    // If the user is't authenticated, then Logout is no show
                    if (route.private && !auth.user) return null

                    return (
                        <li key={route.id}>
                            <NavLink
                                style={({ isActive }) => ({
                                    color: isActive ? 'red' : 'blue'
                                })}
                                to={route.to}>
                                {route.text}
                            </NavLink>
                        </li>
                    )
                })}

            </ul>
        </nav>)

}

const routes = []
routes.push({
    id: '1',
    to: '/',
    text: 'Home',
    private: false,
})
routes.push({
    id: '2',
    to: '/blog',
    text: 'Blog',
    private: false,
})
routes.push({
    id: '3',
    to: '/profile',
    text: 'Profile',
    private: true,
})
routes.push({
    id: '4',
    to: '/login',
    text: 'Login',
    private: false,
    publicOnly: true,
})
routes.push({
    id: '5',
    to: '/logout',
    text: 'Logout',
    private: true,
})

export { Menu }