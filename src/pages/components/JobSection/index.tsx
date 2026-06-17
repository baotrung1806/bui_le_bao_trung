import { useState, useEffect } from 'react';
import pickImg from '@/assets/images/job/pick.webp';
import boardImg from '@/assets/images/job/board.webp';
import labelImg from '@/assets/images/common/Label.webp';
import aiArtistImg from '@/assets/images/job/AI_Architecture.webp';
import cameraOperatorImg from '@/assets/images/job/Camera_Operator.webp';
import cameraOperatorVideo from '@/assets/images/job/descriptions/Camera Operator.mp4';
import contentCreatorImg from '@/assets/images/job/Content_Creator.webp';
import contentCreator2Img from '@/assets/images/job/descriptions/Content Operator.webp';
import videoEditorImg from '@/assets/images/job/Video_Editor.webp';
import videoEditor2Img from '@/assets/images/job/descriptions/Video Editor.webp';
import cameraOperator2Img from '@/assets/images/job/Camera_Operator2.webp';
import thumbnailDesigner2Img from '@/assets/images/job/Thumbnail_Designer2.webp';
import thumbnailDesignerImg from '@/assets/images/job/descriptions/Thumbnail designer.webp';
import driverImg from '@/assets/images/job/descriptions/Drive.webp';
import youtubeImg from '@/assets/images/job/descriptions/YouTube.webp';
import { useTranslation } from '@/utils';
import PhotoStack from '@/components/PhotoStack';
import PolaroidCard from '@/components/PolaroidCard';

/* ─── Type Definitions ────────────────────────────────────────────── */

interface CardConfig {
  rotateClass: string;
  translateClass?: string;
  bgClass?: string;
  hasImg: boolean;
  imgSrc?: string;
  classNameImg?: string;
}

interface JobSectionData {
  title: string;
  linkUrl: string;
  linkTitle: string;
  subTitle: string;
  note: string;
  modalImg?: string;
  modalVideo?: string;
  pickX?: string;
  pickY?: string;
  containerX?: string;
  containerY?: string;
  cards?: CardConfig[];
  className?: string;
  classNameTitle?: string;
}

/* ─── Constants ───────────────────────────────────────────────────── */

const MODAL_CLOSE_DELAY_MS = 300;
const MODAL_OPEN_DELAY_MS = 10;

/* ─── Component ───────────────────────────────────────────────────── */

const JobSection = () => {
  const t = useTranslation('main.job');

  const [selectedSection, setSelectedSection] = useState<JobSectionData | null>(null);
  const [isAnimate, setIsAnimate] = useState(false);

  const handleCloseModal = () => {
    setIsAnimate(false);
    setTimeout(() => setSelectedSection(null), MODAL_CLOSE_DELAY_MS);
  };

  // Khóa scroll khi modal mở & điều khiển animation
  useEffect(() => {
    if (selectedSection) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';

      const animTimeout = setTimeout(() => setIsAnimate(true), MODAL_OPEN_DELAY_MS);
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

  const sectionsData: (JobSectionData & {
    pickX: string;
    pickY: string;
    containerX: string;
    containerY: string;
    cards: CardConfig[];
    className: string;
  })[] = [
    {
      title: t('title1'),
      linkUrl: 'https://www.youtube.com/@trungbui2003',
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
          bgClass: 'bg-none relative z-0 hover:z-50 hover-sway',
          hasImg: false,
        },
        {
          rotateClass: 'rotate-[2deg]',
          translateClass: 'translate-x-[-90px]',
          bgClass: 'bg-black relative z-0 hover:z-50 hover-sway',
          hasImg: false,
        },
        {
          rotateClass: 'rotate-[-8deg]',
          translateClass: 'translate-x-[-80px]',
          bgClass: 'bg-white relative z-0 hover:z-50 hover-sway',
          hasImg: true,
          imgSrc: contentCreatorImg,
          classNameImg: 'w-150 h-120 translate-y-[-40px]',
        },
      ],
      className: 'translate-x-[-285px] translate-y-[270px]',
    },
    {
      title: t('title5'),
      linkUrl:
        'https://drive.google.com/drive/folders/1W4DjLj8Ks_MkgVQNFNIwDmZT5ZB8-olC?usp=sharing',
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
          bgClass: 'bg-white relative z-0 hover:z-50 hover-sway',
          hasImg: true,
          imgSrc: cameraOperator2Img,
          classNameImg: 'w-100 h-100 mb-20',
        },
        {
          rotateClass: 'rotate-[-10deg]',
          translateClass: '',
          bgClass: 'bg-white relative z-0 hover:z-50 hover-sway',
          hasImg: true,
          imgSrc: cameraOperatorImg,
          classNameImg: 'w-120 h-120 mt-40',
        },
      ],
      className: 'translate-x-[120px] translate-y-[95px]',
    },
    {
      title: t('title3'),
      linkUrl:
        'https://drive.google.com/drive/folders/19n7BgYuyjbilPMuiWBT8CKdZ9gBqmCTL?usp=sharing',
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
          bgClass: 'bg-black relative z-0 hover:z-50 hover-sway',
          hasImg: false,
        },
        {
          rotateClass: 'rotate-[-4deg]',
          translateClass: 'translate-x-[-78px]',
          bgClass: 'bg-none relative z-0 hover:z-50 hover-sway',
          hasImg: false,
        },
        {
          rotateClass: 'rotate-0',
          translateClass: 'translate-x-[-90px]',
          bgClass: 'bg-white relative z-0 hover:z-50 hover-sway',
          hasImg: true,
          imgSrc: videoEditorImg,
          classNameImg: 'w-100 h-100',
        },
      ],
      className: 'translate-x-[620px] translate-y-[-80px]',
    },
  ];

  /** Xác định icon (YouTube vs Drive) dựa trên section title */
  const getMediaIcon = (sectionTitle: string) => {
    const isYoutube = sectionTitle === t('title1');
    return {
      src: isYoutube ? youtubeImg : driverImg,
      alt: isYoutube ? 'YouTube' : 'Google Drive',
      className: isYoutube ? 'w-28 h-30 object-contain' : 'w-20 h-20 object-contain',
    };
  };

  return (
    <div id="job" className="h-screen w-full relative">
      {/* Animations (.hover-sway, .continuousSway) đã chuyển sang main.css */}

      {/* ═══════════ MODAL CHI TIẾT ═══════════ */}
      {selectedSection && (
        <div
          className={`fixed inset-0 bg-black/80 z-[999] flex justify-center items-center cursor-default transition-opacity duration-300 ease-in-out ${
            isAnimate ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={handleCloseModal}
          onWheel={(e) => e.stopPropagation()}
        >
          <div
            className={`relative w-[1000px] max-w-[95vw] h-[850px] max-h-[95vh] bg-[#FBF9F4] rounded-[30px] p-10 shadow-2xl flex flex-col transition-all duration-300 ease-in-out transform ${
              isAnimate ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Nút đóng */}
            <button
              className="absolute top-4 right-6 text-5xl font-light text-[#3C2F2F] hover:text-red-500 transition-colors duration-200 z-50 cursor-pointer"
              onClick={handleCloseModal}
            >
              &times;
            </button>

            {/* Tiêu đề */}
            <div className="flex-shrink-0 flex flex-col items-center mt-[-10px]">
              <h2 className="font-['Syne'] font-bold text-[48px] text-[#3C2F2F] uppercase tracking-wide">
                {selectedSection.title}
              </h2>
            </div>

            {/* Nội dung cuộn */}
            <div className="flex-1 overflow-y-auto overscroll-contain pr-4 custom-scrollbar flex flex-col gap-8 font-plus">
              {/* Media */}
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

              {/* Link & Subtitle */}
              <div className="grid grid-cols-[max-content_1fr] w-full flex-shrink-0 items-center gap-12">
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="max-w-[300px] font-plus font-bold text-[28px] text-[#3C2F2F] whitespace-pre-line leading-tight">
                    {selectedSection.linkTitle}
                  </span>

                  {(() => {
                    const icon = getMediaIcon(selectedSection.title);
                    const imgEl = (
                      <img src={icon.src} alt={icon.alt} className={icon.className} />
                    );

                    return selectedSection.linkUrl ? (
                      <a
                        href={selectedSection.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        {imgEl}
                      </a>
                    ) : (
                      <div className="flex items-center justify-center flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                        {imgEl}
                      </div>
                    );
                  })()}
                </div>

                <div
                  className="text-[#3C2F2F] text-[20px] font-plus font-medium whitespace-pre-line leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: selectedSection.subTitle }}
                />
              </div>

              {/* Notes */}
              <div
                className="text-[#3C2F2F] text-[18px] font-plus font-medium whitespace-pre-line text-left leading-[2.2] pb-10 flex-shrink-0"
                dangerouslySetInnerHTML={{ __html: selectedSection.note }}
              />
            </div>
          </div>
        </div>
      )}

      {/* ═══════════ GIAO DIỆN CHÍNH ═══════════ */}
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
              linkUrl:
                'https://drive.google.com/drive/folders/1YCCbeHfgQZ2OXtWc8F6WrTazTtAQZo1n?usp=sharing',
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
              linkUrl:
                'https://drive.google.com/drive/folders/1JVXLCSFKhwaz_22XPNKHxjj8F5j-XnhL?usp=sharing',
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
