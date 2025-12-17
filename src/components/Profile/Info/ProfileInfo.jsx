import s from "./ProfileInfo.module.css";
import Preloader from "@/components/common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <>
            <div className={ s.avatar }>
                <img src="https://placehold.co/200x200/orange/white.png" alt="avatar" />
            </div>
            {/*<ProfileStatus />*/}
            <div className={ s.info }>
                <span className={ s.username }>{ props.profile.fullName }</span>
                <ul>
                    <li>Date of Birth: 2 January</li>
                    <li>City: Minsk</li>
                    <li>Education: BSU'11</li>
                    <li>Email: dmitry.k@example.com</li>
                    <li>facebook: { props.profile.contacts.facebook }</li>
                </ul>
            </div>
        </>
    )
}

export default ProfileInfo;