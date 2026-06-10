import pinNewImg from "../../../assets/images/project/Pen_new.webp";
import vectorImg from "../../../assets/images/project/Vector.webp";
import labelImg from "../../../assets/images/common/Label.webp";
import label3Img from "../../../assets/images/project/Label3.webp";
import title2Img from "../../../assets/images/project/title2.webp";
import title4Img from "../../../assets/images/project/title4.webp";
import { useTranslation } from '@/utils';

const RIGHT_BLOCKS = [
  {
    id: 2,
    titleKey: 'title2',
    subTitleKey: 'subTitle2',
    imageSrc: title2Img,
    containerPos: "top-[60px] left-[60px]",
    imgPos: "top-[40px] left-[250px] rotate-[1deg]",
    imgWidth: 420,
    hasLabel: false,
  },
  {
    id: 4,
    titleKey: 'title4',
    subTitleKey: 'subTitle4',
    imageSrc: title4Img,
    containerPos: "top-[320px] left-[320px]",
    imgPos: "top-[360px] -left-[80px]",
    imgWidth: 500,
    hasLabel: true,
  }
];

const BASE_TEXT_COLOR = "text-[#3C2F2F]";

const RightSection = () => {
  const t = useTranslation('main.project');

  return (
    <div className="absolute inset-0 left-[688px] z-10 w-[688px]"> {/* Phân nửa bên phải */}
      
      {/* Decor Labels */}
      <img
        src={labelImg}
        alt="Label Top"
        width={90}
        height={90}
        className="absolute rotate-[38deg] left-[250px] top-[10px] z-10"
        loading="lazy"
      />
      <img
        src={labelImg}
        alt="Label Bottom"
        width={100}
        height={100}
        className="absolute rotate-[18deg] left-[250px] top-[230px] z-10"
        loading="lazy"
      />

      {RIGHT_BLOCKS.map((block) => (
        <div key={block.id}>
          {/* Nhóm Text */}
          <div className={`absolute flex flex-col gap-1 ${block.containerPos} z-20`}>
            <p className={`font-['Syne'] font-bold ${BASE_TEXT_COLOR} text-[22px] md:text-[24px]`}>
              {t(block.titleKey)}
            </p>
            <img
              src={vectorImg}
              alt="Vector Decor"
              width={200}
              height={200}
              className="-mt-3 ml-2"
              loading="lazy"
            />
            <p className={`w-[250px] font-['Caveat'] font-bold ${BASE_TEXT_COLOR} text-[26px] md:text-[30px] -mt-5 leading-tight`}>
              {t(block.subTitleKey)}
            </p>
          </div>

          {/* Ảnh minh họa chính & Sub Label */}
          <div className={`absolute ${block.imgPos}`}>
            <img
              src={block.imageSrc}
              alt="Project Illustration"
              width={block.imgWidth}
              className="object-contain"
              loading="lazy"
            />
            {block.hasLabel && (
              <img
                src={label3Img}
                alt="Label Decor"
                width={100}
                height={100}
                className="absolute top-[-20px] right-[20px] rotate-[175deg]"
                loading="lazy"
              />
            )}
          </div>
        </div>
      ))}

      {/* Decor Pin & Endline text */}
      <img
        src={pinNewImg}
        alt="Pin Decor"
        width={300}
        height={300}
        className="absolute bottom-[20px] right-[40px] z-10"
        loading="lazy"
      />
      <span className={`absolute bottom-[80px] right-[280px] w-[250px] font-['Caveat'] font-bold ${BASE_TEXT_COLOR} text-[30px]`}>
        {t('endline')}
      </span>
    </div>
  );
};

export default RightSection;