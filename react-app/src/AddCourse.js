
import React, {useState} from 'react';

import { useNavigate } from "react-router-dom";
import axios from 'axios';
import  {Form ,Button , Container, Alert  } from 'react-bootstrap';
import CourseService from './Services/Services';


//HOOKS

function AddCourse() {
    //const baseURL = "http://localhost:3000/Courses";

    const navigate = useNavigate();

    
    const [courseName, setcourseName] = useState('');
    const [courseDesc, setcourseDesc] = useState('');

// coursename change handler
const courseNameChangeHandler = (event) => {

    setcourseName(event.target.value);
    // console.log(event.target.value);
};

// coursename desc handler
const courseDescChangeHandler = (event) => {

    setcourseDesc(event.target.value);
    // console.log(event.target.value);
};


// Add sumbitactiohandler



const submitActionHandler = (event) => {
    event.preventDefault();
    //  axios.post(baseURL,{
    //     name : courseName,
    //     description : courseDesc
    // })

    CourseService.createCourse({ name : courseName,
        description : courseDesc
    })
    .then((response)=>{
        console.log(response);
        alert("Course " + courseName + " is added!");
        navigate("/");
    }).catch(error => {
        alert("error===" + error);
      });

};
  return (
    <div className="App">
            <Alert variant='dark'>
                <Container>
                    <Form onSubmit={submitActionHandler}>
                        <Form.Group controlId="form.Name" >
                            <Form.Label>Course Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter The Course" value={courseName} onChange = {courseNameChangeHandler} required />
                        </Form.Group>
                        <Form.Group controlId="form.Role">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter the description" value={courseDesc} onChange = {courseDescChangeHandler} required />
                        </Form.Group>
                        <br></br>
                        <Button type='submit'>Add Course</Button>
                      
                    </Form>

                </Container>
            </Alert>

    
    </div>
  )
};

export default AddCourse;