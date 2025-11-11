import s from "./Profile.module.css";
import PostList from "./Post/PostList";
import ProfileInfo from "./Info/ProfileInfo.tsx";

const Profile = (props) => {
    return (
        <>
            <div className={ s.header }></div>
            <div className={ s.profile }>
                <ProfileInfo />
            </div>
            <PostList profile={ props.profile } dispatch={ props.dispatch } />
        </>
    )
}

export default Profile;