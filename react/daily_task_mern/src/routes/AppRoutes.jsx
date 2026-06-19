import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Components/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainContent from "../Components/MainContent";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import SchoolManagement from "../pages/SchoolManagement";
import SchoolList from "../pages/SchoolList";
import Dashboard from "../pages/Dashboard";
import StudentClass from '../Components/Day_5/StudentClass'
import UseStateRendering from '../Components/Day_5/UseStateRendering'
import UseStateManagement from '../Components/Day_6/UseStateManagement'
import Navbar from '../Components/Day_7/Navbar'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />/
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/maincontent" element={<MainContent />} />
        {/* <Route path="/about" element={<About />}/> */}
        {/* <Route path="/services" element={<Services />}/> */}
        {/* <Route path="/Contact" element={<Contact />} /> */}
        <Route path="/school" element={<SchoolManagement />} />
        <Route path="/schoolCourseList" element={<SchoolList />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/StudentClass" element={<StudentClass />} />
        <Route path="/UseStateRendering" element={<UseStateRendering />}/>
        <Route path="/UseStateManagement" element={<UseStateManagement />} />
        <Route  path="/Navbar" element={<Navbar/>}/>
      </Routes>
    </>
  );
};

export default AppRoutes;
