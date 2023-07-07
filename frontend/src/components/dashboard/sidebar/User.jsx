import React from "react";
import "./User.css"
import {ReactComponent as SettingIcon} from '../../../assets/icons/cog.svg'

const User = () => {
    return (
        <div className="user">
            <div className="user-container">
                <img src="./avatars/user1.png" className="avatar" />
                <div className="name-container">
                    <p className="name">Tyler Durden</p>
                    <p className="member">Premium Member</p>
                </div>
            </div>
            <SettingIcon className="setting-icon"/>
        </div>
    );
};

export default User;