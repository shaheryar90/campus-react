import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import { Row, Col } from 'antd'
import { Button } from 'react-bootstrap';
import 'firebase/auth';
import firebase from 'firebase/app';
import 'firebase/database';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom'
class StudentDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: '',
            field: '',
            qualification: '',
            experience: '',
            email: ''

        }
    }
    StudentRegistration = () => {
        const data = {
            email: this.state.email,
            field: this.state.field,
            qualification: this.state.qualification,
            Name: this.state.Name,
            experience: this.state.experience,
        }
        firebase.database().ref('RegisterStudent/').push(data).then((res) => {
            alert("suceesfully register")
            console.log("succesfully post Job", res.key)
            firebase.database().ref('RegisterStudent/').child(res.key).update({ id: res.key }).then((res) => {
                this.props.history.push('/studentPanel')
            })
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
                <Form style={{ padding: 20, margin: 'auto', boxShadow: "10px 10px 10px 10px #aaaaaa", marginTop: 10, width: '50%', height: 640, borderRadius: 20, alignSelf: 'center', justifyContent: 'center', textAlign: 'center', alignSelf: 'center', border: "1px solid white" }}>
                    <h2>Campus Recruitment drive </h2>
                    <h4>Register</h4>

                    <Form.Group style={{ marginTop: 20 }} controlId="formBasicEmail">
                        <Form.Label style={{ fontSize: 20 }}>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter the Name" onChange={(e) => this.setState({ Name: e.target.value })} />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ fontSize: 20 }} >Email for applied</Form.Label>
                        <Form.Control type="text" placeholder="Email for applied" onChange={(e) => this.setState({ email: e.target.value })} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ fontSize: 20 }} >Field</Form.Label>
                        <Form.Control type="text" placeholder="Field" onChange={(e) => this.setState({ field: e.target.value })} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ fontSize: 20 }} >Higher Qualification</Form.Label>
                        <Form.Control type="text" placeholder="Higher Qualification" onChange={(e) => this.setState({ qualification: e.target.value })} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ fontSize: 20 }} >Experience</Form.Label>
                        <Form.Control type="text" placeholder="Experience" onChange={(e) => this.setState({ experience: e.target.value })} />
                    </Form.Group>

                    <Button onClick={this.StudentRegistration} style={{ marginRight: 5 }} variant="secondary">Job Post</Button>{' '}

                </Form>
            </>
        )
    }
}
export default withRouter(StudentDashboard)