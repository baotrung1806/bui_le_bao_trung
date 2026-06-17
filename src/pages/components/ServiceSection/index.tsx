import editorImg from "@/assets/images/service/Editor.webp";
import ideaImg from "@/assets/images/service/Idea.webp";
import pinImg from "@/assets/images/service/Pin.webp";
import robotImg from "@/assets/images/service/Robot.webp";
import staplesImg from "@/assets/images/service/Staples.webp";
import takephotoImg from "@/assets/images/service/Takephoto.webp";
import vectorImg from "@/assets/images/service/Vector.webp";
import pinBigImg from "@/assets/images/service/Pin_big.webp";
import logicImg from "@/assets/images/service/Logic.webp";
import boardAIImg from "@/assets/images/service/Board_AI.webp";
import boardEditorImg from "@/assets/images/service/Board_VideoEditing.webp";
import boardContentPlanningImg from "@/assets/images/service/Board_ContentPlanning.webp";
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
        width: "85",
        height: "85",
        className: "absolute top-0 left-0 translate-x-[-30px] translate-y-[-30px] rotate-[-1.08deg]"
      },
      {
        src: pinImg,
        alt: "Pin Icon",
        width: "30",
        height: "30",
        className: "absolute top-0 left-0 translate-x-[390px] translate-y-[-70px] rotate-[4deg]"
      },
      {
        src: takephotoImg,
        alt: "Takephoto Icon",
        width: "150",
        height: "150",
        className: "absolute top-0 left-0 translate-x-[-125px] translate-y-[570px] rotate-[6deg]"
      },
    ],
    [
      {
        src: pinBigImg,
        alt: "Pin Big Icon",
        width: "90",
        height: "90",
        className: "absolute top-0 left-0 translate-x-[-50px] translate-y-[-120px] rotate-[-25.91deg]"
      },
      {
        src: logicImg,
        alt: "Logic Icon",
        width: "124",
        height: "124",
        className: "absolute top-0 left-0 translate-x-[-90px] translate-y-[565px] rotate-[-3deg]"
      },
      {
        src: robotImg,
        alt: "Robot Icon",
        width: "130",
        height: "130",
        className: "absolute top-0 left-0 translate-x-[350px] translate-y-[545px] rotate-[-3deg]"
      },
    ],
    [
      {
        src: staplesImg,
        alt: "Staples Icon",
        width: "70",
        height: "70",
        className: "absolute top-0 left-0 translate-x-[380px] translate-y-[-100px] rotate-[8deg]"
      },
      {
        src: ideaImg,
        alt: "Idea Icon",
        width: "170",
        height: "170",
        className: "absolute top-0 left-0 translate-x-[280px] translate-y-[590px]"
      },
    ],
  ];

  const serviceItem = [
    {
      titleImg: boardEditorImg,
      titleImgClass: "absolute top-0 left-0 mt-[-220px] ml-[50px] w-[300px] object-contain",
      subTitle_1: tItemsFirst("subTitle_1"),
      subTitle_2: tItemsFirst("subTitle_2"),
      hastag: tItemsFirst("hastag"),
      className: "rotate-[-4.08deg] hover:rotate-[5deg] transition-transform duration-500",
      classNameImg: "rotate-[4.08deg]"
    },
    {
      titleImg: boardAIImg,
      titleImgClass: "absolute top-0 left-0 mt-[-230px] ml-[120px] w-[180px] object-contain rotate-[2deg]",
      subTitle_1: tItemsSecond("subTitle_1"),
      subTitle_2: tItemsSecond("subTitle_2"),
      hastag: tItemsSecond("hastag"),
      className: "translate-x-[50px] translate-y-[40px] rotate-[3deg] hover:rotate-[-5deg] transition-transform duration-500",
      classNameImg: "rotate-[2.55deg]"
    },
    {
      titleImg: boardContentPlanningImg,
      titleImgClass: "absolute top-0 left-0 mt-[-235px] ml-[85px] w-[220px] object-contain rotate-[-2deg]",
      subTitle_1: tItemsThird("subTitle_1"),
      subTitle_2: tItemsThird("subTitle_2"),
      hastag: tItemsThird("hastag"),
      className: "translate-x-[30px] translate-y-[-70px] rotate-[-3deg] hover:rotate-[5deg] transition-transform duration-500",
      classNameImg: "rotate-[-1.52deg]"
    },
  ];

  return (
    <div id="service" className="h-screen">
      <div className="flex flex-col inset-0 h-[95vh] text-[#3C2F2F] translate-x-[90px] translate-y-[20px]">
        <h1 className="font-['Syne'] font-bold text-[96px] translate-x-[-20px] translate-y-[-90px]">{t("headline")}</h1>
        
        <div className="flex flex-row gap-20 flex-nowrap w-max">
          {serviceItem.map((item, index) => (
            <div key={index} className={`relative flex-shrink-0 p-10 w-[480px] h-[699px] bg-[#E9D4B9] rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ${item.className}`}>
              
              <div className="relative w-full h-0 z-10">
                {imgItem[index]?.map((img) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className={img.className}
                  />
                ))}
              </div>

              <img
                src={vectorImg}
                alt="Vector"
                className={`mt-[80px] ${item.classNameImg}`}
              />
              
              <div className="relative w-full h-0 z-10">
                <img
                  src={item.titleImg}
                  alt="Service Board"
                  className={item.titleImgClass}
                />
              </div>
              
              <p className="w-104 font-plus text-[21px] mt-[40px]">{item.subTitle_1}</p>
              <p className="font-plus text-[21px] mt-[40px]" dangerouslySetInnerHTML={{ __html: item.subTitle_2 }} />
              
              <img
                src={vectorImg}
                alt="Vector"
                className={`mt-[30px] ${item.classNameImg}`}
              />
              
              <p className="font-['Caveat'] text-[#0057FF] text-[24px] translate-x-[30px] translate-y-[50px]">{item.hastag}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;