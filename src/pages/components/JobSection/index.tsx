'use client';

import { useState, useEffect } from 'react';
import pickImg from '../../../assets/images/job/pick.webp';
import boardImg from '../../../assets/images/job/board.webp';
import labelImg from '../../../assets/images/common/Label.webp';
import aiArtistImg from '../../../assets/images/job/AI_Architecture.webp';
import cameraOperatorImg from '../../../assets/images/job/Camera_Operator.webp';
import cameraOperatorVideo from '../../../assets/images/job/descriptions/Camera Operator.mp4';
import contentCreatorImg from '../../../assets/images/job/Content_Creator.webp';
import contentCreator2Img from '../../../assets/images/job/descriptions/Content Operator.webp';
import videoEditorImg from '../../../assets/images/job/Video_Editor.webp';
import videoEditor2Img from '../../../assets/images/job/descriptions/Video Editor.webp';
import cameraOperator2Img from '../../../assets/images/job/Camera_Operator2.webp';
import thumbnailDesigner2Img from '../../../assets/images/job/Thumbnail_Designer2.webp';
import thumbnailDesignerImg from '../../../assets/images/job/descriptions/Thumbnail designer.webp';
import driverImg from '../../../assets/images/job/descriptions/Drive.webp';
import youtubeImg from '../../../assets/images/job/descriptions/YouTube.webp';
import { useTranslation } from '@/utils';
import PhotoStack from '@/components/PhotoStack';
import PolaroidCard from '@/components/PolaroidCard';

const JobSection = () => {
  const t = useTranslation('main.job');

  // State quản lý dữ liệu Modal
  const [selectedSection, setSelectedSection] = useState<any>(null);
  // State quản lý riêng hiệu ứng Zoom (Mở/Đóng)
  const [isAnimate, setIsAnimate] = useState(false);

  // Hàm xử lý đóng Modal có delay để chờ hiệu ứng thu nhỏ chạy xong
  const handleCloseModal = () => {
    setIsAnimate(false); // Kích hoạt hiệu ứng thu nhỏ & mờ dần
    setTimeout(() => {
      setSelectedSection(null); // Thực tế xóa khỏi DOM sau 300ms
    }, 300);
  };

  // =========================================================
  // HỆ THỐNG KHÓA SCROLL & ĐIỀU KHIỂN ANIMATION
  // =========================================================
  useEffect(() => {
    if (selectedSection) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';

      // Tạo một delay siêu ngắn để trình duyệt kịp render DOM trước khi kích hoạt hiệu ứng phóng to
      const animTimeout = setTimeout(() => setIsAnimate(true), 10);
      return () => clearTimeout(animTimeout);
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [selectedSection]);
  // =========================================================

  const sectionsData = [
    {
      title: t('title1'),
      linkTitle: t('linkTitle1'),
      subTitle: t('subTitle1'),
      note: t('note1'),
      modalImg: contentCreator2Img,
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
          bgClass: 'bg-black',
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
      linkTitle: t('linkTitle5'),
      subTitle: t('subTitle5'),
      note: t('note5'),
      modalVideo: cameraOperatorVideo, 
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
      linkTitle: t('linkTitle3'),
      subTitle: t('subTitle3'),
      note: t('note3'),
      modalImg: videoEditor2Img,
      pickX: '700px',
      pickY: '-575px',
      containerX: '685px',
      containerY: '-510px',
      cards: [
        {
          rotateClass: 'rotate-[8deg]',
          translateClass: 'translate-x-[-105px]',
          bgClass: 'bg-black',
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
    <div id="job" className="h-screen w-full relative">
      {/* ================= MODAL HIỂN THỊ CHI TIẾT ================= */}
      {selectedSection && (
        <div
          /* Lớp nền mờ dần (Fade) */
          className={`fixed inset-0 bg-black/80 z-[999] flex justify-center items-center cursor-default transition-opacity duration-300 ease-in-out ${
            isAnimate ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={handleCloseModal}
          onWheel={(e) => e.stopPropagation()}
        >
          {/* Khung Modal phóng to/thu nhỏ dần (Zoom In/Out) */}
          <div
            className={`relative w-[1000px] max-w-[95vw] h-[850px] max-h-[95vh] bg-[#FBF9F4] rounded-[30px] p-10 shadow-2xl flex flex-col transition-all duration-300 ease-in-out transform ${
              isAnimate ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Nút Đóng Modal */}
            <button
              className="absolute top-4 right-6 text-5xl font-light text-[#3C2F2F] hover:text-red-500 transition-colors duration-200 z-50 cursor-pointer"
              onClick={handleCloseModal}
            >
              &times;
            </button>

            {/* Tiêu đề Modal */}
            <div className="flex-shrink-0 flex flex-col items-center mt-[-10px]">
              <h2 className="font-['Syne'] font-bold text-[48px] text-[#3C2F2F] uppercase tracking-wide">
                {selectedSection.title}
              </h2>
            </div>

            {/* NỘI DUNG CUỘN ĐƯỢC BÊN TRONG */}
            <div className="flex-1 overflow-y-auto overscroll-contain pr-4 custom-scrollbar flex flex-col gap-8 font-plus">
              
              {/* 1. Phần Media */}
              <div className="w-full h-auto bg-[#1E1E1E] rounded-xl overflow-hidden flex-shrink-0 shadow-inner">
                {selectedSection.modalVideo ? (
                  <video
                    src={selectedSection.modalVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto block"
                  />
                ) : selectedSection.modalImg ? (
                  <img
                    src={selectedSection.modalImg}
                    alt="Portfolio"
                    className="w-full h-auto block"
                  />
                ) : (
                  <div className="w-full h-[400px] flex items-center justify-center text-gray-500 text-xl font-medium">
                    Image Placeholder
                  </div>
                )}
              </div>

              {/* 2. Phần Link Title & Subtitle */}
              <div className="grid grid-cols-[max-content_1fr] w-full flex-shrink-0 items-center gap-12">
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="max-w-[300px] font-plus font-bold text-[28px] text-[#3C2F2F] whitespace-pre-line leading-tight">
                    {selectedSection.linkTitle}
                  </span>

                  <div className="flex items-center justify-center flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                    <img
                      src={selectedSection.title === t('title1') ? youtubeImg : driverImg}
                      alt={selectedSection.title === t('title1') ? 'YouTube' : 'Google Drive'}
                      className={
                        selectedSection.title === t('title1')
                          ? 'w-28 h-30 object-contain'
                          : 'w-20 h-20 object-contain'
                      }
                    />
                  </div>
                </div>

                <div
                  className="text-[#3C2F2F] text-[20px] font-plus font-medium whitespace-pre-line leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: selectedSection.subTitle }}
                />
              </div>

              {/* 3. Phần Notes */}
              <div
                className="text-[#3C2F2F] text-[18px] font-plus font-medium whitespace-pre-line text-left leading-[2.2] pb-10 flex-shrink-0"
                dangerouslySetInnerHTML={{ __html: selectedSection.note }}
              />
            </div>
          </div>
        </div>
      )}
      {/* ================= END MODAL ================= */}

      {/* ================= GIAO DIỆN CHÍNH BÊN NGOÀI ================= */}
      <div className="relative w-[1440px] h-[900px] mx-auto flex flex-col justify-around items-center">
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
          onClick={() =>
            setSelectedSection({
              title: t('title4'),
              linkTitle: t('linkTitle4'),
              subTitle: t('subTitle4'),
              note: t('note4'),
              modalImg: aiArtistImg,
            })
          }
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
          onClick={() =>
            setSelectedSection({
              title: t('title2'),
              linkTitle: t('linkTitle2'),
              subTitle: t('subTitle2'),
              note: t('note2'),
              modalImg: thumbnailDesignerImg,
            })
          }
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