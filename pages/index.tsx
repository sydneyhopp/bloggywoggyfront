import Navbar from "@/components/navbar";
export default function Home() {
  return (
    <div>
      <Navbar/>
    <div className="grid grid-cols-[9fr_1fr] p-10">
      <div>

      </div>
      <div className="text-center flex flex-col gap-2 bg-yellow-200 p-2 shadow-md">
        <span className="text-lg font-bold">welcome to table for two!</span>
        <span> we're Syd and Laura, a couple that really likes food.</span>
        <span> we have a cat named loki and he also is a foodie.</span>
      </div>
    </div>
    </div>
    
    
  );
}
