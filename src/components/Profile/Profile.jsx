import s from "./Profile.module.css";
import ProfileInfo from "./Info/ProfileInfo.jsx";
import PostListContainer from "./Post/PostListContainer";
import ProfileStatus from "./ProfileStatus";

const Profile = (props) => {
    return (
        <>
            <div className={ s.header }></div>
            <div className={ s.profile }>
                <ProfileInfo { ...props.profile } />
            </div>
            <div className={ s['status-bar'] }>
                <ProfileStatus status={ props.status } updateStatus={ props.updateStatus } />
            </div>
            <PostListContainer />
        </>
    )
}

export default Profile;