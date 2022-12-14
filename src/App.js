import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer';
import ProtectedRoute from './utils/ProtectedRoute/ProtectedRoute';
import Bvnverification from './pages/Statement';
import MessageModal from './components/MessageModal';
//import Saveprofile from './pages/Saveprofile'

const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const Index = lazy(() => import('./pages/Index'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const CreateAccount = lazy(() => import('./pages/CreateAccount'))
const Saveprofile = lazy(() => import('./pages/Saveprofile'))
const Application = lazy(() => import('./pages/Applicationsuccess'))
const UpdateProfile = lazy(() => import ('./pages/UpdateProfile'))
const Personaldetails = lazy(() => import ('./pages/Personaldetails'))


function App() {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <MessageModal/>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/saveprofiles" component={Saveprofile} />
          <Route 
             path="/create-account" 
             component={CreateAccount} />
             
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/application-success" component={Application} />
          <Route path="/updateprofile" component={UpdateProfile} />
          <Route path="/personaldetails" component={Personaldetails} />
        
          {/* Place new routes over this */}
          <Route path="/app" component={Layout} />
          <Route path="/" component={Index} />
          

          {/* If you have an index page, you can remothis Redirect */}
          {/* <Redirect exact from="/" to="/login" /> */}
        </Switch>
      </Router>
    </>
  )
}

export default App
