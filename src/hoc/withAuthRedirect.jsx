import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => ({isAuth: state.auth.isAuth});

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to="/login" replace />
        return <Component { ...props } />
    }
    return connect(mapStateToProps)(RedirectComponent);
}