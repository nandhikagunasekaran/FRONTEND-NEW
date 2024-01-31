import React from 'react'
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Navbar from "./pages/Navbar";
import Sidebar from "./pages/Sidebar";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import GiftList from "./pages/GiftList";
import GiftItems from "./pages/GiftItems";
import Giftportal from "./pages/Giftportal";
import Payment from "./pages/Payment";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Order from "./pages/Order";


import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
   <Router>
  <Navbar/> 
   <Routes>
   <Route path="/signup" element={<Signup/>}/>
   <Route path="/" element={<Signup/>}/>
   <Route path="/signin" element={<Signin/>}/>
   <Route path="/Sidebar" element={<Sidebar/>}/>
   <Route path="/Profile" element={<Profile/>}/>
   <Route path="/Home" element={<Home/>}/>
   <Route path="/GiftList" element={<GiftList/>}/>
   <Route path="/GiftItems" element={<GiftItems/>}/>
   <Route path="/Giftportal" element={<Giftportal/>}/>
   <Route path="/About" element={<About/>}/>
   <Route path="/Payment" element={<Payment/>}/>
   <Route path="/Contact" element={<Contact/>}/>
   <Route path="/Order" element={<Order/>}/>

   
   </Routes>
   </Router>
  )
}

export default App;