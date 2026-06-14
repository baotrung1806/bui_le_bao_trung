import { useState } from 'react';
import bookImg from '../../../assets/images/project/Book.webp';
import pageImg from '../../../assets/images/project/Page.webp';
import penOldImg from '../../../assets/images/project/Pen_old.webp';

import zoom1Img from '../../../assets/images/project/zoom1.webp';
import zoom2Img from '../../../assets/images/project/zoom2.webp';
import zoom3Img from '../../../assets/images/project/zoom3.webp';
import zoom4Img from '../../../assets/images/project/zoom4.webp';
import zoom5Img from '../../../assets/images/project/zoom5.webp';

import { useTranslation } from '@/utils';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const ZOOM_MAP: Record<string, string> = {
  zoom1: zoom1Img,
  zoom2: zoom2Img,
  zoom3: zoom3Img,
  zoom4: zoom4Img,
  zoom5: zoom5Img,
};

const ProjectSection = () => {
  const t = useTranslation('main.project');
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<'left' | 'right' | null>(null);

  return (
    <div className="min-h-screen w-full flex justify-center items-center mt-0 pl-[40px]">
      <div className="relative shrink-0" style={{ width: '1337px', height: '850px' }}>
        <img
          src={bookImg}
          alt="Book Background"
          className="absolute h-full w-full object-contain top-1/2 -translate-y-1/2 left-0"
          loading="lazy"
        />

        <img
          src={pageImg}
          alt="Page Left"
          width={630}
          height={630}
          className="absolute h-[100%] left-[50px] top-1/2 -translate-y-1/2 object-contain"
          loading="lazy"
        />

        <img
          src={pageImg}
          alt="Page Right"
          width={630}
          height={630}
          className="absolute h-[100%] right-[65px] top-1/2 -translate-y-1/2 object-contain"
          loading="lazy"
        />

        <div
          className={`absolute top-0 left-0 h-full w-[688px] ${activeSection === 'left' ? 'z-40' : 'z-10'}`}
        >
          <LeftSection
            setShowOverlay={setShowOverlay}
            setActiveSection={setActiveSection}
            zoomMap={ZOOM_MAP}
          />
        </div>

        <div
          className={`absolute top-0 left-[688px] h-full w-[688px] ${activeSection === 'right' ? 'z-40' : 'z-10'}`}
        >
          <RightSection
            setShowOverlay={setShowOverlay}
            setActiveSection={setActiveSection}
            zoomMap={ZOOM_MAP}
          />
        </div>

        {/* Decor: Bút cũ và Tiêu đề chính */}
        <img
          src={penOldImg}
          alt="Pen Old"
          width={135}
          height={135}
          className={`absolute right-[-125px] top-[-50px] z-20 animate-pen-float`}
          loading="lazy"
        />
        <h1 className="absolute right-[-215px] top-[-10px] w-[200px] text-center font-['Caveat'] font-bold text-[40px] text-[#3C2F2F] z-20 animate-pen-float">
          {t('headline')}
        </h1>
      </div>
    </div>
  );
};

export default ProjectSection;
