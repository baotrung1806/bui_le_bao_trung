import magnifyingGlassImg from "../../../assets/images/project/Magnifying_glass.webp";
import pinBigImg from "../../../assets/images/project/Pin_big.webp";
import label2Img from "../../../assets/images/project/Label2.webp";
import vectorImg from "../../../assets/images/project/Vector.webp";
import { useTranslation } from '@/utils';

const LeftSection = () => {
  const t = useTranslation('main.project');

  return (
    <div className="absolute">
      <img
        src={magnifyingGlassImg}
        alt="Book"
        width={220}
        height={220}
        className="translate-x-[-105px] translate-y-[-80px]"
      />
      <img
        src={pinBigImg}
        alt="Book"
        width={17}
        height={17}
        className="absolute translate-x-[-550px] translate-y-[-70px]"
      />
      <img
        src={label2Img}
        alt="Book"
        width={177}
        height={177}
        className="absolute translate-x-[-550px] translate-y-[-70px]"
      />

      <div className="absolute flex flex-col gap-2 top-[40px] left-[90px]">
        <p className="font-['Syne'] font-bold text-[#3C2F2F] text-[24px]">
          {t('title1')}
        </p>
        <img
          src={vectorImg}
          alt="Vector"
          width={230}
          height={230}
          className="translate-y-[-10px]"
        />
        <p className="w-63 font-['Caveat'] font-bold text-[#3C2F2F] text-[30px] translate-y-[-15px] leading-snug">
          {t('subTitle1')}
        </p>
      </div>

      <div className="absolute flex flex-col gap-2 top-[330px] left-[380px]">
        <p className="font-['Syne'] font-bold text-[#3C2F2F] text-[22px]">{t('title3')}</p>
        <img
          src={vectorImg}
          alt="Vector"
          width={230}
          height={230}
          className="translate-y-[-10px]"
        />
        <p className="w-63 font-['Caveat'] font-bold text-[#3C2F2F] text-[30px] translate-y-[-15px] leading-tight">{t('subTitle3')}</p>
      </div>

      <div className="absolute flex flex-col gap-2 top-[680px] left-[90px]">
        <p className="w-70 font-['Syne'] font-bold text-[#3C2F2F] text-[22px]">{t('title5')}</p>
        <img
          src={vectorImg}
          alt="Vector"
          width={230}
          height={230}
          className="translate-y-[-10px]"
        />
        <p className="w-63 font-['Caveat'] font-bold text-[#3C2F2F] text-[30px] translate-y-[-15px] leading-tight">{t('subTitle5')}</p>
      </div>
    </div>
  );
};

export default LeftSection;