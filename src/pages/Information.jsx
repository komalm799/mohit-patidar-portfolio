import cr1 from "../assets/cr1.jpeg"
import cr from "../assets/cr.jpeg"
import info from "../assets/info.jpeg"

const Information = () => {
  return (
    <div className="w-full bg-white">
      
      {/* HEADER */}
      <div className="bg-black text-white px-6 md:px-20 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
          <img src={info} className="w-32 h-32 rounded-full object-cover border-4 border-zinc-700" />
          <div>
            <h1 className="text-4xl font-bold">Mohit Patidar</h1>
            <p className="text-gray-400 mt-2">Full Stack Developer @ Innohub Technologies | Python | Remote (Indore, India)</p>
            <p className="text-gray-300 mt-4 max-w-2xl leading-6 text-sm md:text-base">
            I am a Full Stack Developer at Innohub Technologies with a passion for building 
            clean, scalable and modern web experiences. Specializing in Python and modern 
            JavaScript frameworks, I work remotely from Indore while collaborating with our 
            team in Bengaluru. I focus on creating real-world, user-centric solutions.
            </p>
          </div>
        </div>
      </div>

      {/* EDUCATION SECTION WITH IMAGE - FINAL */}
      <div className="px-6 md:px-20 py-16 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-[#F8FAFC] rounded-3xl mb-12 shadow-sm border mt-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Gained strong foundation in Computer Science, Data Structures, and Software Development 
            during B.Tech at SAGE University. 12th in Maths built my logical & analytical thinking.
          </p>
          <div className="border-l-2 border-black pl-6 space-y-8">
            <div>
              <h3 className="font-bold text-lg">B.Tech - Computer Science</h3>
              <p className="text-sm text-gray-600">SAGE University, Indore</p>
              <p className="text-xs bg-black text-white inline-block px-3 py-1 rounded-full mt-2">2019 - 2022</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">12th Standard - Maths</h3>
              <p className="text-sm text-gray-600">Meher Public School - 60%</p>
              <p className="text-xs bg-black text-white inline-block px-3 py-1 rounded-full mt-2">2018 Completed</p>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full">
          <img 
            src="https://tse1.mm.bing.net/th/id/OIP.cMjPXLHa4z7jhc8xm4rjKQHaG2?r=0&pid=ImgDet&w=474&h=438&rs=1&o=7&rm=3"
            alt="Education" 
            className="rounded-3xl shadow-xl w-full object-cover h-[400px] hover:scale-105 transition-transform duration-500"
            style={{ animation: 'float 4s ease-in-out infinite' }}
          />
        </div>
      </div>

      {/* SKILLS SECTION WITH IMAGE - FINAL */}
      <div className="px-6 md:px-20 py-16 max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 bg-white rounded-3xl shadow-sm border mb-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Focused on building scalable web applications using Python, Django & MERN stack. 
            Passionate about writing clean code, solving real-world problems and learning new tech.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Python", "Django", "React JS", "Tailwind CSS", "JavaScript", "Node JS", "Git & GitHub"].map((skill) => (
              <span key={skill} className="bg-[#F8FAFC] border px-5 py-3 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition-all cursor-pointer shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full">
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600" 
            alt="Skills Coding" 
            className="rounded-3xl shadow-xl w-full object-cover h-[400px] hover:scale-105 transition-transform duration-500"
            style={{ animation: 'float 4s ease-in-out infinite 1s' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>

      {/* CERTIFICATES - 2 CARDS CENTER */}
      <div className="bg-gray-50 px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Certificates & Achievements</h2>
          <p className="text-center text-gray-500 mt-2">Verified certificates of my learning journey</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto justify-center">
            
            {/* CERT 1 - cr1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group">
              <div className="overflow-hidden bg-gray-50 p-2 h-80 flex items-center justify-center">
              <img src={cr} className="w-full h-full object-contain -rotate-90 group-hover:scale-105 transition duration-500" alt="Nucleus Certificate" />
              </div>
              <div className="p-5">
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">12 Dec 2022 - 13 Feb 2023</span>
                <h3 className="font-bold text-lg mt-3">Certified Modern Web Development</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  Successfully completed Summer Internship in Web Developer under Engineering Philosophy Web Service Pvt. Ltd.
                </p>
                <p className="text-xs text-gray-500 mt-3 font-semibold">Issued by - Engineering Philosophy | Akshay Upadhyay (Director)</p>
              </div>
            </div>

            {/* CERT 2 - cr */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group">
              <div className="overflow-hidden bg-gray-50 p-2 h-80 flex items-center justify-center">
              <img src={cr1} className="w-full h-full object-contain -rotate-90 group-hover:scale-105 transition duration-500" alt="Nucleus Certificate" />
              </div>
              <div className="p-5">
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">4 April 2024</span>
                <h3 className="font-bold text-lg mt-3">Certified Modern Web Development</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  With fundamental knowledge of web development using FIGMA, CSS, JavaScript, React, TypeScript and SQL.
                </p>
                <p className="text-xs text-gray-500 mt-3 font-semibold">Issued by - Nucleus Software Exports lmt | Head - Ankit Chaturvedi</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CONTACT CTA */}
      <div className="text-center py-12">
        <a href="https://wa.me/918982281781" className="bg-black text-white px-8 py-3 rounded-full hover:bg-zinc-800 transition">Contact on WhatsApp</a>
      </div>

    </div>
  )
}
export default Information