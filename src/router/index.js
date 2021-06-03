// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from '../Login/login'
import StudentPage from '../Screens/student'
import AdminPage from '../Screens/Admin'
import CompanyPage from '../Screens/company'
import CompanyPanel from '../Screens/CompanyPanel'
// import AdminPanel from '../Screens/AdminPanel'
import StudentPanel from '../Screens/studentPanel'
import CompanyDashboard from '../Screens/companyDashboard'

// import ViewJobs from '../Screens/viewStudentData'
import React, { Component } from 'react'
import StudentDashboard from "../Screens/studentDashboard";
import ViewStudentData from "../Screens/viewStudentData";
import ViewCompanyData from "../Screens/viewCompanyData";
import AdminPanel from "../Screens/AdminPanel";
// import { connect } from 'react-redux'

export default class RouterPage extends Component {
    render() {
        return (
    <Router>
<div>
  <Switch>
    <Route path="/" exact>
      <Login />
    </Route>
    <Route path="/student" >
      <StudentPage />
    </Route>
    <Route path="/company" >
      <CompanyPage />
    </Route>
    <Route path="/admin" >
      <AdminPage />
    </Route>
    <Route path="/companyPanel" >
      <CompanyPanel />
    </Route>
    <Route path="/companyDashboard" >
      <CompanyDashboard />
    </Route>
    <Route path="/studentPanel" >
      <StudentPanel/>
    </Route>
    <Route path="/studentDashboard" >
      <StudentDashboard/>
    </Route>
    <Route path="/viewStudentData" >
      <ViewStudentData/>
    </Route>
    <Route path="/viewCompanyData" >
      <ViewCompanyData ViewDeleteIcon={true} />
    </Route>
    <Route path="/adminPanel" >
      <AdminPanel/>
    </Route>
    {/* <Route path="/">
      <Home />
    </Route> */}
  </Switch>
</div>
</Router>
        )
    }
}


