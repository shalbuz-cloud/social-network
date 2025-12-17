import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "@/redux/auth-reducer.js";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(
            'https://fake-server/auth/me',
            {withCredentials: true}
        )
            .then(response => {
                // code here
            });
    }

    render() {
        return <Header { ...this.props } />;
    }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);