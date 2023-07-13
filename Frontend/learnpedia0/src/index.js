import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Courses from './components/Courses';
import CoursePage from './components/CoursePage';
import Signupform from './components/Signupform';
import Loginform from './components/Loginform';
import Home from './components/Home';
import Card from './components/Card';
import CourseUploadform from './components/CourseUploadform';
import Courseinfo from './components/Courseinfo';
import Admin from './components/Admin';
import AdminCourses from './components/AdminCourses';
import StudentProfile from './components/StudentProfile';
import UpdateStudentProfile from './components/UpdateStudentProfile';
import StudentHome from './components/StudentHome';
import Help from "./components/Help";

// import firebaseConfig from './config/firebaseConfig';

//init firebase
// const app = initializeApp(firebaseConfig);

//redux
import {Provider} from 'react-redux'
import store from './store';
import LessonUpload from './components/LessonUpload';
import PlayListVideo from './components/PlayListVideo';
import InstructorHome from './components/InstructorHome';
import ModuleUpload from './components/ModuleUpload';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <Router>
    <Routes>
      
      <Route path='/' element={<App/>} >
      <Route index element={<Home/>}></Route>
        <Route path='educator' >
        <Route index element={<InstructorHome/>}></Route>
        <Route path='courseupload' element={<CourseUploadform/>}></Route>
        <Route path='lessonupload' element={<LessonUpload/>}></Route>
        <Route path='moduleupload' element={<ModuleUpload/>}></Route>
        </Route>
        <Route path='courses'  >
          <Route index element={<Courses/>}/>
          <Route path=':courseid' element={<PlayListVideo/>}></Route>
        </Route>
        <Route path='search' >
          <Route index element={<Courses/>}/>
          <Route path=':query' element={<Courses/>}></Route>
        </Route>
        <Route path='help'  >
          <Route index element={<Help/>}/>
        </Route>
        <Route path='card' element={<Card/>}></Route>
        <Route path='signup' element={<Signupform/>}></Route>
        <Route path='login' element={<Loginform/>}></Route>
        <Route path='ci' element={<Courseinfo/>}></Route>
        <Route path='admin' >
          <Route index element={<Admin/>}></Route>
          <Route path='courses' element={<AdminCourses/>}></Route>
        </Route>
        <Route path='sprofile' element={<StudentProfile/>}></Route>
        <Route path='usprofile' element={<UpdateStudentProfile/>}></Route>
        <Route path='shome' element={<StudentHome/>}></Route>
      </Route>
      
    </Routes>
  </Router>
  </Provider>
);


