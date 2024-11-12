
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { UserContext } from "../Context";
import { LOGIN } from "../Constants/Routes";


const LogOutButton = (props) => {
    const { logout } = useContext(UserContext);
    const navigate = useNavigate();

    const logoutAndNavigate = () => {
        logout();
        navigate(LOGIN);
    };

    return (
        <div onClick={logoutAndNavigate} {...props}>
            <IoLogOutOutline size={30} className="text-red-600" />
        </div>
    )
}

export default LogOutButton;