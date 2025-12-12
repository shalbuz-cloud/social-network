import React from "react";
import { connect } from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    unfollow,
    toggleFetching,
    toggleFollowingProgress
} from "@/redux/users-reducer.js";
import Users from "./Users";
import Preloader from "@/components/common/Preloader/Preloader";
import { usersAPI } from "@/api/api.js";

// API
class UsersContainer extends React.Component {

    componentDidMount() {
        // Срабатывает только при вставке html на страницу (1 раз)
        this.onPageChanged(this.props.currentPage);
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleFetching(true);
        this.props.setCurrentPage(pageNumber);

        usersAPI.getUsers(pageNumber).then(
            response => {
                this.props.toggleFetching(false);
                this.props.setUsers(response.users);
            }
        );
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={ this.props.totalUsersCount }
                   pageSize={ this.props.pageSize }
                   currentPage={ this.props.currentPage }
                   onPageChanged={ this.onPageChanged }
                   users={ this.props.users }
                   follow={ this.props.follow }
                   unfollow={ this.props.unfollow }
                   toggleFollowingProgress={ this.props.toggleFollowingProgress }
                   followingInProgress={ this.props.followingInProgress }
            />
        </>
    }
}

// CONNECT TO STORE
const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageAC(page));
//         },
//         toggleFetching: (isFetching) => dispatch(toggleFetching(isFetching)),
//     }
// };


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    toggleFetching,
    toggleFollowingProgress
})(UsersContainer);