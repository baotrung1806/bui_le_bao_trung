import aiImg from "../../../assets/images/service/AI.webp";
import editorImg from "../../../assets/images/service/Editor.webp";
import ideaImg from "../../../assets/images/service/Idea.webp";
import pinImg from "../../../assets/images/service/Pin.webp";
import robotImg from "../../../assets/images/service/Robot.webp";
import scriptsImg from "../../../assets/images/service/Scripts.webp";
import staplesImg from "../../../assets/images/service/Staples.webp";
import takephotoImg from "../../../assets/images/service/Takephoto.webp";
import vectorImg from "../../../assets/images/service/Vector.webp";
import { useTranslation } from "@/utils";

const ServiceSection = () => {
  const t = useTranslation("main.service");
  const tItemsFirst = useTranslation("main.service.items.first");
  const tItemsSecond = useTranslation("main.service.items.second");
  const tItemsThird = useTranslation("main.service.items.third");

  const imgItem = [
    [
      {
        src: editorImg,
        alt: "Editor Icon",
        className: "absolute"
      },
      {
        src: pinImg,
        alt: "Pin Icon",
        className: "absolute"
      },
      {
        src: takephotoImg,
        alt: "Takephoto Icon",
        className: "absolute"
      },
    ],
    [
      {
        src: aiImg,
        alt: "AI Icon",
        className: "absolute"
      },
      {
        src: staplesImg,
        alt: "Staples Icon",
        className: "absolute"
      },
      {
        src: robotImg,
        alt: "Robot Icon",
        className: "absolute"
      },
    ],
    [
      {
        src: scriptsImg,
        alt: "Scripts Icon",
        className: "absolute"
      },
      {
        src: ideaImg,
        alt: "Idea Icon",
        className: "absolute translate-x-[280px] translate-y-[-150px]"
      },
    ],
  ];

  const serviceItem = [
    {
      title: tItemsFirst("title"),
      subTitle_1: tItemsFirst("subTitle_1"),
      subTitle_2: tItemsFirst("subTitle_2"),
      hastag: tItemsFirst("hastag"),
      className: "rotate-[-4.08deg]",
      classNameImg: "rotate-[4.08deg]"
    },
    {
      title: tItemsSecond("title"),
      subTitle_1: tItemsSecond("subTitle_1"),
      subTitle_2: tItemsSecond("subTitle_2"),
      hastag: tItemsSecond("hastag"),
      className: "translate-y-[40px] rotate-[3deg]",
      classNameImg: "rotate-[2.55deg]"
    },
    {
      title: tItemsThird("title"),
      subTitle_1: tItemsThird("subTitle_1"),
      subTitle_2: tItemsThird("subTitle_2"),
      hastag: tItemsThird("hastag"),
      className: "translate-y-[-70px] rotate-[-3deg]",
      classNameImg: "rotate-[-1.52deg]"
    },
  ]

  return (
    <div className="flex flex-col inset-0 h-screen text-[#3C2F2F] translate-x-[90px] translate-y-[90px]">
      <h1 className="font-['Syne'] font-bold text-[96px] translate-x-[-20px] translate-y-[-90px]">{t("headline")}</h1>
      <div className="flex flex-row gap-20">
        {serviceItem.map((item, index) => (
          <div className={`p-10 w-[480px] h-[699px] bg-[#E9D4B9] rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ${item.className}`}>
            <div className="relative">
              {imgItem[index]?.map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className={img.className}
                />
              ))}
            </div>
            <img
              src={vectorImg}
              alt="Vector"
              className={`mt-[120px] ${item.classNameImg}`}
            />
            <h1 className="font-plus font-bold text-[31px] mt-[20px]">{item.title}</h1>
            <p className="font-plus text-[21px] mt-[40px]">{item.subTitle_1}</p>
            <p className="font-plus text-[21px] mt-[40px]">{item.subTitle_2}</p>
            <p className="font-['Caveat'] text-[#0057FF] text-[24px] translate-x-[40px] translate-y-[90px]">{item.hastag}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
