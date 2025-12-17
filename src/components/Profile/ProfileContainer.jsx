import React from "react";
import Profile from "@/components/Profile/Profile.jsx";
import { connect } from "react-redux";
import { setUserProfile } from "@/redux/profile-reducer.js";
import { withRouter } from "@/hoc/withRouter.jsx";
import { usersAPI } from "@/api/api.js";
import { withAuthRedirect } from "@/hoc/withAuthRedirect.jsx";
import { compose } from "@reduxjs/toolkit";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        usersAPI.getProfile(userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile { ...this.props } profile={ this.props.profile } />
        )
    }
}

// High Order Component (HOC)
// const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
    profile: state.profile.profile
});

// Добавляем контекст из URL
// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
export default compose(
    connect(mapStateToProps, {setUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);