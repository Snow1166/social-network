import style from "./Paginator.module.css";
import React from "react";


const Paginator = ({currentPage, totalUsersCount, pageSize, onPageChanged}) => {

    let pages = []
    for (let i = 1; i <= 10; i++) {  // i <= pageCount
        pages.push(i)
    }
    // let pageCount = Math.ceil(totalUsersCount / pageSize)
    // for (let i = 1; i <= pageCount; i++) {
    //     pages.push(i)
    // }

    return (
        <div>
            {pages.map(p => <span key={p} onClick={() => onPageChanged(p)}
                                  className={currentPage === p ? style.selectedPage : style.nonSelected}> {p} </span>)}
        </div>
    )
}
export default Paginator;
