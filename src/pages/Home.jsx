import banner from "../assets/hero.jpeg" 
import hero1 from "../assets/hero1.jpeg"
import code from "../assets/code.jpeg"
import code2 from "../assets/code2.jpeg"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="w-full bg-white">

      {/* 1. BANNER -  */}
      <div className="w-full">
        <img 
          src={banner} 
          alt="Mohit Patidar Banner"
          className="w-full h-auto md:h-[85vh] object-cover object-top" 
        />
      </div>

      {/* 2. CONTENT - BANNER KE NICHE */}
      <div className="px-6 md:px-24 py-16 text-center md:text-left bg-white">
        <p className="text-sm tracking-[0.3em] font-bold text-gray-500">ASPIRING WEB DEVELOPER</p>
        <h1 className="text-5xl md:text-7xl font-black mt-2 leading-none text-black">
          Mohit Patidar
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-gray-700">
          Building Modern and Responsive Websites
        </p>
        <div className="flex gap-4 mt-8 justify-center md:justify-start">
          <Link to="/information" className="bg-black text-white px-8 py-3 rounded-full font-bold">Explore Now</Link>
          <a href="#goals" className="border border-black px-8 py-3 rounded-full font-bold">My Goals ↓</a>
        </div>
      </div>

      {/* 3. MY GOALS */}
<div id="goals" className="px-6 md:px-24 py-20 bg-gray-50">
  <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
    
    {/* LEFT CONTENT CARD */}
    <div className="group bg-white rounded-[32px] p-8 md:p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out">
      <h2 className="text-sm tracking-[0.3em] font-bold text-gray-400">MY GOALS</h2>
      <h3 className="text-3xl md:text-[42px] font-black mt-6 leading-[1.15]">
        To improve my development skills, build practical projects, and contribute to real-world web development work.
      </h3>
      <div className="w-20 h-1.5 bg-black mt-8 rounded-full group-hover:w-32 transition-all duration-500"></div>
      <p className="text-gray-500 mt-6 leading-7">
        Focused on modern tech stack and building clean, fast, user-friendly websites that actually solve problems.
      </p>
    </div>

    {/* RIGHT IMAGE CARD */}
    <div className="group relative bg-white rounded-[32px] p-3 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-out">
      <img src={hero1} className="w-full h-[480px] md:h-[520px] object-cover rounded-[24px]" />
      <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg">
        <p className="font-bold text-lg">Learning & Growing</p>
        <p className="text-sm text-gray-500 mt-1">Every day, one step closer to real-world work.</p>
      </div>
    </div>

  </div>
</div>

      {/* 4. MY PROJECTS */}
<div className="px-6 md:px-24 py-20 bg-white">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
    <div>
      <h2 className="text-sm tracking-[0.3em] font-bold text-gray-400"> MY PROJECTS</h2>
      <h3 className="text-4xl md:text-5xl font-black mt-4 leading-[1.1] max-w-3xl">
        Explore my website projects, development work, photos, and video demonstrations.
      </h3>
    </div>
    <p className="text-gray-500 max-w-xs text-sm">Hover on cards - they lift up with smooth animation.</p>
  </div>
  
  <div className="grid md:grid-cols-3 gap-8 mt-14">
    
    {/* CARD 1 */}
    <div className="group bg-zinc-50 rounded-[32px] p-3 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-out">
      <img src={code} className="w-full h-[380px] object-cover rounded-[24px]" />
      <div className="p-5">
        <h4 className="font-bold text-2xl">Portfolio Website</h4>
        <p className="text-sm text-gray-500 mt-2">Built with React + Tailwind, fully responsive.</p>
        <span className="inline-block mt-4 text-sm font-bold border-b-2 border-black pb-1 group-hover:tracking-wider transition-all">Explore Project →</span>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="group bg-zinc-50 rounded-[32px] p-3 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-out">
      <img src={code2} className="w-full h-[380px] object-cover rounded-[24px]" />
      <div className="p-5">
        <h4 className="font-bold text-2xl">Photo Gallery</h4>
        <p className="text-sm text-gray-500 mt-2">Creative shoots and personal moments.</p>
        <span className="inline-block mt-4 text-sm font-bold border-b-2 border-black pb-1 group-hover:tracking-wider transition-all">View Photos →</span>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="group bg-zinc-50 rounded-[32px] p-3 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-out">
      <img src={hero1} className="w-full h-[380px] object-cover rounded-[24px]" />
      <div className="p-5">
        <h4 className="font-bold text-2xl">Video Showcase</h4>
        <p className="text-sm text-gray-500 mt-2">Reels, edits and creative video work.</p>
        <span className="inline-block mt-4 text-sm font-bold border-b-2 border-black pb-1 group-hover:tracking-wider transition-all">Watch Videos →</span>
      </div>
    </div>

  </div>
</div>

      {/* 5. CONTACT */}
      <div className="bg-[#f5f5f7] px-6 md:px-24 py-20">
  <div className="max-w-6xl mx-auto bg-white rounded-[32px] shadow-xl p-8 md:p-12">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
      <div>
        <h2 className="text-sm tracking-[0.3em] font-bold text-gray-400">CONTACT ME</h2>
        <h3 className="text-4xl md:text-5xl font-black mt-3">Let's Connect</h3>
        <p className="text-gray-500 mt-3">Feel free to reach out for collaboration or work.</p>
      </div>
      <a href="tel:8982281781" className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition">
        Call Now: 8982281781
      </a>
    </div>

    <div className="grid md:grid-cols-3 gap-6 mt-10">
      
      <a href="mailto:mp3897552@gmail.com" className="group bg-gray-50 p-6 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-1">
        <p className="text-xs tracking-widest font-bold text-gray-400 group-hover:text-gray-300">EMAIL</p>
        <p className="font-bold text-lg mt-2 break-all">mp3897552@gmail.com</p>
      </a>

      <a href="https://github.com/mp3897552-bit" target="_blank" className="group bg-gray-50 p-6 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-1">
        <p className="text-xs tracking-widest font-bold text-gray-400 group-hover:text-gray-300">GITHUB</p>
        <p className="font-bold text-lg mt-2">mp3897552-bit →</p>
      </a>

      <a href="https://www.linkedin.com" target="_blank" className="group bg-gray-50 p-6 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-1">
        <p className="text-xs tracking-widest font-bold text-gray-400 group-hover:text-gray-300">LINKEDIN</p>
        <p className="font-bold text-lg mt-2">Mohit Patidar →</p>
      </a>

    </div>

    <div className="flex items-center gap-3 mt-8 text-sm text-gray-500">
      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
      Available for freelance & internship - Contact: 8982281781
    </div>
  </div>
</div>

    </div>
  )
}
export default Home