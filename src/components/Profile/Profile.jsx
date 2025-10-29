import React from "react";
import s from "./Profile.module.css";
import PostList from "./Post/PostList";

const Profile = () => {
    return (
        <>
            <div className={ s.header }></div>
            <div className={ s.profile }>
                <div className={ s.avatar }>
                    <img src="https://placehold.co/200x200/orange/white.png" alt="avatar"/>
                </div>
                <div className={ s.info }>
                    <span className={ s.username }>Dmitry K.</span>
                    <ul>
                        <li>Date of Birth: 2 January</li>
                        <li>City: Minsk</li>
                        <li>Education: BSU'11</li>
                        <li>Email: dmitry.k@example.com</li>
                    </ul>
                </div>
            </div>
            <PostList />
        </>
    )
}

export default Profile;