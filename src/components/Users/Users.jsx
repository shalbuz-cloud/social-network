import React from "react";
import s from "./Users.module.css";

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
                            <div className={ s.avatar__img }></div>
                        </div>
                        <div>
                            {
                                user.followed
                                    ? <button onClick={ () => props.unfollow(user.id) }>Unfollow</button>
                                    : <button onClick={ () => props.follow(user.id) }>Follow</button>
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