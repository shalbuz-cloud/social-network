import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <>
            <div className={ s.avatar }>
                <img src="https://placehold.co/200x200/orange/white.png" alt="avatar" />
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
        </>
    )
}

export default ProfileInfo;