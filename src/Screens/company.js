import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import { Row, Col } from 'antd'
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'firebase/auth';
import firebase from 'firebase/app';
import 'firebase/database';
import { withRouter } from 'react-router-dom'



class CompanyPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            companyName:'',
            // position:'',
            role:''

        }
    }


    componentDidMount(){
        
    }
    SignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user.uid
        const data={
            email:this.state.email,
            password:this.state.password,
            companyName:this.state.companyName,
            // position:this.state.position,
            role:'company',
        }
                firebase.database().ref('users/'+user).set(data);
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

        console.log(this.state.position)
        return (
            <>
                <p>company</p>
                <Form  style={{ padding: 20, margin: 'auto', marginTop: 10, width: '50%', height: 500, borderRadius: 20, alignSelf: 'center', justifyContent: 'center', textAlign: 'center', alignSelf: 'center', border: "1px solid white", boxShadow: "10px 10px 10px 10px #aaaaaa" }}>
                    <p>Sign Up As a company</p>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ fontSize: 20 }}>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.setState({ email: e.target.value })} />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ fontSize: 20 }} >Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ fontSize: 20 }} >Company Name</Form.Label>
                        <Form.Control type="text" placeholder="Company Name" onChange={(e) => this.setState({ companyName: e.target.value })}/>
                    </Form.Group>
                 
                    {/* <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ fontSize: 20 }} >Position</Form.Label>
                        <Form.Control type="text" placeholder="role" onChange={(e) => this.setState({ role: e.target.value })}/>
                    </Form.Group> */}

                    <Button  onClick={this.SignUp} variant="primary">Sign Up</Button>{' '}
                </Form>
            </>
        )
    }
}
export default withRouter(CompanyPage)
