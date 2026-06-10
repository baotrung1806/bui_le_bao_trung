import bookImg from "../../../assets/images/project/Book.webp";
import pageImg from "../../../assets/images/project/Page.webp";
import penOldImg from "../../../assets/images/project/Pen_old.webp";
import { useTranslation } from '@/utils';
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const ProjectSection = () => {
  const t = useTranslation('main.project');

  return (
    // Wrapper ngoài cùng: Căn giữa nội dung, tạo thanh cuộn nếu màn hình quá nhỏ
    <div className="min-h-[90vh] w-full flex justify-center items-center mt-0">
      
      {/* KHUNG SÁCH CỐ ĐỊNH: Chìa khóa để không bị xê dịch khi zoom */}
      <div 
        className="relative shrink-0" 
        style={{ width: '1337px', height: '850px' }}
      >
        {/* Ảnh nền quyển sách */}
        <img
          src={bookImg}
          alt="Book Background"
          className="absolute h-[90vh] top-1/2 -translate-y-1/2"
          loading="lazy"
        />

        {/* Trang giấy Trái */}
        <img
          src={pageImg}
          alt="Page Left"
          width={630}
          height={630}
          className="absolute h-[90vh] left-[50px] top-1/2 -translate-y-1/2"
          loading="lazy"
        />

        {/* Trang giấy Phải */}
        <img
          src={pageImg}
          alt="Page Right"
          width={630}
          height={630}
          className="absolute h-[90vh] right-[65px] top-1/2 -translate-y-1/2"
          loading="lazy"
        />

        {/* Nội dung 2 trang */}
        <LeftSection />
        <RightSection />

        {/* Decor: Bút cũ và Tiêu đề chính */}
        <img
          src={penOldImg}
          alt="Pen Old"
          width={135}
          height={135}
          className="absolute right-[-125px] top-[-150px] z-20"
          loading="lazy"
        />
        <h1 className="absolute right-[-215px] top-[-110px] w-[200px] text-center font-['Caveat'] font-bold text-[40px] text-[#3C2F2F] z-20">
          {t('headline')}
        </h1>
      </div>
    </div>
  );
};

export default ProjectSection;