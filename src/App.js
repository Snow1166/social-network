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


const App = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavbarContainer />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile/:userId' element={<ProfileContainer />}/>
                    <Route path='/dialogs/*' element={<DialogsContainer />}/>
                    <Route path='/music/*' element={<Music/>}/>
                    <Route path='/news/*' element={<News/>}/>
                    <Route path='/users/*' element={<UsersContainer />}/>
                    <Route path='/settings/*' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
