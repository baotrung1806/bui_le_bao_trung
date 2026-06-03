import ropeImg from "../assets/images/common/Rope.webp";
import MySelfSection from "./components/MySelfSection";
import ContactSection from "./components/ContactSection";
import ServiceSection from "./components/ServiceSection";

export const BaoTrung = () => {
  return (
    <div className="w-full overflow-hidden flex flex-col items-center">
      <MySelfSection />
      <img 
        src={ropeImg}
        alt="Rope"
        className="mt-[60px] block"
      />
      <ServiceSection />
      <img 
        src={ropeImg}
        alt="Rope"
        className="block"
      />
      <ContactSection />
    </div>
  );
};
