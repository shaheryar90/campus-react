import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import { Row, Col } from 'antd'
import { Button } from 'react-bootstrap';
import 'firebase/auth';
import firebase from 'firebase/app';
import 'firebase/database';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom'

 class StudentPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            qualification:'',
             role:'',

        }
    }
    SignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredential) => {
        // Signed in
        var user2 = userCredential.user.uid
        const data={
            email:this.state.email,
            password:this.state.password,
            qualification:this.state.qualification,
            role:"student",
        }
                firebase.database().ref('users/'+user2).set(data);
                  console.log("succesfully register")
                  this.props.history.push('/')
                })
        // ...
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    }
  
    render() {
        return (
            <>
                {/* <p>student</p> */}
                <Form style={{ padding: 20, margin: 'auto',boxShadow: "10px 10px 10px 10px #aaaaaa",marginTop:10, width: '50%', height: 500, borderRadius: 20, alignSelf: 'center', justifyContent: 'center', textAlign: 'center', alignSelf: 'center', border: "1px solid white" }}>
                    <p>Sign Up As a student</p>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ fontSize: 20 }}>Email address</Form.Label>
                        <Form.Control type="email" onChange={(e)=> this.setState({email:e.target.value})} placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ fontSize: 20 }} >Password</Form.Label>
                        <Form.Control type="password" onChange={(e)=> this.setState({password:e.target.value})} placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ fontSize: 20 }} >Qualification</Form.Label>
                        <Form.Control type="text"  onChange={(e)=> this.setState({qualification:e.target.value})}  placeholder="Last Qualification" />
                    </Form.Group>
                    {/* <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ fontSize: 20 }} >position</Form.Label>
                        <Form.Control type="text"  onChange={(e)=> this.setState({role:e.target.value})}  placeholder="role" />
                    </Form.Group> */}

                    <Button  onClick={this.SignUp}  variant="primary">Sign Up</Button>{' '}

                </Form>
            </>
        )
    }
}
export default withRouter(StudentPage)