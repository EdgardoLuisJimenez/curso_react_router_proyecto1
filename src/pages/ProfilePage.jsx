import React from "react";
import { AuthRoute, useAuth } from "../auth/auth";
import { Navigate } from "react-router-dom";

function ProfilePage() {
    const auth = useAuth()

    return (
        <>
            <h1>Profile</h1>
            <p>Welcome, {auth.user.username}</p>
        </>)
}

export { ProfilePage }