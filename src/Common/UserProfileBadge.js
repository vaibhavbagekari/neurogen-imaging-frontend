import React from "react";
import { getInitials } from "../Utils";

const UserProfileBadge = ({ name, email }) => {
    const initials = getInitials(name);

    return (
        <div className={`flex gap-2 items-center`}>
            <div className="flex items-center gap-2">
                <div className="w-fit px-2 py-1.5 rounded-md bg-primary-light">
                    <p className="font-semibold text-amber-900">{initials}</p>
                </div>
                <div className="flex flex-col">
                    {name && <p className="text-base font-semibold leading-none text-white">{name}</p>}
                    {email && <p className="text-sm font-normal leading-none text-white">{email}</p>}
                </div>
            </div>
            
        </div>
    )
}
export default UserProfileBadge;