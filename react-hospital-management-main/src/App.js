import './App.css';
import NavItem from './components/NavItem';
import DashBoard from './pages/DashBoard'
import Admit from './pages/Admit'
import UpdatePatient from './pages/UpdatePatient';
import PatientDetails from './pages/PatientDetails';
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import AllPatients from './pages/AllPatients';
import CovidPatients from './pages/CovidPatients';
function App() {
  return (
    <div>
      <h1>MEDICO HOSPITALS!!</h1>
    <HashRouter>
      <div className="appContainer">
        <div className="navContainer">
             <div className="logo">
                  <img alt="logo" className="logoImg" src="https://static.vecteezy.com/system/resources/previews/000/579/678/original/health-people-human-character-logo-sign-illustration-vector.jpg"/>
             </div>
             <ul className="navLinks">
                <li>
                  <NavLink className="link" style={{textDecoration:'none',}} to="/">
                    <NavItem linkName="dashboard"/>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" style={{textDecoration:'none'}} to="/covidCases">
                    <NavItem linkName="covid cases"/>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" style={{textDecoration:'none'}} to="/allpatients">
                    <NavItem linkName="all patients"/>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" style={{textDecoration:'none',}} to="/admitpatient">
                    <NavItem linkName="admit"/>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" style={{textDecoration:'none',}} to="/dischargepatient">
                    <NavItem linkName="discharge"/>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link" style={{textDecoration:'none',}} to="/updatepatient">
                    <NavItem linkName="update"/>
                  </NavLink>
                </li>
            </ul>
            <div className="bottomContainer">
              <ul className="navLinks">
                <li>
                  {/* <NavLink className="link" style={{textDecoration:'none',}} to="/updatepatient">
                        <NavItem linkName="logout"></NavItem>
                  </NavLink> */}
                  {/* <button type="submit" color='success'><a href='http://localhost:3001/'>Log out</a></button> */}
                  <a href="http://localhost:3001/" target="_blank">
  <button> LOG OUT </button>
</a>
                </li>
              </ul>
            </div>
        </div>
        <div className = "pageContainer">
            <Route exact path="/" component={DashBoard}/>
            <Route exact path="/admitpatient" component={Admit}/>
            <Route exact path="/updatepatient" component={UpdatePatient}/>
            <Route exact path="/allpatients" component={AllPatients}/>
            <Route exact path="/covidcases" component={CovidPatients}/>
            <Route exact path="/patient" component={PatientDetails}/>
        </div>
      </div>
    </HashRouter>
    <div class='kk'>
    <div class="icons-bg">
           
           <p > <FaFacebook /> <a href="https://www.facebook.com/" class="icon">Facebook</a> </p> 
           <p ><FaTwitterSquare /> <a href="https://twitter.com/i/flow/login" class="icon">Twitter</a></p>
           <p > <FaYoutube /> <a href="https://www.youtube.com/"class="icon">YouTube</a></p>
           <p ><FaLinkedin /> <a href="https://in.linkedin.com/" class="icon">LinkedIn</a></p>
          </div>
    </div>
    </div>
  );
}

export default App;
