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
      {/* 1. Đổi h-[90vh] thành h-[880px] để cố định khung form canvas */}
      <div
        className="relative w-[700px] h-[880px] rounded-[60px] bg-[#FBF9F4] p-6 text-center shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-8 text-2xl font-bold text-[#3C2F2F]/40 hover:text-[#3C2F2F] transition-colors z-50 cursor-pointer"
        >
          ✕
        </button>

        {/* 2. Dùng top/left thay vì translate để cố định vị trí tuyệt đối */}
        <h1 className="absolute top-[90px] left-[10px] w-[310px] font-['Syne'] font-bold text-[60px] text-[#3C2F2F] rotate-[-15deg] leading-tight text-center">
          {title}
        </h1>

        <h1 className="absolute top-[70px] left-[400px] w-60 font-['Caveat'] font-bold text-[80px] text-[#0057FF] rotate-[13deg] leading-tight text-center">
          Scan Now
        </h1>

        <img
          src={qrSrc}
          alt={`QR Code for ${title}`}
          width={300}
          height={300}
          className="absolute top-[280px] left-[190px]"
        />

        <img
          src={planImg}
          alt="Decorative Plane"
          width={360}
          height={360}
          className="absolute top-[700px] left-[300px] rotate-[-15deg]"
        />

        {/* 3. Loại bỏ inset-0 và margin âm, đưa về top/left chuẩn xác */}
        <img
          src={portraitImg}
          alt="Bao Trung Portrait"
          width={460}
          height={460}
          className="absolute top-[360px] left-[-180px] z-3 object-cover"
        />
      </div>
    </div>
  );
};

export default ContactModal;