import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import { Row, Col } from 'antd'
import { Button } from 'react-bootstrap';
import 'firebase/auth';
import firebase from 'firebase/app';
import 'firebase/database';

import { withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

class AdminPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      role:''
    }
  }


  SignUp = async () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then( async(userCredential) => {
        // Signed in
        var user1 = userCredential.user.uid
        const data = {
          email: this.state.email,
          password: this.state.password,
          role: 'admin',
          confirmPassword: this.state.confirmPassword,


        }
        firebase.database().ref('users/'+user1).set(data);
          console.log("succesfully register")
          this.props.history.push('/')
      })
      // ...
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
      });
  }

  render() {
    return (
      <>

        <Form style={{ padding: 20, margin: 'auto', marginTop: 10, width: '40%', boxShadow: "10px 10px 10px 10px #aaaaaa", height: 500, borderRadius: 20, alignSelf: 'center', justifyContent: 'center', textAlign: 'center', alignSelf: 'center', border: "1px solid white" }}>
          <p>Sign Up As a Admin</p>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ fontSize: 20 }}>Email address</Form.Label>
            <Form.Control type="email" onChange={(e) => this.setState({ email: e.target.value })} placeholder="Enter email" />

          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ fontSize: 20 }} >Password</Form.Label>
            <Form.Control type="password" onChange={(e) => this.setState({ password: e.target.value })} placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ fontSize: 20 }} >Confirm password</Form.Label>
            <Form.Control type="password" onChange={(e) => this.setState({ confirmPassword: e.target.value })} placeholder="Confirm password" />
          </Form.Group>
          {/* <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ fontSize: 20 }} >position</Form.Label>
            <Form.Control type="role" onChange={(e) => this.setState({ role: e.target.value })} placeholder="Role" />
          </Form.Group> */}


          <Button onClick={this.SignUp} variant="primary">Sign Up</Button>{' '}
        </Form>
      </>
    )
  }
}
export default withRouter(AdminPage)
