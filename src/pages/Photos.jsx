import code from "../assets/code.jpeg"
import code2 from "../assets/code2.jpeg"
import hero1 from "../assets/hero1.jpeg"
import code3 from "../assets/code3.jpeg"

const Photos = () => {
  return (
    <div className="px-6 md:px-24 py-20 bg-white">
      <h2 className="text-sm tracking-[0.3em] font-bold text-gray-400"> MY PROJECTS</h2>
      <h3 className="text-4xl md:text-5xl font-black mt-4 max-w-3xl">
        Explore my website projects, development work, photos, and video demonstrations.
      </h3>

      <div className="grid md:grid-cols-3 gap-8 mt-14">
        
        {/* CARD 1 */}
        <div className="group bg-zinc-50 rounded-[32px] p-3 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-out">
          <div className="relative">
            <img src={code} className="w-full h-[380px] object-cover rounded-[24px]" alt="project" />
            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">FEATURED • 2026</span>
          </div>
          <div className="p-5">
            <h4 className="font-bold text-2xl">Portfolio Website</h4>
            <p className="text-sm text-gray-500 mt-2 leading-6">Crafted with React & Tailwind - Fast, responsive and modern design. My main personal project showcase.</p>
            <span className="inline-block mt-4 text-sm font-bold border-b-2 border-black pb-1">Explore Project →</span>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="group bg-zinc-50 rounded-[32px] p-3 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-out">
          <div className="relative">
            <img src={code2} className="w-full h-[380px] object-cover rounded-[24px]" alt="photos" />
            <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-xs font-bold">50+ SHOTS</span>
          </div>
          <div className="p-5">
            <h4 className="font-bold text-2xl">Visual Stories</h4>
            <p className="text-sm text-gray-500 mt-2 leading-6">
              Not just photos, it's my perspective. Nature, streets, portraits - capturing moments that speak without words. Edited with love.
            </p>
            <div className="flex gap-2 mt-3">
              <span className="text-[11px] bg-white border px-2 py-1 rounded-full">Nature</span>
              <span className="text-[11px] bg-white border px-2 py-1 rounded-full">Portrait</span>
              <span className="text-[11px] bg-white border px-2 py-1 rounded-full">Travel</span>
            </div>
            <span className="inline-block mt-4 text-sm font-bold border-b-2 border-black pb-1">View Gallery →</span>
          </div>
        </div>


        {/* CARD 2 */}
        <div className="group bg-zinc-50 rounded-[32px] p-3 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-out">
          <div className="relative">
            <img src={code3} className="w-full h-[380px] object-cover rounded-[24px]" alt="photos" />
            <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-xs font-bold">50+ SHOTS</span>
          </div>
          <div className="p-5">
            <h4 className="font-bold text-2xl">Visual Stories</h4>
            <p className="text-sm text-gray-500 mt-2 leading-6">
              Not just photos, it's my perspective. Nature, streets, portraits - capturing moments that speak without words. Edited with love.
            </p>
            <div className="flex gap-2 mt-3">
              <span className="text-[11px] bg-white border px-2 py-1 rounded-full">Nature</span>
              <span className="text-[11px] bg-white border px-2 py-1 rounded-full">Portrait</span>
              <span className="text-[11px] bg-white border px-2 py-1 rounded-full">Travel</span>
            </div>
            <span className="inline-block mt-4 text-sm font-bold border-b-2 border-black pb-1">View Gallery →</span>
          </div>
        </div>


        {/* CARD 3 */}
        <div className="group bg-zinc-50 rounded-[32px] p-3 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-out">
          <div className="relative">
            <img src={hero1} className="w-full h-[380px] object-cover rounded-[24px]" alt="videos" />
            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">HD VIDEOS</span>
          </div>
          <div className="p-5">
            <h4 className="font-bold text-2xl">Cinematic Reels</h4>
            <p className="text-sm text-gray-500 mt-2 leading-6">From concept to edit - Short reels, cinematic cuts and creative video experiments that tell a story in 30 seconds.</p>
            <span className="inline-block mt-4 text-sm font-bold border-b-2 border-black pb-1">Watch Videos →</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Photos