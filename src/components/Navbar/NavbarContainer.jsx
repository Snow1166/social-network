import Navbar from "./Navbar";

const NavbarContainer = (props) => {

    let state = props.store.getState().navBarPage.siteBar

    return <Navbar siteBar={state}/>
};

export default NavbarContainer;
