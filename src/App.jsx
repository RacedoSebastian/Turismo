import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import  Home  from "./pages/Home"
import  About  from "./pages/About"
import  Contact  from "./pages/Contact"
import Offer from "./pages/Offer"
import TripsPage from "./pages/TripsPage"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="trips" element={<TripsPage/>}/>
          <Route path="offer" element={<Offer/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
