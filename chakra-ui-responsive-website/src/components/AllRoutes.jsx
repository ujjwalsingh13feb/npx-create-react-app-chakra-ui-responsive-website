import {Routes,Route} from "react-router-dom"

import Login from './../Pages/Login';
import Contact from './../pages/Contact';
import Home from './../Pages/Home';
import Login from './../Pages/Login';


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={Home}/>
        <Route path="/about" element={About}/>
        <Route path="/contact" element={Contact}/>
        <Route path="/login" element={Login}/>
    </Routes>
  )
}

export default AllRoutes