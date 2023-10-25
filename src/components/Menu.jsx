import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
    return (<nav>
        <ul>

            {routes.map(route => (
                <li key={route.id}>
                    <NavLink
                        style={({ isActive }) => ({
                            color: isActive ? 'red' : 'blue'
                        })}
                        to={route.to}>
                        {route.text}
                    </NavLink>
                </li>
            ))}

        </ul>
    </nav>)

}

const routes = []
routes.push({
    id: '1',
    to: '/',
    text: 'Home'
})
routes.push({
    id: '2',
    to: '/blog',
    text: 'Blog'
})
routes.push({
    id: '3',
    to: '/profile',
    text: 'Profile'
})
routes.push({
    id: '4',
    to: '/login',
    text: 'Login'
})
routes.push({
    id: '5',
    to: '/logout',
    text: 'Logout'
})

export { Menu }