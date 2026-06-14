"use client";

import { useState } from 'react';
import pickImg from '../../../assets/images/job/pick.webp';
import boardImg from '../../../assets/images/job/board.webp';
import labelImg from '../../../assets/images/common/Label.webp';
import aiArtistImg from '../../../assets/images/job/AI_Architecture.webp';
import cameraOperatorImg from '../../../assets/images/job/Camera_Operator.webp';
import contentCreatorImg from '../../../assets/images/job/Content_Creator.webp';
import videoEditorImg from '../../../assets/images/job/Video_Editor.webp';
import cameraOperator2Img from '../../../assets/images/job/Camera_Operator2.webp';
import thumbnailDesigner2Img from '../../../assets/images/job/Thumbnail_Designer2.webp';
import { useTranslation } from '@/utils';
import PhotoStack from '@/components/PhotoStack';
import PolaroidCard from '@/components/PolaroidCard';

const JobSection = () => {
  const t = useTranslation('main.job');
  
  // State quản lý bật/tắt Modal
  const [selectedSection, setSelectedSection] = useState<any>(null);

  const sectionsData = [
    {
      title: t('title1'),
      pickX: '-185px',
      pickY: '-225px',
      containerX: '-190px',
      containerY: '-155px',
      cards: [
        {
          rotateClass: 'rotate-[6deg]',
          translateClass: 'translate-x-[-85px] translate-y-[10px]',
          bgClass: 'bg-none',
          hasImg: false,
        },
        {
          rotateClass: 'rotate-[2deg]',
          translateClass: 'translate-x-[-90px]',
          bgClass: 'bg-[#000000]',
          hasImg: false,
        },
        {
          rotateClass: 'rotate-[-8deg]',
          translateClass: 'translate-x-[-80px]',
          bgClass: 'bg-white',
          hasImg: true,
          imgSrc: contentCreatorImg,
          classNameImg: 'w-150 h-150',
        },
      ],
      className: 'translate-x-[-285px] translate-y-[270px]',
    },
    {
      title: t('title5'),
      pickX: '260px',
      pickY: '-400px',
      containerX: '210px',
      containerY: '-335px',
      cards: [
        {
          rotateClass: 'rotate-[15deg]',
          translateClass: 'translate-x-[-110px]',
          bgClass: 'bg-white',
          hasImg: true,
          imgSrc: cameraOperator2Img,
          classNameImg: 'w-100 h-100 mb-20',
        },
        {
          rotateClass: 'rotate-[-10deg]',
          bgClass: 'bg-white',
          hasImg: true,
          imgSrc: cameraOperatorImg,
          classNameImg: 'w-120 h-120 mt-40',
        },
      ],
      className: 'translate-x-[120px] translate-y-[95px]',
    },
    {
      title: t('title3'),
      pickX: '700px',
      pickY: '-575px',
      containerX: '685px',
      containerY: '-510px',
      cards: [
        {
          rotateClass: 'rotate-[8deg]',
          translateClass: 'translate-x-[-105px]',
          bgClass: 'bg-[#000000]',
          hasImg: false,
        },
        {
          rotateClass: 'rotate-[-4deg]',
          translateClass: 'translate-x-[-78px]',
          bgClass: 'bg-none',
          hasImg: false,
        },
        {
          rotateClass: 'rotate-0',
          translateClass: 'translate-x-[-90px]',
          bgClass: 'bg-white',
          hasImg: true,
          imgSrc: videoEditorImg,
          classNameImg: 'w-100 h-100',
        },
      ],
      className: 'translate-x-[620px] translate-y-[-80px]',
    },
  ];

  return (
    <div className="h-screen w-full relative">
      
      {/* MODAL */}
      {selectedSection && (
        <div 
          className="fixed inset-0 bg-black/80 z-[999] flex justify-center items-center cursor-default"
          onClick={() => setSelectedSection(null)} 
        >
          <div 
            className="relative w-3/5 min-h-3/4 bg-[#E9D4B9] rounded-[20px] p-10 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              className="absolute top-4 right-6 text-5xl font-light text-[#3C2F2F] hover:text-red-500 transition-colors duration-200"
              onClick={() => setSelectedSection(null)}
            >
              &times;
            </button>

            <div className="mt-8 flex flex-col items-center">
              <h2 className="font-['Syne'] font-bold text-[48px] text-[#3C2F2F] mb-6">
                {selectedSection.title}
              </h2>
            </div>
          </div>
        </div>
      )}

      {/* GIAO DIỆN CHÍNH */}
      <div className="relative w-[1440px] h-[900px] mx-auto flex flex-col justify-around items-center">
        
        {/* Phần render PhotoStack */}
        {sectionsData.map((section, idx) => (
          <div 
            key={idx} 
            className="cursor-pointer z-10 hover:opacity-90 transition-opacity" 
            onClick={() => setSelectedSection(section)}
          >
            <PhotoStack
              pickImg={pickImg}
              pickX={section.pickX}
              pickY={section.pickY}
              containerX={section.containerX}
              containerY={section.containerY}
              cards={section.cards}
              title={section.title}
              className={section.className}
            />
          </div>
        ))}
        
        <div className="absolute flex justify-center items-center pointer-events-none">
          <img
            src={boardImg}
            alt="Board"
            width={570}
            height={570}
            className="translate-x-[-500px] translate-y-[190px]"
          />
          <h1 className="absolute font-['Syne'] font-bold text-[96px] text-[#3C2F2F] translate-x-[-500px] translate-y-[190px]">
            {t('headline')}
          </h1>
        </div>

        <div 
          className="cursor-pointer z-10 hover:opacity-90 transition-opacity"
          onClick={() => setSelectedSection({ title: t('title4') })}
        >
          <PolaroidCard
            imageSrc={aiArtistImg}
            imageAlt="Nội dung"
            labelImgSrc={labelImg}
            title={t('title4')}
            className="translate-y-[-250px]"
          />
        </div>

        <div 
          className="cursor-pointer z-10 hover:opacity-90 transition-opacity"
          onClick={() => setSelectedSection({ title: t('title2') })}
        >
          <PolaroidCard
            imageSrc={thumbnailDesigner2Img}
            imageAlt="Nội dung"
            labelImgSrc={labelImg}
            title={t('title2')}
            className="translate-x-[550px] translate-y-[-430px]"
            classNameTitle="ml-[-35px] min-w-[350px]"
          />
        </div>

      </div>
    </div>
  );
};

export default JobSection;