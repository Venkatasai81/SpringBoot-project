
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
// import form from "react-bootstrap";
import AddCourse from "./AddCourse";
import CourseList from "./CourseList";
// import UpdateList from "./UpdateList";

import EditList from "./UpdateList";


function App() {
  return (
    <BrowserRouter>

    <div className="App">
      
        
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        {/* <Link class="nav-link active" aria-current="page" to="/home">Home</Link> */}
        {/* <Link class="nav-link" to="/table">Add table</Link> */}
        <Link class="nav-link" to="/form">Add Course</Link>
        <Link class="nav-link" to="/CourseList">CourseList</Link>
        {/* <Link class="nav-link" to="UpdateList">UpdateList</Link> */}

        

      </div>
    </div>
  </div>
</nav>
      
    </div>
    <Routes>
      <Route exact path="/form" element={<AddCourse/>}/>
      <Route exact path="/CourseList" element={<CourseList/>}/>
      <Route exact path="/edit/:id" element={<EditList/>}/>


    </Routes>

    </BrowserRouter>
  );
}

export default App;
