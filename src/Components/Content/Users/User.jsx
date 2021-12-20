import React from "react";
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import photo from "../../../img/—Pngtree—vector avatar icon_4013749.png";

let User = (props) => {
    return <div>
        {
            props.users.map(u => <div key={u.id}>

                <div className={s.User}>

                    <div>
                        <NavLink to={"/profile/" + u.id}>
                            <img className={s.avatar}
                                 src={u.photos.small != null ? u.photos.small : u.photos.small = photo}/>
                        </NavLink>
                        <div>{
                            u.followed ? <button disabled={props.WaitingFollow.some(id => id === u.id)}
                                                 className={s.followed} onClick={() => {
                                    props.unfollow(u.id)
                                }
                                }>Unfollow</button> :

                                <button disabled={props.WaitingFollow.some(id => id === u.id)}
                                        className={s.unfollowed} onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                        }</div>
                    </div>
                    <NavLink className={s.UserInfo} to={"/profile/" + u.id}>

                        <div className={s.left}>
                            <div className={s.nick}>{u.name}</div>
                            <div className={s.status}>{u.status}</div>
                        </div>
                        <div className={s.right}>
                            <div className={s.city}>{u.city}</div>

                        </div>

                    </NavLink>

                </div>

            </div>)
        }
    </div>
}
export default User