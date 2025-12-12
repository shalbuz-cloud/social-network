import React from "react";
import s from "./Users.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Users = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                { pages.map(page => {
                    return <span key={ page }
                                 className={ props.currentPage === page && s['page--active'] }
                                 onClick={ () => props.onPageChanged(page) }>{ page }</span>
                }) }
            </div>
            {
                props.users.map(user => <div key={ user.id }>
                    <span>
                        <div>
                            <Link to={ `/profile/${ user.id }` }>
                                <div className={ s.avatar__img }></div>
                            </Link>
                        </div>
                        <div>
                            {
                                user.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={ () => {
                                        props.toggleFollowingProgress(true, user.id);
                                        axios.delete(
                                            `/api/follow/${ user.id }`,
                                            // {id: user.id, status: false},
                                            {withCredentials: true}
                                        ).then(response => {
                                            if (response.data.success)
                                                props.unfollow(user.id);
                                            props.toggleFollowingProgress(false, user.id);
                                        })
                                    } }>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={ () => {
                                        props.toggleFollowingProgress(true, user.id);
                                        axios.post(
                                            `/api/follow/${ user.id }`,
                                            // {id: user.id, status: true},
                                            {},
                                            {withCredentials: true}
                                        ).then(response => {
                                            if (response.data.success)
                                                props.follow(user.id);
                                            props.toggleFollowingProgress(false, user.id);
                                        })
                                    } }>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{ user.fullName }</div>
                            <div>{ user.status }</div>
                        </span>
                        <span>
                            <div>{ user.location.country }</div>
                            <div>{ user.location.city }</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
};

export default Users;