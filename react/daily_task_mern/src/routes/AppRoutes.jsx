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
import RegisterNew from '../Components/Day_9-Day_10/RegisterNew'
import DataShower from '../Components/Day_9-Day_10/DataShower'
import LoginForm from "../Components/Day_10/LoginForm";
import StudentRegistrationForm from "../Components/Day_11/StudentRegistrationForm";
import StudentDataForm from "../Components/Day_11/StudentDataForm";
import HomeUseEffect from "../Components/Day_12/HomeUseEffect";
import UserDataFetch from "../Components/Day_12/UserDataFetch";
import TimerUSeEffect from "../Components/Day_12/TimerUSeEffect";
import CountUseEffect from "../Components/Day_12/CountUseEffect";
import SearchHome from "../Components/Day_13/SearchHome";
import StudentSearch from "../Components/Day_13/StudentSearch";
import ProductSearch from "../Components/Day_13/ProductSearch";
import EmployeeSearch from "../Components/Day_13/EmployeeSearch";


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
        <Route  path="/RegisterNew" element={<RegisterNew/>} />
        <Route path="/DataShower" element={<DataShower/>} />
        <Route path="/LoginForm"  element={<LoginForm/>}/>
        <Route path="/StudentRegistrationForm" element={<StudentRegistrationForm/>} />
        <Route path="/StudentDataForm" element={<StudentDataForm/>}/>
        <Route path="/HomeUseEffect"  element={<HomeUseEffect/>}/>
        <Route path="/UserDataFetch" element={<UserDataFetch/>}/>
        <Route path="/TimerUSeEffect" element={<TimerUSeEffect/>}/>
        <Route path="/CountUseEffect" element={<CountUseEffect/>}/>
        <Route path="/SearchHome" element={<SearchHome/>} />
        <Route path="/StudentSearch" element={<StudentSearch/>}/>
        <Route path="/ProductSearch" element={<ProductSearch/>}/>
        <Route path="/EmployeeSearch" element={<EmployeeSearch/>} />
      </Routes>  
    </>
  );
};

export default AppRoutes;
