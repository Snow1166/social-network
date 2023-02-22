import style from './Header.module.css'
import {NavLink, redirect} from "react-router-dom";

const Logout = (props) => {
    const logoutNavigate = () => {
        props.logout()
        redirect('/Login')
    }
    return (
        <div>
            <button onClick={logoutNavigate}>Logout</button>
        </div>
    )
}

const Header = (props) => {
    return (
        <header className={style.header}>
            <img title="icon"
                 src="https://w7.pngwing.com/pngs/114/795/png-transparent-logo-piracy-others-miscellaneous-text-logo.png"/>
            <div className={style.loginBlock}>
                <NavLink to={'/login'}>{props.isAuth ? props.login : 'Login'}</NavLink>
                {!props.isAuth? null : <Logout logout={props.logout}/>}
            </div>
            <div>

            </div>
        </header>
    )
};

export default Header;
