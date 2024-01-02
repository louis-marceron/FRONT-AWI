import LoginPage from './components/LoginPage'
import WelcomePage from './components/WelcomePage'
import RegisterPage from './components/RegisterPage'
import PlanningPage from './components/PlanningPage'
import ZonePage from './components/ZonePage'
import Layout from './components/Layout'
import UserPerEvenement from './components/UserPerEvenement'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Layout/>}>
            <Route path = "/" element = {<WelcomePage/>} />  
            <Route path = "/login" element = {<LoginPage/>} />  
            <Route path = "/register" element = {<RegisterPage/>} /> 
            <Route path = "/zones" element = {<ZonePage/>} /> 
            <Route path = "/planning" element = {<PlanningPage/>} /> 
            <Route path = "/UserPerEvenement" element = {<UserPerEvenement/>} /> 

        </Route>
        
      </Routes>
   </Router>
  )


}

export default App
