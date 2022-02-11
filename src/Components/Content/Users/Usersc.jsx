import React from "react";
import s from "./Users.module.css"
import * as axios from "axios"
import photo from "../../../img/user.png"

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=173&count=10").then(a => {
            this.props.setUsers(a.data.items)
        })
    }

    onPageChanged(currentPage) {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=10`).then(a => {
            this.props.setUsers(a.data.items)
        })
    }

    render() {


        let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        console.log(pageCount)
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {
                    pages.map(a => {
                        return <button
                            className={this.props.currentPage === a && s.selected}
                            onClick={ (p ) => { this.onPageChanged(a) }}>{a}</button>
                    })
                }
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <div className={s.User}>
                        <div>
                            <img className={s.avatar}
                                 src={u.photos.small != null ? u.photos.small : u.photos.small = photo}/>
                            <div>{
                                u.followed ? <div className={s.followed} onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</div> :
                                    <div className={s.unfollowed} onClick={() => {
                                        this.props.follow(u.id)
                                    }}>Follow</div>
                            }</div>
                        </div>
                        <div className={s.UserInfo}>
                            <div className={s.left}>
                                <div className={s.nick}>{u.name}</div>
                                <div className={s.status}>{u.status}</div>
                            </div>
                            <div className={s.right}>
                                <div className={s.city}>{u.city}</div>
                                <div className={s.country}>{u.country}</div>
                            </div>
                        </div>
                    </div>
                </div>)
            }

        </div>
    }


}

export default Users