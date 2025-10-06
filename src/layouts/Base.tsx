import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Base: React.FC = () => {
    return (
        <>
            <Header />
            <main style={{ padding: "2rem" }}>
                <Outlet />
            </main>
        </>
    );
};

export default Base;
