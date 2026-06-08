import planImg from "../../../assets/images/contact/Plane.webp";
import portraitImg from '../../../assets/images/myself/BaoTrung.webp';

const ContactModal = ({
  isOpen,
  onClose,
  title,
  qrSrc,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  qrSrc: string;
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-[700px] h-[90vh] rounded-[60px] bg-[#FBF9F4] p-6 text-center shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="absolute w-100 align-center font-['Syne'] font-bold text-[80px] text-[#3C2F2F] rotate-[-15deg] translate-x-[-30px] translate-y-[50px] leading-tight">{title}</h1>
        <h1 className="absolute w-60 align center font-['Caveat'] font-bold text-[80px] text-[#0057FF] rotate-[13deg] translate-x-[400px] translate-y-[70px] leading-tight">Scan Now</h1>
        <img
          src={qrSrc}
          alt={title}
          width={300}
          height={300}
          className="absolute translate-x-[190px] translate-y-[280px]"
        />
        <img 
          src={planImg}
          alt="Plan"
          width={360}
          height={360}
          className="absolute translate-x-[300px] translate-y-[740px] rotate-[-15deg]"
        />
        <img 
          src={portraitImg}
          alt="Portrait"
          width={460}
          height={460}
          className="absolute inset-0 z-3 mt-[360px] ml-[-180px] object-cover"
        />
      </div>
    </div>
  );
};

export default ContactModal;