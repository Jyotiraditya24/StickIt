import CanvasComponent from "./components/canvasComponent";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";


export default function Home() {
  return (
    <div className="grid grid-cols-12">
      <Sidebar/>
      <div className="flex flex-col col-span-10">
        <Navbar/>
        <CanvasComponent />
      </div>
    </div>
  );
}
