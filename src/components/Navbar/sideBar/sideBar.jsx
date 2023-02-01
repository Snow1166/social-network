const SideBar = (props) => {
    return (
        <div className='ggg'>
            <div><img className={'ava'} src={props.ava} alt=""/></div>
            <div>{props.name}</div>
        </div>
    )
}
export default SideBar;
