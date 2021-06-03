import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import { Row, Col } from 'antd'
import { Button } from 'react-bootstrap';
import 'firebase/auth';
import firebase from 'firebase/app';
import 'firebase/database';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter,Redirect } from 'react-router-dom'

 class StudentPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
        

        }
    }
    SignOut = () => {
      
        firebase.auth().signOut().then(() => {
            alert("successfully signOut")
            localStorage.removeItem('userID')
            this.props.history.push('/')
          }).catch((error) => {
            // An error happened.
          });
        }
    render() {

        const userId = localStorage.getItem("userID")
        console.log(userId, "Id")
        if (!userId) {
            return <Redirect to="/" />
        }
        return (
            <>
                {/* <p>student</p> */}
                <Form style={{ padding: 20, margin: 'auto',boxShadow: "10px 10px 10px 10px #aaaaaa",marginTop:10, borderRadius: 20, alignSelf: 'center', justifyContent: 'center', textAlign: 'center', alignSelf: 'center', border: "1px solid white" }}>
                   
                    <h1>Campus Recruitment drive </h1>
                   
                 <p> welcome to the student Panel !!</p>
                    {/* <div style={{ display: 'flex', margin: 10, textAlign: 'center', justifyContent: 'center' }}> */}
                        <Button onClick={() => this.props.history.push('/studentDashboard')} style={{ marginRight: 5 }} variant="primary">Register As a student for applying jobs</Button>{' '}
                        <Button onClick={() => this.props.history.push('/viewCompanyData')} style={{ marginRight: 5 }} variant="secondary">View All jobs</Button>{' '}
                    <Button onClick={this.SignOut} variant="danger">Sign Out</Button>{' '}
                        {/* <Button onClick={() => this.props.history.push('/admin')} style={{marginTop:10}} variant="success">Sign up As a Admin</Button>{' '} */}
                    {/* </div> */}
                </Form>
            </>
        )
    }
}
export default withRouter(StudentPanel)