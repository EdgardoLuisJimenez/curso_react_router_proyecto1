import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../auth/auth";

function Menu() {
    const auth = useAuth()


    return (
        <nav>
            <ul>
                {routes.map(route => {
                    if (route.publicOnly && auth.user) return null
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