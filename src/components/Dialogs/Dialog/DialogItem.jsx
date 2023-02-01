import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'dialogs/' + props.id} className={active => active.isActive ? s.active : s.dialog}>
                {props.name}
            </NavLink>
        </div>)
};

export default DialogItem;
