import planImg from "../../../assets/images/contact/Plane.webp";
import portraitImg from "../../../assets/images/myself/BaoTrung.webp";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  qrSrc: string;
}

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  title,
  qrSrc,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-[700px] h-[90vh] rounded-[60px] bg-[#FBF9F4] p-6 text-center shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-8 text-2xl font-bold text-[#3C2F2F]/40 hover:text-[#3C2F2F] transition-colors z-50 cursor-pointer"
        >
          ✕
        </button>

        <h1 className="absolute w-100 font-['Syne'] font-bold text-[80px] text-[#3C2F2F] rotate-[-15deg] -translate-x-[30px] translate-y-[50px] leading-tight text-center">
          {title}
        </h1>

        <h1 className="absolute w-60 font-['Caveat'] font-bold text-[80px] text-[#0057FF] rotate-[13deg] translate-x-[400px] translate-y-[70px] leading-tight text-center">
          Scan Now
        </h1>

        <img
          src={qrSrc}
          alt={`QR Code for ${title}`}
          width={300}
          height={300}
          className="absolute translate-x-[190px] translate-y-[280px]"
        />

        <img
          src={planImg}
          alt="Decorative Plane"
          width={360}
          height={360}
          className="absolute translate-x-[300px] translate-y-[740px] rotate-[-15deg]"
        />

        <img
          src={portraitImg}
          alt="Bao Trung Portrait"
          width={460}
          height={460}
          className="absolute inset-0 z-3 mt-[360px] -ml-[180px] object-cover"
        />
      </div>
    </div>
  );
};

export default ContactModal;