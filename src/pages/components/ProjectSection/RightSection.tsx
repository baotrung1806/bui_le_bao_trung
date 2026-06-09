import pinNewImg from "../../../assets/images/project/Pen_new.webp";
import vectorImg from "../../../assets/images/project/Vector.webp";
import labelImg from "../../../assets/images/common/Label.webp";
import label3Img from "../../../assets/images/project/Label3.webp";
import title2Img from "../../../assets/images/project/title2.webp";
import title4Img from "../../../assets/images/project/title4.webp";
import { useTranslation } from '@/utils';

interface ProjectBlockType {
  id: number;
  titleKey: string;
  subTitleKey: string;
  imageSrc: string;
  containerClass: string;
  titleClass: string;
  vectorClass: string;
  subTitleClass: string;
  mainImgClass: string;
  imgWidth: number;
  imgHeight: number;
  hasLabel?: boolean;
}

interface ProjectBlockProps {
  block: ProjectBlockType;
  t: (key: string) => string;
}

const PROJECT_BLOCKS: ProjectBlockType[] = [
  {
    id: 2,
    titleKey: 'title2',
    subTitleKey: 'subTitle2',
    imageSrc: title2Img,
    containerClass: "top-[40px] left-[700px]",
    titleClass: "w-70 text-[24px]",
    vectorClass: "translate-x-[10px] translate-y-[-10px]",
    subTitleClass: "w-65",
    mainImgClass: "absolute translate-x-[885px] translate-y-[2px] rotate-[1deg]",
    imgWidth: 480,
    imgHeight: 480,
  },
  {
    id: 4,
    titleKey: 'title4',
    subTitleKey: 'subTitle4',
    imageSrc: title4Img,
    containerClass: "top-[330px] left-[980px]",
    titleClass: "w-71 text-[22px] text-center",
    vectorClass: "translate-x-[30px] translate-y-[-10px]",
    subTitleClass: "w-71",
    mainImgClass: "translate-x-[515px] translate-y-[320px]",
    imgWidth: 600,
    imgHeight: 600,
    hasLabel: true,
  }
];

const BASE_TEXT_COLOR = "text-[#3C2F2F]";

const ProjectBlock = ({ block, t }: ProjectBlockProps) => {
  const {
    titleKey,
    subTitleKey,
    imageSrc,
    containerClass,
    titleClass,
    vectorClass,
    subTitleClass,
    mainImgClass,
    imgWidth,
    imgHeight,
    hasLabel
  } = block;

  return (
    <>
      <div className={`absolute flex flex-col gap-2 ${containerClass}`}>
        <p className={`font-['Syne'] font-bold ${BASE_TEXT_COLOR} ${titleClass}`}>
          {t(titleKey)}
        </p>
        <img
          src={vectorImg}
          alt="Vector Decor"
          width={230}
          height={230}
          className={vectorClass}
          loading="lazy"
        />
        <p className={`font-['Caveat'] font-bold ${BASE_TEXT_COLOR} text-[30px] translate-y-[-15px] leading-tight ${subTitleClass}`}>
          {t(subTitleKey)}
        </p>
      </div>

      <div className={hasLabel ? "relative" : undefined}>
        <img
          src={imageSrc}
          alt="Project Illustration"
          width={imgWidth}
          height={imgHeight}
          className={mainImgClass}
          loading="lazy"
        />
        {hasLabel && (
          <img
            src={label3Img}
            alt="Label Decor"
            width={100}
            height={100}
            className="absolute translate-x-[755px] translate-y-[-35px] rotate-[175deg]"
            loading="lazy"
          />
        )}
      </div>
    </>
  );
};

const RightSection = () => {
  const t = useTranslation('main.project');

  return (
    <div className="absolute w-full h-full">
      <img
        src={labelImg}
        alt="Label Top"
        width={90}
        height={90}
        className="absolute rotate-[38deg] translate-x-[930px] translate-y-[-15px] z-10"
      />
      <img
        src={labelImg}
        alt="Label Bottom"
        width={100}
        height={100}
        className="absolute h-25 rotate-[18deg] translate-x-[930px] translate-y-[210px] z-10"
      />

      {PROJECT_BLOCKS.map((block) => (
        <ProjectBlock key={block.id} block={block} t={t} />
      ))}

      <img
        src={pinNewImg}
        alt="Pin Decor"
        width={320}
        height={320}
        className="translate-y-[125px] ml-[1070px]"
      />
      <span className={`absolute w-70 font-['Caveat'] font-bold ${BASE_TEXT_COLOR} text-[30px] translate-y-[70px] ml-[885px]`}>
        {t('endline')}
      </span>
    </div>
  );
};

export default RightSection;