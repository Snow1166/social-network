import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateMethodMode = () => {
        setEditMode(true)
    }

    const deactivateMethodMode = () => {

        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
            setStatus(props.status)
        }, [props.status]
    )

    return (<div>
        {!editMode
            ? <div>
                <span onDoubleClick={activateMethodMode}>{props.status || 'Задать статус'}</span>
            </div>
            : <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateMethodMode} value={status} type=""/>
            </div>
        }
    </div>)
}


export default ProfileStatus;
