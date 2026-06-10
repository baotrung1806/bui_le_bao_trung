import magnifyingGlassImg from "../../../assets/images/project/Magnifying_glass.webp";
import vectorImg from "../../../assets/images/project/Vector.webp";
import title1Img from "../../../assets/images/project/title1.webp";
import title3Img from "../../../assets/images/project/title3.webp";
import title5Img from "../../../assets/images/project/title5.webp";
import { useTranslation } from '@/utils';

const LEFT_BLOCKS = [
  {
    id: 1,
    titleKey: 'title1',
    subTitleKey: 'subTitle1',
    imageSrc: title1Img,
    imgAlt: "Bat Trang",
    containerPos: "top-[60px] left-[140px]",
    imgPos: "top-[150px] left-[350px]",
    imgWidth: 430,
  },
  {
    id: 3,
    titleKey: 'title3',
    subTitleKey: 'subTitle3',
    imageSrc: title3Img,
    imgAlt: "Quang Cau",
    containerPos: "top-[320px] left-[400px]",
    imgPos: "top-[380px] left-[50px]",
    imgWidth: 500, // Đã điều chỉnh để vừa khung giấy
  },
  {
    id: 5,
    titleKey: 'title5',
    subTitleKey: 'subTitle5',
    imageSrc: title5Img,
    imgAlt: "Ha Long Bay",
    containerPos: "top-[600px] left-[140px]",
    imgPos: "bottom-[50px] left-[300px]",
    imgWidth: 400,
  }
];

const LeftSection = () => {
  const t = useTranslation('main.project');

  return (
    <div className="absolute inset-0 z-10 w-[688px]"> {/* Phân nửa bên trái của khung 1377px */}
      {/* Decor Kính lúp */}
      <img
        src={magnifyingGlassImg}
        alt="Magnifying Glass"
        className="absolute w-[200px] h-[200px] -translate-y-1/2 left-[-20px] z-20"
        loading="lazy"
      />

      {LEFT_BLOCKS.map((block) => (
        <div key={block.id}>
          {/* Nhóm Text (Title + Vector + SubTitle) */}
          <div className={`absolute flex flex-col gap-1 ${block.containerPos}`}>
            <p className="font-['Syne'] font-bold text-[#3C2F2F] text-[22px] md:text-[24px]">
              {t(block.titleKey)}
            </p>
            <img
              src={vectorImg}
              alt="Vector Decor"
              width={200}
              height={200}
              className="-mt-3"
              loading="lazy"
            />
            <p className="w-[250px] font-['Caveat'] font-bold text-[#3C2F2F] text-[26px] md:text-[30px] -mt-5 leading-tight">
              {t(block.subTitleKey)}
            </p>
          </div>

          {/* Ảnh minh họa chính */}
          <img
            src={block.imageSrc}
            alt={block.imgAlt}
            width={block.imgWidth}
            className={`absolute ${block.imgPos} object-contain`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default LeftSection;