import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import video3 from "../assets/video3.mp4"
import video4 from "../assets/video4.mp4"
import video5 from "../assets/video5.mp4"
import video6 from "../assets/video6.mp4"
import video7 from "../assets/video7.mp4"
import video8 from "../assets/video8.mp4"
import video9 from "../assets/video9.mp4"
import video10 from "../assets/video10.mp4"
import info from "../assets/info.jpeg"
import video11 from "../assets/video11.mp4"
import video12 from "../assets/video12,mp4"

const Videos = () => {
  const videosData = [
    { src: video1, title: "E-Commerce Full Stack App", desc: "MERN stack with payment gateway, admin panel and user auth.", tag: "MERN" },
    { src: video2, title: "CRM System for Business", desc: "Built for Innohub Technologies to manage clients & projects.", tag: "Django" },
    { src: video3, title: "Modern Portfolio Website", desc: "Responsive portfolio with smooth animations and dark mode.", tag: "React" },
    { src: video4, title: "Python Backend API", desc: "REST API development with Python Django & PostgreSQL.", tag: "Python" },
    { src: video5, title: "React Dashboard UI", desc: "Admin dashboard with charts, analytics and clean Tailwind CSS.", tag: "React" },
    { src: video6, title: "Full Stack Project Demo", desc: "End-to-end development from database to frontend deployment.", tag: "Full Stack" },
    { src: video7, title: "JavaScript Interactive App", desc: "Dynamic frontend logic with JavaScript and modern ES6 features.", tag: "JavaScript" },
    { src: video8, title: "Database Management System", desc: "Efficient data handling with SQL, MongoDB and optimizations.", tag: "SQL" },
    { src: video9, title: "Responsive Landing Page", desc: "Pixel-perfect landing page with Figma to code conversion.", tag: "Figma to Code" },
    { src: video10, title: "Deployment & Hosting", desc: "Live project deployment and performance optimization.", tag: "Live Project" },
    { src: video11, title: "Deployment & Hosting", desc: "Live project deployment and performance optimization.", tag: "Live Project" },
    { src: video12, title: "Python Backend API", desc: "REST API development with Python Django & PostgreSQL.", tag: "Python" }


  ]

  return (
    <div className="bg-[#F8FAFC] px-6 md:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* PROFILE + DEFINITION - Same as before */}
        <div className="bg-white rounded-[2rem] shadow-lg border p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 mb-12">
          <img src={info} alt="Mohit Pathak" className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-black shadow-xl" />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">My Work in Action</h2>
            <p className="text-gray-600 mt-4 leading-relaxed text-[15px]">
              I am <span className="font-bold text-black">Mohit Patidar</span>, a Full Stack Developer from Indore. I love converting ideas into real digital products. 
              Below are 10 of my project demos – from <b>React, 
                html, css, javaScript, Node.js, Python Django to SQL</b>.
            </p>
            <div className="flex flex-wrap gap-2 mt-5 justify-center md:justify-start">
              <span className="bg-black text-white text-xs px-4 py-1.5 rounded-full">10+ Projects</span>
              <span className="bg-white border text-xs px-4 py-1.5 rounded-full">React & Django Expert</span>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-2">Project Demos</h3>
        <p className="text-center text-gray-500 mb-10">Tap any video to play - Full video visible</p>

        {/* VIDEO GRID - AB CUT NAHI HOGA - AAPKE PURANE CODE JAISA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videosData.map((video, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-2xl transition">
              {/* Video - No fixed height, pura dikhega */}
              <div className="bg-black">
                <video controls className="w-full rounded-t-2xl" playsInline preload="metadata">
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
              {/* Text niche - Aapke purane code me nahi tha, ab add kiya */}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-[16px]">{video.title}</h4>
                  <span className="bg-black text-white text-[10px] px-2 py-1 rounded-full">{video.tag}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{video.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
export default Videos