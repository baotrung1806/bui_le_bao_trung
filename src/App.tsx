import { ReactLenis } from 'lenis/react';
import { SideBar } from "./components/SideBar";
import { BaoTrung } from "./pages/BaoTrung";

function App() {
  return (
    <ReactLenis root options={{ 
      duration: 2.0,     // Tốc độ cuộn chậm rãi (tăng nếu muốn chậm hơn nữa)
      lerp: 0.1,        // Độ mượt mà quán tính (nhỏ hơn = mượt hơn)
      smoothWheel: true  
    }}>
      <main className="bg-[#FBF9F4] min-h-screen">
        <SideBar />
        <BaoTrung />
      </main>
    </ReactLenis>
  );
}

export default App;