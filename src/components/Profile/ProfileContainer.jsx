import React from "react";
import Profile from "@/components/Profile/Profile.jsx";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "@/redux/profile-reducer.js";
import { withRouter } from "@/hoc/withRouter.jsx";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        let profile_url = "/api/profile";
        if (userId) { profile_url += userId }
        axios.get(profile_url)
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

const mapStateToProps = (state) => ({
    profile: state.profile.profile
});

// Добавляем контекст из URL
const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);