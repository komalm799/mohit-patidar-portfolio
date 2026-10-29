import video1 from "../assets/video1.mp4"
const Videos = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">My Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <video controls className="w-full rounded-xl shadow-lg"><source src={video1} type="video/mp4" /></video>
        <video controls className="w-full rounded-xl shadow-lg"><source src={video1} type="video/mp4" /></video>
      </div>
    </div>
  )
}
export default Videos