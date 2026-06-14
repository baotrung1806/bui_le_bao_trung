import { useState } from 'react';
import magnifyingGlassImg from '../../../assets/images/project/Magnifying_glass.webp';
import vectorImg from '../../../assets/images/project/Vector.webp';
import title1Img from '../../../assets/images/project/title1.webp';
import title3Img from '../../../assets/images/project/title3.webp';
import title5Img from '../../../assets/images/project/title5.webp';
import { useTranslation } from '@/utils';

interface LeftSectionProps {
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveSection: React.Dispatch<React.SetStateAction<'left' | 'right' | null>>;
  zoomMap: Record<string, string>;
}

const LEFT_BLOCKS = [
  {
    id: 1,
    titleKey: 'title1',
    subTitleKey: 'subTitle1',
    imageSrc: title1Img,
    imgAlt: 'Bat Trang',
    containerPos: 'top-[50px] left-[80px]',
    imgPos: 'top-[20px] left-[285px]',
    imgWidth: 430,
    zoomImageKey: 'zoom1',
  },
  {
    id: 3,
    titleKey: 'title3',
    subTitleKey: 'subTitle3',
    imageSrc: title3Img,
    imgAlt: 'Quang Cau',
    containerPos: 'top-[290px] left-[370px]',
    imgPos: 'top-[270px] left-[-70px]',
    imgWidth: 550,
    zoomImageKey: 'zoom3',
  },
  {
    id: 5,
    titleKey: 'title5',
    subTitleKey: 'subTitle5',
    imageSrc: title5Img,
    imgAlt: 'Ha Long Bay',
    containerPos: 'top-[600px] left-[80px]',
    imgPos: 'bottom-[3px] left-[270px]',
    imgWidth: 450,
    zoomImageKey: 'zoom5',
  },
];

const LeftSection = ({ setShowOverlay, setActiveSection, zoomMap }: LeftSectionProps) => {
  const t = useTranslation('main.project');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <>
      {/* Decor Kính lúp */}
      <img
        src={magnifyingGlassImg}
        alt="Magnifying Glass"
        className="absolute top-[6%] -translate-y-1/2 left-[-160px] w-[300px] h-[300px] z-20 animate-pen-float"
        loading="lazy"
      />

      {LEFT_BLOCKS.map((block) => {
        const isHovered = hoveredId === block.id;

        return (
          <div key={block.id}>
            {/* Nhóm Text */}
            <div className={`absolute flex flex-col gap-1 ${block.containerPos}`}>
              <p className="font-['Syne'] font-bold text-[#3C2F2F] text-[22px] md:text-[22px] text-center">
                {t(block.titleKey)}
              </p>
              <img
                src={vectorImg}
                alt="Vector Decor"
                width={230}
                height={230}
                className="-mt-1 ml-2"
                loading="lazy"
              />
              <p className="w-[250px] font-['Caveat'] font-bold text-[#3C2F2F] text-[26px] md:text-[30px] mt-1 leading-tight">
                {t(block.subTitleKey)}
              </p>
            </div>

            {/* 1. KHỐI ẢNH NHỎ GỐC */}
            <div
              className="absolute z-10"
              style={{ ...parsePosition(block.imgPos), width: `${block.imgWidth}px` }}
            >
              <img
                src={block.imageSrc}
                alt={block.imgAlt}
                className="w-full h-auto object-contain cursor-zoom-in relative z-10"
                loading="lazy"
                onMouseEnter={() => {
                  setHoveredId(block.id);
                  setShowOverlay(true);
                  setActiveSection('left'); // Báo hiệu trang trái được chọn
                }}
                onMouseLeave={() => {
                  setHoveredId(null);
                  setShowOverlay(false);
                  setActiveSection(null);
                }}
              />
            </div>

            {/* 2. KHỐI ẢNH PHÓNG TO ĐỘC LẬP - đặt z-50 cao nhất */}
            <div
              className={`absolute transition-all duration-600 transform pointer-events-none ${
                isHovered ? 'opacity-100 scale-110 z-50' : 'opacity-0 scale-50 z-0'
              }`}
              style={{ ...parsePosition(block.imgPos), width: `${block.imgWidth}px` }}
            >
              <img
                src={zoomMap[block.zoomImageKey]}
                alt="Zoomed"
                width={500}
                height={500}
                className="object-contain bg-white rounded-lg p-1 shadow-2xl"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

const parsePosition = (posClass: string) => {
  const styles: React.CSSProperties = {};
  if (posClass.includes('top-')) styles.top = posClass.match(/top-\[?(-?\d+px)\]?/)?.[1];
  if (posClass.includes('bottom-')) styles.bottom = posClass.match(/bottom-\[?(-?\d+px)\]?/)?.[1];
  if (posClass.includes('left-')) styles.left = posClass.match(/left-\[?(-?\d+px)\]?/)?.[1];
  if (posClass.includes('right-')) styles.right = posClass.match(/right-\[?(-?\d+px)\]?/)?.[1];
  return styles;
};

export default LeftSection;
