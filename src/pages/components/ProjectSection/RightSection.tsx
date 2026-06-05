import pinNewImg from "../../../assets/images/project/Pen_new.webp";
import vectorImg from "../../../assets/images/project/Vector.webp";
import { useTranslation } from '@/utils';

const RightSection = () => {
  const t = useTranslation('main.project');

  return (
    <div className="absolute">
      <div className="absolute flex flex-col gap-2 top-[40px] left-[700px]">
        <p className="w-70 font-['Syne'] font-bold text-[#3C2F2F] text-[24px]">
          {t('title2')}
        </p>
        <img
          src={vectorImg}
          alt="Vector"
          width={230}
          height={230}
          className="translate-y-[-10px]"
        />
        <p className="w-65 font-['Caveat'] font-bold text-[#3C2F2F] text-[30px] translate-y-[-15px] leading-tight">
          {t('subTitle2')}
        </p>
      </div>

      <div className="absolute flex flex-col gap-2 top-[330px] left-[980px]">
        <p className="w-70 font-['Syne'] font-bold text-[#3C2F2F] text-[22px]">{t('title4')}</p>
        <img
          src={vectorImg}
          alt="Vector"
          width={230}
          height={230}
          className="translate-y-[-10px]"
        />
        <p className="w-71 font-['Caveat'] font-bold text-[#3C2F2F] text-[30px] translate-y-[-15px] leading-tight">{t('subTitle4')}</p>
      </div>
      <img
        src={pinNewImg}
        alt="Vector"
        width={320}
        height={320}
        className="translate-y-[450px] ml-[1070px]"
      />
      <span className="absolute w-70 font-['Caveat'] font-bold text-[#3C2F2F] text-[30px] translate-y-[395px] ml-[885px]">{t('endline')}</span>
    </div>
  );
};

export default RightSection;