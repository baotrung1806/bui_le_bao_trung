import pickImg from "../../../assets/images/job/pick.webp";
import boardImg from "../../../assets/images/job/board.webp";
import labelImg from "../../../assets/images/common/Label.webp";
import { useTranslation } from '@/utils';
import PhotoStack from "@/components/PhotoStack";
import PolaroidCard from "@/components/PolaroidCard";

const JobSection = () => {
  const t = useTranslation('main.job');

  const sectionsData = [
    {
      title: t('title1'),
      pickX: '-185px', pickY: '-310px',
      containerX: '-190px', containerY: '-240px',
      cards: [
        { rotateClass: 'rotate-[6deg]', translateClass: 'translate-x-[-85px] translate-y-[10px]', bgClass: 'bg-none', hasImg: false },
        { rotateClass: 'rotate-[2deg]', translateClass: 'translate-x-[-90px]', bgClass: 'bg-[#000000]', hasImg: false },
        { rotateClass: 'rotate-[-8deg]', translateClass: 'translate-x-[-80px]', bgClass: 'bg-white', hasImg: true, imgSrc: "" }
      ],
      className: 'translate-x-[-285px] translate-y-[195px]'
    },
    {
      title: t('title2'),
      pickX: '260px', pickY: '-625px',
      containerX: '210px', containerY: '-560px',
      cards: [
        { rotateClass: 'rotate-[15deg]', translateClass: 'translate-x-[-110px]', bgClass: 'bg-white', hasImg: true, imgSrc: "" },
        { rotateClass: 'rotate-[-10deg]', bgClass: 'bg-white', hasImg: true, imgSrc: "" }
      ],
      className: 'translate-x-[120px] translate-y-[-125px]'
    },
    {
      title: t('title3'),
      pickX: '700px', pickY: '-950px',
      containerX: '685px', containerY: '-885px',
      cards: [
        { rotateClass: 'rotate-[8deg]', translateClass: 'translate-x-[-105px]', bgClass: 'bg-[#000000]', hasImg: false },
        { rotateClass: 'rotate-[-4deg]', translateClass: 'translate-x-[-78px]', bgClass: 'bg-none', hasImg: false },
        { rotateClass: 'rotate-0', translateClass: 'translate-x-[-90px]', bgClass: 'bg-white', hasImg: true, imgSrc: "" }
      ],
      className: 'translate-x-[620px] translate-y-[-445px]'
    }
  ];

  return (
    <div className="flex flex-col inset-0 h-[90vh] justify-around items-center">
      {sectionsData.map((section, idx) => (
        <div key={idx}>
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
      <div className="absolute">
        <img
          src={boardImg}
          alt="Board"
          width={570}
          height={570}
          className="translate-x-[-500px] translate-y-[190px]"
        />
        <h1 className="absolute font-['Syne'] font-bold text-[96px] text-[#3C2F2F] translate-x-[-460px] translate-y-[-90px]">
          {t('headline')}
        </h1>
      </div>

      <PolaroidCard
        imageSrc={""}
        imageAlt="Nội dung"
        labelImgSrc={labelImg}
        title={t('title4')}
        className="translate-y-[15px]"
      />

      <PolaroidCard
        imageSrc={""}
        imageAlt="Nội dung"
        labelImgSrc={labelImg}
        title={t('title5')}
        className="translate-x-[550px] translate-y-[15px]"
        classNameTitle="ml-[-35px] min-w-[310px]"
      />
    </div>
  );
};

export default JobSection;