import './App.css';
import NavBar from './components/navbar/navbar1';
import Welcome from './components/headerbody/body1';
import About1 from './components/body/bodyContent1';
import LearningDock from './components/body/bodyContent2';
import ProgrammingDock from './components/body/bodyContent3';
import FooterComponent from './components/body/bodyContent4';
import "./index.css";

function App() {
    return ( 
        <div className = "App" >
            <NavBar />
            <Welcome />
            <About1 />
            <LearningDock />
            <ProgrammingDock />
            <FooterComponent />
        </div>
    );
}

export default App;