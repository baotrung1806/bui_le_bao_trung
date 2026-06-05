import penOldImg from "../../../assets/images/project/Pen_old.webp";
import bookImg from "../../../assets/images/project/Book.webp";
import { useTranslation } from '@/utils';
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const ProjectSection = () => {
  const t = useTranslation('main.project');

  return (
    <div className="flex h-[85vh] translate-x-[45px]">
      <img
        src={bookImg}
        alt="Book"
        width={1377}
        height={1377}
        className=""
      />
      <LeftSection />
      <RightSection />
      <img
        src={penOldImg}
        alt="Pen Old"
        width={135}
        height={135}
        className="absolute translate-x-[1365px] translate-y-[-70px]"
      />
      <h1 className="absolute w-45 text-center font-['Caveat'] font-bold text-[40px] text-[#3C2F2F] translate-x-[1405px] translate-y-[-35px]">{t('headline')}</h1>
    </div>
  );
};

export default ProjectSection;