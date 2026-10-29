import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Information from "./pages/Information"
import Photos from "./pages/Photos"
import Videos from "./pages/Videos"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/information" element={<Information />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
export default App