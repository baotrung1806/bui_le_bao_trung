import ropeImg from "../assets/images/common/Rope.webp";
import MySelfSection from "./components/MySelfSection";
import ContactSection from "./components/ContactSection";
import ServiceSection from "./components/ServiceSection";
import JobSection from "./components/JobSection";
import ProjectSection from "./components/ProjectSection";

export const BaoTrung = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <MySelfSection />
      <img 
        src={ropeImg}
        alt="Rope"
        className="mt-[60px] block"
      />
      <JobSection />
      <img 
        src={ropeImg}
        alt="Rope"
        className="block"
      />
      <ProjectSection />
      <img 
        src={ropeImg}
        alt="Rope"
        className="block"
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
