import { useState } from "react";
import itemsImg from "../../../assets/images/contact/Items.webp";
import youtubeImg from "../../../assets/images/contact/icons/YoutubeIcon.webp";
import linkinImg from "../../../assets/images/contact/icons/LinkinIcon.webp";
import facebookImg from "../../../assets/images/contact/icons/FacebookIcon.webp";
import whatsappImg from "../../../assets/images/contact/icons/WhatsappIcon.webp";
import zaloImg from "../../../assets/images/contact/icons/ZaloIcon.webp";
import qrZaloImg from "../../../assets/images/contact/icons/QR_Zalo.webp";
import qrWhatsappImg from "../../../assets/images/contact/icons/QR_Whatsapp.webp";
import ContactModal from "./ContactModal"; 

interface ContactIconItem {
  id: string;
  src: string;
  alt: string;
  className: string;
  href?: string; 
  isModal?: boolean;
  width?: string;
  height?: string;
  delay?: string; // Giữ delay để các nút không bị lắc đều tăm tắp
}

const contactIcons: ContactIconItem[] = [
  {
    id: "youtube",
    src: youtubeImg,
    alt: "Youtube Icon",
    className: "absolute rotate-[14deg] translate-x-[70px]",
    href: "https://youtube.com/@trungbui2003?si=37sd1eIMtjzi8Ewt",
    delay: "0s"
  },
  {
    id: "linkedin",
    src: linkinImg,
    alt: "Linkin Icon",
    className: "absolute rotate-[-21deg] translate-x-[500px] translate-y-[120px]",
    href: "https://www.linkedin.com/in/bui-le-bao-trung?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    delay: "0.4s"
  },
  {
    id: "zalo",
    src: zaloImg,
    alt: "Zalo Icon",
    className: "absolute rotate-[27deg] translate-x-[200px] translate-y-[100px]",
    isModal: true,
    delay: "0.8s"
  },
  {
    id: "facebook",
    src: facebookImg,
    alt: "Facebook Icon",
    width: "300",
    height: "300",
    className: "absolute rotate-[-11deg] translate-x-[400px] translate-y-[570px]",
    href: "https://www.facebook.com/share/1BVgmR1UbT/?mibextid=wwXIfr",
    delay: "1.2s"
  },
  {
    id: "whatsapp",
    src: whatsappImg,
    alt: "Whatsapp Icon",
    className: "rotate-[-11deg] translate-x-[-40px] translate-y-[600px]",
    isModal: true,
    delay: "1.6s"
  },
];

const ContactItemIcon: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (id: string): void => setActiveModal(id);
  const closeModal = (): void => setActiveModal(null);

  return (
    <div className="relative">
      {contactIcons.map((icon) => {
        const buttonContent = (
          <button
            className={`mt-[20px] cursor-pointer shake-item ${icon.className}`}
            style={{ animationDelay: icon.delay }}
            onClick={icon.isModal ? () => openModal(icon.id) : undefined}
          >
            <img src={itemsImg} width={200} height={210} alt="Items" />
            <img
              src={icon.src}
              alt={icon.alt}
              width={icon.width ? icon.width : 110}
              height={icon.height ? icon.height : 110}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </button>
        );

        if (icon.isModal) {
          return <div key={icon.id} className="inline-block">{buttonContent}</div>;
        }

        return (
          <a key={icon.id} href={icon.href} target="_blank" rel="noreferrer">
            {buttonContent}
          </a>
        );
      })}

      <ContactModal 
        isOpen={activeModal === "zalo"} 
        onClose={closeModal}
        title="ZALO ME"
        qrSrc={qrZaloImg}
      />

      <ContactModal 
        isOpen={activeModal === "whatsapp"} 
        onClose={closeModal}
        title="WHATS APP ME"
        qrSrc={qrWhatsappImg}
      />
    </div>
  );
};

export default ContactItemIcon;