import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Users from "./Users.jsx";
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC } from "@/redux/users-reducer.js";

// API
class UsersContainer extends React.Component {

    componentDidMount() {
        // Срабатывает только при вставке html на страницу (1 раз)
        this.onPageChanged(this.props.currentPage);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://3a840237-d14f-4a65-8a25-21a94dea40cd.mock.pstmn.io/users?page=${ pageNumber }`).then(
            response => this.props.setUsers(response.data.items)
        );
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />
    }
}

// CONNECT TO STORE
const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);