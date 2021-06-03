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

class ViewStudentData extends Component {
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
       this.getData()
    }

    getData= () =>{
        firebase.database().ref('RegisterStudent/').get().then((snapshot) => {

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

                }
              
                )
                this.getData()
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
        .ref('RegisterStudent/')
        .child(id)
        .remove()
        .then(() => {
            var allCompanyJobs = [];
            firebase
            .database()
            .ref('RegisterStudent/')
              .once('value')
              .then((snapshot) => {
                console.log('User data:===> ', snapshot.val());
                var dbData = snapshot.val();
                for (var key in dbData) {
                    console.log(key,"keyyy")
                  dbData[key].id = key;
                  console.log(dbData[key].id,"dtataat")
                  allCompanyJobs.push(dbData[key]);
                }
                console.log('sdadasdas', allCompanyJobs);
                this.setState({
                  allStudentData: allCompanyJobs,
                });
            });
        });
    };
    render() {
        // console.log(this.state.allStudentData, "sdjhasjkdas")
        // console.log(this.props.location.state,"ahrha hai")
        return (

            <>
                <h2 style={{textAlign:'center',fontFamily:'bold'}}>All Student Data</h2>
                <Row style={{ display: "flex", justifyContent: "space-around", margin: '20px' }}>
                    {
                        this.state.allStudentData.map((items) => {

                            return <Col md={{ span: 4, offset: 1 }} style={{ boxShadow: "10px 10px 10px 10px #aaaaaa", marginTop: 10, margin: 10, flexWrap: 'wrap', borderRadius: 20,   border: "1px solid white" }}>
                                {/* <h2>Campus Recruitment drive </h2>
                    <h4>Register</h4> */}
                                <div style={{ display: 'flex' }}>

                                {this.props.location.state === 'admin' ? (
                                        <>
                                        <div  onClick={() => this.DeleteButton(items.id)}>
                                    < AiFillDelete size={20} />
                                    <p style={{marginLeft:'-4px'}}>delete</p> 
                                    </div>
                                    </>
                                    ) : null}
                                 
                                </div>
                                <div style={{border:'1px solid lightGray',width:'80%',marginBottom:5}}></div>
                                <div style={{ display: 'flex', marginTop: 5 }}>
                                    <h4 style={{ width: '50%' }}>Name:</h4>
                                    <p>{items.Name}</p>


                                </div>
                                <div style={{ display: 'flex' }}>
                                    <h4 style={{ width: '50%' }}>Email:</h4>
                                    <p>{items.email}</p>


                                </div>
                                <div style={{ display: 'flex' }}>
                                    <h4 style={{ width: '50%' }}>Experience:</h4>
                                    <p>{items.experience}</p>


                                </div>
                                <div style={{ display: 'flex' }}>
                                    <h4 style={{ width: '50%' }}>Field:</h4>
                                    <p>{items.field}</p>


                                </div>
                                <div style={{ display: 'flex' }}>
                                    <h4 style={{ width: '50%' }}>Qualification:</h4>
                                    <p>{items.qualification}</p>


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
export default withRouter(ViewStudentData)