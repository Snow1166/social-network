import './App.css';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileConteiner";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import LoginContainer from "./components/Login/LoginContainer";
import {Component} from "react";
import {connect} from "react-redux";
import {initializedApp} from "./redux/app-reducer";
import Preloader from "./common/Preloader/Preloader";


class App extends Component {
    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='/music/*' element={<Music/>}/>
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/users/*' element={<UsersContainer/>}/>
                        <Route path='/settings/*' element={<Settings/>}/>
                        <Route path='/login/*' element={<LoginContainer/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.appPage.initialized
})
export default connect(mapStateToProps, {initializedApp})(App);
