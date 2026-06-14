import { useState } from 'react';
import pinNewImg from '../../../assets/images/project/Pen_new.webp';
import vectorImg from '../../../assets/images/project/Vector.webp';
import labelImg from '../../../assets/images/common/Label.webp';
import label3Img from '../../../assets/images/project/Label3.webp';
import title2Img from '../../../assets/images/project/title2.webp';
import title4Img from '../../../assets/images/project/title4.webp';
import { useTranslation } from '@/utils';

interface RightSectionProps {
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveSection: React.Dispatch<React.SetStateAction<'left' | 'right' | null>>;
  zoomMap: Record<string, string>;
}

const RIGHT_BLOCKS = [
  {
    id: 2,
    titleKey: 'title2',
    subTitleKey: 'subTitle2',
    imageSrc: title2Img,
    containerPos: 'top-[35px] left-[-25px]',
    imgPos: 'top-[5px] left-[220px]',
    imgWidth: 420,
    hasLabel: false,
    zoomImageKey: 'zoom2',
    rotateClass: 'rotate-[1deg]',
  },
  {
    id: 4,
    titleKey: 'title4',
    subTitleKey: 'subTitle4',
    imageSrc: title4Img,
    containerPos: 'top-[300px] left-[260px]',
    imgPos: 'top-[310px] left-[-165px]',
    imgWidth: 500,
    hasLabel: true,
    zoomImageKey: 'zoom4',
    rotateClass: '',
  },
];

const BASE_TEXT_COLOR = 'text-[#3C2F2F]';

const RightSection = ({ setShowOverlay, setActiveSection, zoomMap }: RightSectionProps) => {
  const t = useTranslation('main.project');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <>
      {/* Decor Labels */}
      <img
        src={labelImg}
        alt="Label Top"
        width={90}
        height={90}
        className="absolute rotate-[38deg] left-[250px] top-[-12px] z-20"
        loading="lazy"
      />
      <img
        src={labelImg}
        alt="Label Bottom"
        width={100}
        height={100}
        className="absolute rotate-[18deg] left-[240px] top-[180px] z-20"
        loading="lazy"
      />

      {RIGHT_BLOCKS.map((block) => {
        const isHovered = hoveredId === block.id;

        return (
          <div key={block.id}>
            {/* Nhóm Text */}
            <div className={`absolute flex flex-col gap-1 ${block.containerPos} z-20`}>
              <p
                className={`font-['Syne'] font-bold ${BASE_TEXT_COLOR} w-[320px] text-[22px] md:text-[24px] text-center -ml-[30px]`}
              >
                {t(block.titleKey)}
              </p>
              <img
                src={vectorImg}
                alt="Vector Decor"
                width={230}
                height={230}
                className="-mt-2 ml-5"
                loading="lazy"
              />
              <p
                className={`w-[290px] font-['Caveat'] font-bold ${BASE_TEXT_COLOR} text-[26px] md:text-[30px] mt-1 leading-tight`}
              >
                {t(block.subTitleKey)}
              </p>
            </div>

            {/* 1. KHỐI ẢNH NHỎ GỐC */}
            <div
              className={`absolute z-10 ${block.rotateClass}`}
              style={{ ...parsePosition(block.imgPos), width: `${block.imgWidth}px` }}
            >
              <img
                src={block.imageSrc}
                alt="Project Illustration"
                className="w-full h-auto object-contain cursor-zoom-in relative z-10"
                loading="lazy"
                onMouseEnter={() => {
                  setHoveredId(block.id);
                  setShowOverlay(true);
                  setActiveSection('right');
                }}
                onMouseLeave={() => {
                  setHoveredId(null);
                  setShowOverlay(false);
                  setActiveSection(null);
                }}
              />
              {block.hasLabel && (
                <img
                  src={label3Img}
                  alt="Label Decor"
                  width={100}
                  height={100}
                  className="absolute top-[-20px] right-[210px] rotate-[175deg] z-20"
                  loading="lazy"
                />
              )}
            </div>

            {/* 2. KHỐI ẢNH PHÓNG TO ĐỘC LẬP */}
            <div
              className={`absolute transition-all duration-500 transform pointer-events-none ${block.rotateClass} ${
                isHovered ? 'opacity-100 scale-110 z-50' : 'opacity-0 scale-50 z-0'
              }`}
              style={{ ...parsePosition(block.imgPos), width: `${block.imgWidth}px` }}
            >
              <img
                src={zoomMap[block.zoomImageKey]}
                alt="Zoomed"
                className="w-full h-90 object-contain"
              />
            </div>
          </div>
        );
      })}

      <img
        src={pinNewImg}
        alt="Pin Decor"
        width={300}
        height={300}
        className="absolute bottom-[95px] right-[20px] z-10 animate-pen-float"
        loading="lazy"
      />
      <span
        className={`absolute bottom-[105px] right-[260px] w-[250px] font-['Caveat'] font-bold ${BASE_TEXT_COLOR} text-[30px]`}
      >
        {t('endline')}
      </span>
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

export default RightSection;