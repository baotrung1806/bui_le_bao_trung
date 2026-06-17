import ropeImg from '@/assets/images/common/Rope.webp';
import MySelfSection from './components/MySelfSection';
import ContactSection from './components/ContactSection';
import ServiceSection from './components/ServiceSection';
import JobSection from './components/JobSection';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';

export const BaoTrung = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <MySelfSection />
      <img 
        src={ropeImg}
        alt="Rope"
        className="block w-full"
      />
      <JobSection />
      <img 
        src={ropeImg}
        alt="Rope"
        className="mt-[-100px] block w-full"
      />
      <ProjectSection />
      <img 
        src={ropeImg}
        alt="Rope"
        className="mt-[50px] block w-full"
      />
      <ServiceSection />
      <img 
        src={ropeImg}
        alt="Rope"
        className="mt-[-10px] block w-full"
      />
      <ContactSection />
      <Footer />
    </div>
  );
};
