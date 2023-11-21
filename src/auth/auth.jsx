import React, { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { getPermissions, user } from "./permissions"

const Irisval = new user("IrisVal", "Student")
const RetaxMaster = new user("RetaxMaster", "Teacher")
const Freddier = new user("Freddier", "Admin")

const adminList = [Irisval, RetaxMaster, Freddier]

const AuthContext = React.createContext()

function AuthProvider({ children }) {
    const navigate = useNavigate()
    const [user, setUser] = React.useState(null)

    const login = ({ username }) => {
        const permissions = getPermissions(adminList, username)
        setUser({ username, permissions })
        navigate('/profile')

    }
    const logout = () => {
        setUser(null)
        navigate('/')
    }

    const auth = { user, login, logout }

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const auth = React.useContext(AuthContext)
    return auth
}

function AuthRoute(props) {
    const auth = useAuth()

    if (!auth.user) {
        return <Navigate to="/login" />
    }

    return props.children
}

export {
    AuthProvider,
    AuthRoute,
    useAuth
}