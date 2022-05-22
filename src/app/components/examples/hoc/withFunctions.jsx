import React from "react";
import Card from "../../common/Card";
import Subtitle from "../../common/typografy/subtitle";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("user");
    const handleLogin = () => {
        return localStorage.getItem("user");
    };
    const handLogOut = () => {
        return localStorage.setItem("user", " ");
    };

    return (
        <Card>
            <Subtitle>Simple Component</Subtitle>
            <Component
                onLogin={handleLogin}
                onLogOut={handLogOut}
                isAuth={isAuth}
                {...props}
            />
        </Card>
    );
};

export default withFunctions;
