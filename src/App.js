import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/Dialog/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavbarContainer store={props.store}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile/*' element={<Profile store={props.store}/>}/>
                    <Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>}/>
                    <Route path='/music/*' element={<Music/>}/>
                    <Route path='/news/*' element={<News/>}/>
                    <Route path='/settings/*' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
