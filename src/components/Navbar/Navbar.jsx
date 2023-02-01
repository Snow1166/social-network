import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import SideBar from "./sideBar/sideBar";

const Navbar = (props) => {

    let sideBar = props.state.siteBar.map(el => <SideBar ava={el.ava} name={el.name}/>)
    return (
        <nav className={s.navbar}>
            <div className={s.navItems} >
                <div className={s.item}>
                    <NavLink to="/profile"
                             className={navActive => navActive.isActive ? s.active : s.item}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs"
                             className={navActive => navActive.isActive ? s.active : s.item}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" className={navActive => navActive.isActive ? s.active : s.item}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" className={navActive => navActive.isActive ? s.active : s.item}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings"
                             className={navActive => navActive.isActive ? s.active : s.item}>Settings</NavLink>
                </div>
            </div>
            <div className={s.sideBar}>
                {sideBar}
            </div>
        </nav>
    )
};

export default Navbar;
