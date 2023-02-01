import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.navBarPage}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile/*'
                           element={<Profile
                               state={props.state}
                               addPost={props.addPost}
                               updateTextPost={props.updateTextPost}
                           />}/>
                    <Route path='/dialogs/*' element={<Dialogs
                        state={props.state}
                        sendMessage={props.sendMessage}
                        updateTextMessage={props.updateTextMessage}
                        />}/>
                    <Route path='/music/*' element={<Music/>}/>
                    <Route path='/news/*' element={<News/>}/>
                    <Route path='/settings/*' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
