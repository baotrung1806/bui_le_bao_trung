import itemsImg from "../../../assets/images/contact/Items.webp";
import youtubeImg from "../../../assets/images/contact/icons/YoutubeIcon.webp";
import linkinImg from "../../../assets/images/contact/icons/LinkinIcon.webp";
import phoneImg from "../../../assets/images/contact/icons/PhoneIcon.webp";
import whatsappImg from "../../../assets/images/contact/icons/WhatsappIcon.webp";
import zaloImg from "../../../assets/images/contact/icons/ZaloIcon.webp";

const contactIcons = [
  {
    src: youtubeImg,
    alt: "Youtube Icon",
    className: "absolute rotate-[14deg] translate-x-[70px]"
  },
  {
    src: linkinImg,
    alt: "Linkin Icon",
    className: "absolute rotate-[-21deg] translate-x-[500px] translate-y-[120px]"
  },
  {
    src: zaloImg,
    alt: "Zalo Icon",
    className: "absolute rotate-[27deg] translate-x-[200px] translate-y-[300px]"
  },
  {
    src: phoneImg,
    alt: "Phone Icon",
    className: "absolute rotate-[-11deg] translate-x-[400px] translate-y-[570px]"
  },
  {
    src: whatsappImg,
    alt: "Whatsapp Icon",
    className: "absolute rotate-[-11deg] translate-x-[-40px] translate-y-[600px]"
  },
];

const ContactItemIcon = () => {
  return (
    <div>
      {contactIcons.map((icon) => (
        <button
          key={icon.alt}
          className={`mt-[20px] cursor-pointer ${icon.className}`}
        >
          <img src={itemsImg} width={200} height={210} alt="Items" />

          <img
            src={icon.src}
            alt={icon.alt}
            width={110}
            height={110}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </button>
      ))}
    </div>
  );
};

export default ContactItemIcon;
