import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'firebase/auth';
import firebase from 'firebase/app';
import 'firebase/database';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { AiFillDelete } from "react-icons/ai";

class ViewCompanyData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: '',
            field: '',
            qualification: '',
            experience: '',
            email: '',
            allStudentData: []

        }
    }
    componentDidMount() {
      this.GetData()
    }
 GetData =() =>{
    firebase.database().ref('postJob/').get().then((snapshot) => {

        // var allStudentData=[]
        if (snapshot.exists()) {
            // console.log(snapshot.val(), "data");
            const data = Object.values(snapshot.val())
            // console.log(data)
            this.state.allStudentData.push(snapshot.val())
            //  this.setState(allStudentData:e.target.value)
            // console.log(allStudentData, "allstudent");
            this.setState({
                allStudentData: data

            })
            this.GetData()
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
 }
    //     .get().then((res)=>{
    //         alert("suceesfully register")
    //         console.log("succesfully post Job",res)
    //         this.props.history.push('/studentPanel')
    //     })

    //     // ...
    //   .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //   });
    // }

    DeleteButton = (id)  => {
        console.log(id,"delete key")
       firebase. 
       database()
        .ref('postJob/')
        .child(id)
        .remove()
        .then(() => {
            var allCompanyJobs = [];
            firebase
            .database()
            .ref('postJob/')
              .once('value')
              .then((snapshot) => {
                console.log('User data:===> ', snapshot.val());
                var dbData = snapshot.val();
                for (var key in dbData) {
                    console.log(key,"keyyy")
                  dbData[key].id = key;
                //   console.log(dbData[key].id,"dtataat")
                  allCompanyJobs.push(dbData[key]);
                }
                // console.log('sdadasdas', allCompanyJobs);
                this.setState({
                  allStudentData: allCompanyJobs,
                });
            });
        });
    };
    render() {
        // console.log(this.props.location.state, "sdjhasjkdas")
        return (

            <>
                <h2 style={{textAlign:'center',marginTop:10,fontFamily:'bold'}}>All Company jobs</h2>
                <Row style={{ display: "flex", justifyContent: "space-around", margin: '20px' }}>
                    {
                        this.state.allStudentData.map((items) => {

                            // console.log(items.id,"ksdjklsjdla")
                            return <Col md={{ span: 4, offset: 1 }} style={{ boxShadow: "10px 10px 10px 10px #aaaaaa", marginTop: 10, margin: 10, flexWrap: 'wrap', borderRadius: 20, border: "1px solid white" }}>
                                {/* <h2>Campus Recruitment drive </h2>
                    <h4>Register</h4> */}
                                <div style={{ display: 'flex' }}>

                                    {this.props.location.state === 'admin' ? (
                                        <>
                                        <div onClick={() => this.DeleteButton(items.id)} style={{justifyContent:'center'}}>
                                    < AiFillDelete size={20}  />
                                    <p style={{marginLeft:-3}}>delete</p> 
                                    </div>
                                    </>
                                    ) : null}
                                 

                                </div>
                                <div style={{border:'1px solid lightGray',width:'80%',marginBottom:5}}></div>
                                <div style={{ display: 'flex' }}>
                                    <h4 style={{ width: '50%' }}>Company Name:</h4>
                                    <p style={{ marginLeft: 50 }}>{items.companyName}</p>


                                </div>
                                <div style={{ display: 'flex' }}>
                                    <h4 style={{ width: '50%' }}>Email:</h4>
                                    <p style={{ marginLeft: 50 }}>{items.email}</p>


                                </div>
                                <div style={{ display: 'flex' }}>
                                    <h4 style={{ width: '50%' }}>Experience:</h4>
                                    <p style={{ marginLeft: 50 }}>{items.experience}</p>


                                </div>
                                <div style={{ display: 'flex' }}>
                                    <h4 style={{ width: '50%' }}>Field:</h4>
                                    <p style={{ marginLeft: 50 }}>{items.field}</p>


                                </div>
                                <div style={{ display: 'flex' }}>
                                    <h4 style={{ width: '50%' }}>Qualification Req:</h4>
                                    <p style={{ marginLeft: 50 }}>{items.qualificationRequired}</p>


                                </div>


                                {/* <Button onClick={this.StudentRegistration} style={{ marginRight: 5 }} variant="secondary">Job Post</Button>{' '} */}

                            </Col>
                        })
                    }
                </Row>


            </>
        )
    }
}
export default withRouter(ViewCompanyData)