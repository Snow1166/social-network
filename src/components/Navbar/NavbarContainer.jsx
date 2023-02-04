import Navbar from "./Navbar";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        siteBar: state.navBarPage.siteBar
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer;
