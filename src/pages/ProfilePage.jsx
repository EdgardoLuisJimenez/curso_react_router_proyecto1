import React from "react";
import { AuthRoute, useAuth } from "../auth/auth";
import { Navigate } from "react-router-dom";
import { Title } from "../components/Title";

function ProfilePage() {
    const auth = useAuth()

    return (
        <>
            <Title text={"Profile"}/>
            <p>Welcome, {auth.user.username}</p>
        </>)
}

export { ProfilePage }