import React from "react";
import Profile from "@/components/Profile/Profile.jsx";
import { connect } from "react-redux";
import { getStatus, getUserProfile, setUserProfile, updateStatus } from "@/redux/profile-reducer.js";
import { withRouter } from "@/hoc/withRouter.jsx";
import { withAuthRedirect } from "@/hoc/withAuthRedirect.jsx";
import { compose } from "@reduxjs/toolkit";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        this.props.getUserProfile(userId);
        this.props.getStatus(1);  // user_id = 1 for test only
    }

    render() {
        return (
            <Profile { ...this.props } profile={ this.props.profile } status={ this.props.status } updateStatus={ this.props.updateStatus } />
        )
    }
}

// High Order Component (HOC)
// const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
    profile: state.profile.profile,
    status: state.profile.status,
});

// Добавляем контекст из URL
// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
export default compose(
    connect(mapStateToProps, {getUserProfile, setUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);