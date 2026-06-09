import magnifyingGlassImg from "../../../assets/images/project/Magnifying_glass.webp";
import label2Img from "../../../assets/images/project/Label2.webp";
import vectorImg from "../../../assets/images/project/Vector.webp";
import title1Img from "../../../assets/images/project/title1.webp";
import title3Img from "../../../assets/images/project/title3.webp";
import title5Img from "../../../assets/images/project/title5.webp";
import { useTranslation } from '@/utils';

const LeftSection = () => {
  const t = useTranslation('main.project');

  return (
    <div className="absolute">
      <img
        src={magnifyingGlassImg}
        alt="Magnifying Glass"
        width={220}
        height={220}
        className="translate-x-[-105px] translate-y-[-80px]"
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
      <img
        src={title1Img}
        alt="Bat Trang"
        width={430}
        height={430}
        className="translate-x-[310px] translate-y-[-230px]"
      />
      <div className="absolute flex flex-col gap-2 top-[330px] left-[380px]">
        <p className="font-['Syne'] font-bold text-[#3C2F2F] text-[22px] translate-x-[15px]">{t('title3')}</p>
        <img
          src={vectorImg}
          alt="Vector"
          width={230}
          height={230}
          className="translate-y-[-10px]"
        />
        <p className="w-63 font-['Caveat'] font-bold text-[#3C2F2F] text-[30px] translate-y-[-15px] leading-tight">{t('subTitle3')}</p>
      </div>
      <img
        src={title3Img}
        alt="Quang Cau"
        width={600}
        height={600}
        className="translate-x-[-90px] translate-y-[-210px]"
      />
      <div className="absolute flex flex-col gap-2 top-[680px] left-[90px]">
        <p className="w-70 font-['Syne'] font-bold text-[#3C2F2F] text-[22px]">{t('title5')}</p>
        <img
          src={vectorImg}
          alt="Vector"
          width={210}
          height={210}
          className="translate-x-[20px] translate-y-[-10px]"
        />
        <p className="w-63 font-['Caveat'] font-bold text-[#3C2F2F] text-[30px] translate-y-[-15px] leading-tight">{t('subTitle5')}</p>
      </div>
      <img
          src={title5Img}
          alt="Ha Long Bay"
          width={525}
          height={500}
          className="translate-x-[250px] translate-y-[-210px]"
        />
    </div>
  );
};

export default LeftSection;