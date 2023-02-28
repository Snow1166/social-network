import style from "./Paginator.module.css";
import React, {useState} from "react";


const Paginator = ({currentPage, totalItemCount, pageSize, onPageChanged, portionSize=10}) => {

    let pages = []
    // for (let i = 1; i <= 10; i++) {  // i <= pageCount
    //     pages.push(i)
    // }
    let pageCount = Math.ceil(totalItemCount / pageSize)
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pageCount / portionSize);
    const [portionNumber , setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div className={style.paginator}>
            {leftPortionPageNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => <span key={p} onClick={() => onPageChanged(p)}
                                  className={currentPage === p ? style.selectedPage : style.nonSelected}>{p} </span>)}
            {portionNumber < portionCount && <button onClick={() => setPortionNumber(portionNumber + 1)} >NEXT</button>}
        </div>
    )
}
export default Paginator;
