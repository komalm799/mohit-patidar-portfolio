import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">Mohit Patidar</Link>
      <div className="flex gap-5 text-sm md:text-base">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/photos" className="hover:text-gray-300">Photos</Link>
        <Link to="/videos" className="hover:text-gray-300">Videos</Link>
        <Link to="/information" className="hover:text-gray-300">Info</Link>
      </div>
    </nav>
  )
}
export default Navbar