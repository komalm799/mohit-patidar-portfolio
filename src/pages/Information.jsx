import cr1 from "../assets/cr1.jpeg"
import cr from "../assets/cr.jpeg"
import hero1 from "../assets/hero1.jpeg"


const Information = () => {
  return (
    <div className="w-full bg-white">
      
      {/* HEADER */}
      <div className="bg-black text-white px-6 md:px-20 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
          <img src={hero1} className="w-32 h-32 rounded-full object-cover border-4 border-zinc-700" />
          <div>
            <h1 className="text-4xl font-bold">Mohit Patidar</h1>
            <p className="text-gray-400 mt-2">Full Stack Learner | Web Developer | Harda, MP</p>
            <p className="text-gray-300 mt-4 max-w-2xl leading-6 text-sm md:text-base">
              I am a passionate developer who loves building clean and modern web experiences. 
              Currently learning React, Tailwind and building real-world projects. My goal is to become a professional MERN stack developer.
            </p>
          </div>
        </div>
      </div>

      {/* EDUCATION & SKILLS */}
      <div className="px-6 md:px-20 py-12 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="border-l-2 border-black pl-6 space-y-6">
            <div>
              <h3 className="font-bold">Bachelor's Degree - Pursuing</h3>
              <p className="text-sm text-gray-600">Your College Name, Harda</p>
              <p className="text-xs text-gray-400">2023 - Present</p>
            </div>
            <div>
              <h3 className="font-bold">12th Standard - MP Board</h3>
              <p className="text-sm text-gray-600">Completed with good percentage</p>
              <p className="text-xs text-gray-400">2022 - 2023</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["React JS", "Tailwind CSS", "JavaScript", "Node JS", "Git & GitHub", "Video Editing", "Photography"].map((skill) => (
              <span key={skill} className="bg-gray-100 border px-4 py-2 rounded-full text-sm font-medium">{skill}</span>
            ))}
          </div>
        </div>
      </div>

      {/* CERTIFICATES - PROFESSIONAL */}
      <div className="bg-gray-50 px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Certificates & Achievements</h2>
          <p className="text-center text-gray-500 mt-2">Verified certificates of my learning journey</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            
            {/* CERT 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img src={cr1} className="w-full h-48 object-cover" />
              <div className="p-5">
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">2024</span>
                <h3 className="font-bold text-lg mt-3">Web Development Certificate</h3>
                <p className="text-sm text-gray-600 mt-2">Completed React & JavaScript fundamentals course with projects.</p>
                <p className="text-xs text-gray-400 mt-3">Issued by - Code Academy</p>
              </div>
            </div>

            {/* CERT 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img src={cr} className="w-full h-48 object-cover" />
              <div className="p-5">
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">2025</span>
                <h3 className="font-bold text-lg mt-3">Tailwind CSS Mastery</h3>
                <p className="text-sm text-gray-600 mt-2">Advanced styling and responsive design professional certificate.</p>
                <p className="text-xs text-gray-400 mt-3">Issued by - Tailwind Labs</p>
              </div>
            </div>

            

          </div>
        </div>
      </div>

      {/* CONTACT CTA */}
      <div className="text-center py-12">
        <a href="https://wa.me/91XXXXXXXXXX" className="bg-black text-white px-8 py-3 rounded-full">Contact on WhatsApp</a>
      </div>

    </div>
  )
}
export default Information