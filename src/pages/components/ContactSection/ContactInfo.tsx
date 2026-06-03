import emailImg from "../../../assets/images/contact/icons/EmailIcon.webp";
import buttonImg from "../../../assets/images/contact/Button.webp";
import loudspeakerImg from "../../../assets/images/contact/Loudspeaker.webp";
import planImg from "../../../assets/images/contact/Plane.webp";
import vectorImg from "../../../assets/images/contact/Vector.webp";
import { useTranslation } from "@/utils";

const ContactInfo = () => {
  const t = useTranslation('main.contact');
  const contactImg = [
    {
      src: planImg,
      alt: "Plan",
      width: "360",
      height: "360",
      className: "absolute translate-x-[-165px] translate-y-[-160px]"
    },
    {
      src: vectorImg,
      alt: "Vector",
      width: "450",
      height: "450",
      className: "absolute translate-x-[-550px] translate-y-[-140px]"
    },
    {
      src: loudspeakerImg,
      alt: "Loudspeaker",
      width: "",
      height: "",
      className: "absolute translate-x-[-550px] translate-y-[260px]"
    },
    {
      src: buttonImg,
      alt: "Button",
      width: "110",
      height: "110",
      className: "absolute translate-x-[-550px] translate-y-[510px]"
    },
    {
      src: emailImg,
      alt: "Email Icon",
      width: "90",
      height: "90",
      className: "absolute translate-x-[-541px] translate-y-[519px]"
    },
  ];
  return (
    <div className="items-center">
      <h1 className="font-['Syne'] font-bold text-[96px] text-[#3C2F2F] translate-x-[-540px] translate-y-[110px]">{t("headline")}</h1>
      <p className="absolute font-plus font-bold text-[64px] text-[#3C2F2F]
      translate-x-[-540px] translate-y-[120px] tracking-wide">{t("title")}</p>
      <span className="absolute font-['Caveat'] font-bold text-[128px] text-[#0057FF] rotate-[-3deg]
      translate-x-[-250px] translate-y-[220px]">{t("subTitle")}</span>
      <span className="absolute font-plus text-[#3C2F2F] text-[25px] translate-x-[-410px] translate-y-[540px]">{t("email")}</span>
      {contactImg.map((img) => (
        <img
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          className={img.className}
        />
      ))}
    </div>
  )
}

export default ContactInfo;
