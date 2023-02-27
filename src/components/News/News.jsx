import style from './News.module.css'
import React, {useEffect, useState} from "react";
import axios from "axios";


const News = (props) => {
    const [count, setCount] = useState(0)
    const [buttonState, setState] = useState(true)

    useEffect (() => {
        document.title = `Вы нажали ${count} раз`;
    })
    // const photo = 'https://i.ibb.co/Xy79jNM/IMG-1850.jpg'!


    const sendPhoto = () => {
        let formData = new FormData()
        let imageFile = document.querySelector('#photo')
        let im = document.getElementById('photo')
        debugger
        formData.append('image', imageFile.files[0])
        const photo = document.getElementById('photo')
        axios.put('https://social-network.samuraijs.com/api/1.0/profile/photo', formData, {withCredentials: true, headers: {'Content-Type': 'multipart/form-data'}}, )
            .then(response => {} )
    }


    return(
        <div>
            News
            <div>
                <input type="file" id='photo'/>
                <button onClick={sendPhoto}>send photo</button>
                <div><span>{count}</span></div>
                <div>

                    <button disabled={buttonState} onClick={() => setCount(count + 1)} >+1</button>
                    <button onClick={() => setState(!buttonState)}>{buttonState ? 'enabled ' : 'disabled'}</button>
                </div>
            </div>
        </div>
    )
};

export default News
