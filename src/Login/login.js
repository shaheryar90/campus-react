import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import { Row, Col } from 'antd'
import { Button } from 'react-bootstrap';
import 'firebase/auth';
import firebase from 'firebase/app';
import 'firebase/database';



import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    // componentDidMount(){
    //     console.log(this.state.email)
    // }
    SignUp = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((userCredential) => {
                // Signed in
                var usersId = userCredential.user.uid;
            localStorage.setItem('userID',usersId);
                console.log(usersId, "uid")
                firebase.database().ref().child("users").child(usersId).get().then((snapshot) => {
                    if (snapshot.exists()) {
                        console.log(snapshot.val());
                        if(snapshot.val().role ==='company'){
                            this.props.history.push('/companyPanel')}
                        else if(snapshot.val().role ==='student'){
                            this.props.history.push('/studentPanel')}
else{
    this.props.history.push('/AdminPanel')
}
                        
                    } else {
                        console.log("No data available");
                    }
                }).catch((error) => {
                    console.error(error);
                });
                console.log("succcesfully login")
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }
    render() {
        // console.log(this.state.email)
        return (
            <>

                <Form style={{ padding: 20, width: '50%', boxShadow: "10px 10px 10px 10px #aaaaaa", flexWrap:'wrap', borderRadius: 20, justifyContent: 'center', alignItems: 'center', textAlign: 'center', alignSelf: 'center', border: "1px solid white", margin: "auto", marginTop: 20 }}>
                    <p>Login</p>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ fontSize: 20 }}>Email address</Form.Label>
                        <Form.Control onChange={(e) => this.setState({ email: e.target.value })} type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ fontSize: 20 }} >Password</Form.Label>

                        <Form.Control onChange={(e) => this.setState({ password: e.target.value })} type="password" placeholder="Password" />

                    </Form.Group>

                    <Button onClick={this.SignUp} variant="primary">login</Button>{' '}
                    <div style={{ display: 'flex', margin: 10, textAlign: 'center', justifyContent: 'center' }}>
                        <Button onClick={() => this.props.history.push('/student')} style={{ marginRight: 5 }} variant="primary">Sign up As a student</Button>{' '}
                        <Button onClick={() => this.props.history.push('/company')} style={{ marginRight: 5 }} variant="secondary">Sign up As a company</Button>{' '}
                        <Button onClick={() => this.props.history.push('/admin')} variant="success">Sign up As a Admin</Button>{' '}
                    </div>
                </Form>
            </>
        )
    }
}
export default withRouter(Login)