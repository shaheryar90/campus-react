import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import { Row, Col } from 'antd'
import { Button } from 'react-bootstrap';
import 'firebase/auth';
import firebase from 'firebase/app';
import 'firebase/database';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom'

 class CompanyDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        companyName:'',
        field:'',
        qualificationRequired:'',
        experience:'',
        email:''

        }
    }
 Postjob = () => {
        const data={
            email:this.state.email,
            field:this.state.field,
             qualificationRequired:this.state.qualificationRequired,
            companyName:this.state.companyName,
            experience:this.state.experience,
        }
        firebase.database().ref('postJob/').push(data).then((res)=>{
            alert("suceesfully register")
            console.log("succesfully post Job",res)
            console.log("succesfully post Job",res.key)
            firebase.database().ref('postJob/').child(res.key).update({id:res.key}).then((res)=>{
            this.props.history.push('/companyPanel')
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
                <Form style={{ padding: 20, margin: 'auto',boxShadow: "10px 10px 10px 10px #aaaaaa",marginTop:10, width: '50%', flexWrap:'wrap', borderRadius: 20, alignSelf: 'center', justifyContent: 'center', textAlign: 'center', alignSelf: 'center', border: "1px solid white" }}>
                    <h2>Campus Recruitment drive </h2>
                 <h4>Post a job</h4>
               
                    <Form.Group style={{marginTop:20}}controlId="formBasicEmail">
                        <Form.Label style={{ fontSize: 20 }}>Company Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter company name" onChange={(e) => this.setState({ companyName: e.target.value })} />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ fontSize: 20 }} >Field</Form.Label>
                        <Form.Control type="text" placeholder="Field" onChange={(e) => this.setState({ field: e.target.value })} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ fontSize: 20 }} >Qualification Required</Form.Label>
                        <Form.Control type="text" placeholder="Qualification required for the job" onChange={(e) => this.setState({ qualificationRequired: e.target.value })}/>
                    </Form.Group>
                 
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ fontSize: 20 }} >Experience</Form.Label>
                        <Form.Control type="text" placeholder="Experience Required" onChange={(e) => this.setState({ experience: e.target.value })}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ fontSize: 20 }} >Email for applied</Form.Label>
                        <Form.Control type="text" placeholder="Email for applied" onChange={(e) => this.setState({ email: e.target.value })}/>
                    </Form.Group>
                        <Button onClick={this.Postjob} style={{ marginRight: 5 }} variant="secondary">Job Post</Button>{' '}

                </Form>
            </>
        )
    }
}
export default withRouter(CompanyDashboard)