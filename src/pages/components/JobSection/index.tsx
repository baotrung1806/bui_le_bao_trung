import { useState } from 'react';
import PhotoStack from '@/components/PhotoStack';
import Arrow from '@/assets/images/job/Arrow.webp';
import BoardJob from '@/assets/images/job/BoardJob.webp';
import Firelight from '@/assets/images/job/Firelight.webp';

import { JOB_CARDS } from './jobCards';

const JobSection = () => {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  return (
    <div id="job" className="relative z-20 min-h-screen overflow-visible px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-full flex-wrap items-start justify-center gap-x-14 overflow-visible">
        {JOB_CARDS.map((card) => (
          <PhotoStack
            key={card.id}
            cardId={card.id}
            videoSrc={card.videoSrc}
            href={card.href}
            title={card.title}
            className="relative z-30 translate-x-20 -translate-y-35 cursor-pointer"
            hoveredCardId={hoveredCardId}
            onHoverChange={setHoveredCardId}
          />
        ))}

        <div className="flex flex-row gap-x-50">
          <img src={BoardJob} alt="Board Job" className="job-gentle-float w-full h-[350px]" />
          <div className="flex w-full flex-col items-center justify-center">
            <img src={Arrow} alt="Arrow" className="job-gentle-float job-gentle-float-delay-1 w-45 h-45 -translate-x-20" />
            <h2 className="job-gentle-float job-gentle-float-delay-2 font-['Caveat'] text-[80px] font-bold leading-none text-[#3C2F2F] -translate-y-10 rotate-[-14.93deg]">
              Click to see more
            </h2>
            <img src={Firelight} alt="Firelight" className="job-gentle-float job-gentle-float-delay-3 w-45 h-45 translate-x-60 -translate-y-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSection;
