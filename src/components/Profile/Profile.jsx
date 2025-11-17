import s from "./Profile.module.css";
import ProfileInfo from "./Info/ProfileInfo.tsx";
import PostListContainer from "./Post/PostListContainer";

const Profile = (props) => {
    return (
        <>
            <div className={ s.header }></div>
            <div className={ s.profile }>
                <ProfileInfo />
            </div>
            <PostListContainer store = { props.store } />
        </>
    )
}

export default Profile;