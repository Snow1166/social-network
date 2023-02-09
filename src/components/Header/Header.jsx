import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <img title="icon"
                 src="https://w7.pngwing.com/pngs/114/795/png-transparent-logo-piracy-others-miscellaneous-text-logo.png"/>
            <div className={style.loginBlock}>

                <NavLink to={'/login'}>{props.isAuth ? props.login : 'Login'}</NavLink>

            </div>
        </header>
    )
};

export default Header;
