/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
// import from reactbootstrap
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate,useParams } from "react-router-dom";
import CourseService from './Services/Services';


const EditList = () => {
       // const baseURL = "http://localhost:3000/Courses";
        const navigate = useNavigate();

    // hooks
  
        const { id } = useParams();

    const [entercourseName, setentercourseName] = useState('');
    const [entercourseDesc, setentercourseDesc] = useState('');

    const getDetails = () => {
        //  axios.get(baseURL + '/' + id)
        CourseService.getCoursesById(id)
         .then(response =>{
            const CourseVar = response.data;
            setentercourseName(CourseVar.name);
            
            // console.log(nik.name);
            setentercourseDesc(CourseVar.description);

         })
         .catch(error=>{
            console.error("Error fetching course data : " + error); 

        });
    }
    // coursename change handler
    const courseNameChangeHandler = (event) => {

        setentercourseName(event.target.value);
        // console.log(event.target.value)
    }
    // coursename desc handler
    const courseDescChangeHandler = (event) => {

        setentercourseDesc(event.target.value);
        // console.log(event.target.value);
    };
    // Add sumbitactiohandler

    const submitActionHandler = (event) => {
        event.preventDefault();
        // axios.put(baseURL + '/' + id  , { 
        //     name: entercourseName,
        //     description: entercourseDesc
        //   })
        CourseService.updateCourse(id,{
             name: entercourseName,
             description: entercourseDesc


        })
        .then((response) => {
            console.log(response.data);
                  alert("Course " + entercourseDesc + " is Updated!");
                  navigate("/link");
                }).catch(error => {
                  alert("error while editing course" + error);
                });

          
    
    }
          useEffect( () => {
              if (id)
              getDetails(id);
          },[id]);

    return (
        <div className="App">
            <Alert variant='secondary'>
                <Container id='background'>
                    <Form onSubmit={submitActionHandler}>
                        <Form.Group controlId="form.Name" >
                            <Form.Label>Course Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter The Course" value={entercourseName}    onChange = {courseNameChangeHandler} required />
                        </Form.Group>
                        <Form.Group controlId="form.Role">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter the description" value={entercourseDesc}   onChange = {courseDescChangeHandler} required />
                        </Form.Group>
                        <br></br>
                        <Button type='submit'>Update Course</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button type='submit'>Cancel</Button>
                    </Form>

                </Container>
            </Alert>

        </div>

    );
  }

export default  EditList;