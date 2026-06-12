import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import StudentProfile  from "./components/StudentProfile"
import CompanyInfo from "./components/CompanyInfo"
import MovieDetails from "./components/MovieDetails"
import ProductCard from "./components/ProductCard"

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/studentProfile"  element={<StudentProfile />}/>
      <Route path="/CompanyInfo" element={<CompanyInfo/>} />
      <Route path="/MovieDetails" element={<MovieDetails/>}/>
      <Route path="/ProductCard" element = {<ProductCard/>}/>
    </Routes>
    </>
  )
}

export default App