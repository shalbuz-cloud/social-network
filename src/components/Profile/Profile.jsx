import s from "./Profile.module.css";
import ProfileInfo from "./Info/ProfileInfo.tsx";
import PostListContainer from "./Post/PostListContainer";

const Profile = () => {
    return (
        <>
            <div className={ s.header }></div>
            <div className={ s.profile }>
                <ProfileInfo />
            </div>
            <PostListContainer />
        </>
    )
}

export default Profile;