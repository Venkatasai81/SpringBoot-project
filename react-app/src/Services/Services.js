import axios from 'axios';

const Url_Link = "http://localhost:8080/api/v1/courses";
//const Url_Link = "http://localhost:3000/Courses";


class CourseService {
    // CRUD operation

    getCourses() {
        return axios.get(Url_Link);
    }

    getCoursesById(id) {
        console.log(id);
        return axios.get(Url_Link + '/' + id);
    }

    createCourse(data) {
        console.log(data)
        return axios.post(Url_Link, data);
    }

    updateCourse(id, course) {
        console.log(id)
        return axios.put(Url_Link + '/' + id, course);
    }


    deleteCourse(courseId) {
       return axios.delete(Url_Link + '/' + courseId);
    }
}

export default new CourseService();