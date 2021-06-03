import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import { Row, Col } from 'antd'
import { Button } from 'react-bootstrap';
import 'firebase/auth';
import firebase from 'firebase/app';
import 'firebase/database';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, withRouter } from 'react-router-dom'

class AdminPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }
    // SignUp = () => {
    //     firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    //   .then((userCredential) => {
    //     // Signed in
    //     var user2 = userCredential.user.uid
    //     const data={
    //         email:this.state.email,
    //         password:this.state.password,
    //         qualification:this.state.qualification,
    //         position:this.state.position,
    //     }
    //             firebase.database().ref('student/'+user2).push(
    //               data);
    //               console.log("succesfully register")
    //               this.props.history.push('/')
    //             })
    //     // ...
    //   .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //   });
    // }
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
        const ID= localStorage.getItem("userID")
        if(!ID){
            return <Redirect to="/"/>
        }
        return (
            <>
                {/* <p>student</p> */}
                <Form style={{ padding: 20, margin: 'auto', boxShadow: "10px 10px 10px 10px #aaaaaa", marginTop: 10, borderRadius: 20, alignSelf: 'center', justifyContent: 'center', textAlign: 'center', alignSelf: 'center', border: "1px solid white" }}>
                    <h1>Campus Recruitment drive </h1>
                    <p> welcome to the Admin Panel !!</p>
                    {/* <div style={{ display: 'flex', margin: 10, textAlign: 'center', justifyContent: 'center' }}> */}
                    <Button onClick={() => this.props.history.push({ pathname: "/viewCompanyData", state:"admin" })} style={{ marginRight: 5 }} variant="primary">Views All Jobs</Button>{' '}
                <Button onClick={() => this.props.history.push({ pathname: "/viewStudentData", state:"admin" })} style={{ marginRight: 5 }} variant="secondary">View All Student Data</Button>{' '}
                {/* <Button onClick={() => this.props.history.push('/admin')} style={{marginTop:10}} variant="success">Sign up As a Admin</Button>{' '} */}
                {/* </div> */}
                <Button onClick={this.SignOut} variant="danger">Sign Out</Button>{' '}
            </Form>
            </>
        )
    }
}
export default withRouter(AdminPanel)