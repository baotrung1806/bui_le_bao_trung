import MySelfSection from "./components/MySelfSection";
import ropeImg from "../assets/images/common/Rope.webp";
import { ContactSection } from "./components/ContactSection";

export const BaoTrung = () => {
  return (
    <div className="w-full overflow-hidden flex flex-col items-center">
      <MySelfSection />
      <img 
        src={ropeImg}
        alt="Rope"
        className="mt-[60px] block"
      />
      <ContactSection />
    </div>
  );
};
