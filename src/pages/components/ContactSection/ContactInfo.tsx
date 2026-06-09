import { useState, useEffect } from "react";
import emailImg from "../../../assets/images/contact/icons/EmailIcon.webp";
import buttonImg from "../../../assets/images/contact/Button.webp";
import loudspeakerImg from "../../../assets/images/contact/Loudspeaker.webp";
import planImg from "../../../assets/images/contact/Plane.webp";
import vectorImg from "../../../assets/images/contact/Vector.webp";
import { useTranslation } from "@/utils";

const ContactInfo = () => {
  const t = useTranslation('main.contact');
  const fullText = t("subTitle") || "";
  
  const [displayedText, setDisplayedText] = useState("");
  // State quản lý việc hiển thị trạng thái đã copy thành công hay chưa
  const [copied, setCopied] = useState(false);

  // Logic hiệu ứng gõ chữ đồng bộ với loa giữ nguyên
  useEffect(() => {
    if (!fullText) return;
    let currentText = "";
    let isDeleting = false;
    let index = 0;

    const stepTimeForTyping = 1500 / fullText.length;
    const stepTimeForDeleting = 1500 / fullText.length;

    const handleTextAnimation = () => {
      if (!isDeleting) {
        if (index < fullText.length) {
          currentText += fullText.charAt(index);
          setDisplayedText(currentText);
          index++;
          setTimeout(handleTextAnimation, stepTimeForTyping);
        } else {
          isDeleting = true;
          setTimeout(handleTextAnimation, 100);
        }
      } else {
        if (index > 0) {
          currentText = currentText.substring(0, currentText.length - 1);
          setDisplayedText(currentText);
          index--;
          setTimeout(handleTextAnimation, stepTimeForDeleting);
        } else {
          isDeleting = false;
          setTimeout(handleTextAnimation, 100);
        }
      }
    };

    handleTextAnimation();
    return () => {};
  }, [fullText]);

  // Hàm xử lý copy nội dung email
  const handleCopyEmail = async () => {
    const emailAddress = t("email");
    if (!emailAddress) return;

    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      // Tự động ẩn thông báo "Copied!" sau 2 giây
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Không thể copy email: ", err);
    }
  };

  const contactImg = [
    {
      src: planImg,
      alt: "Plan",
      width: "360",
      height: "360",
      className: "absolute -translate-x-[165px] -translate-y-[160px]"
    },
    {
      src: vectorImg,
      alt: "Vector",
      width: "450",
      height: "450",
      className: "absolute -translate-x-[550px] -translate-y-[140px]"
    },
    {
      src: loudspeakerImg,
      alt: "Loudspeaker",
      width: "",
      height: "",
      className: "absolute auto-rotate-speaker"
    },
    {
      src: buttonImg,
      alt: "Button",
      width: "110",
      height: "110",
      className: "absolute -translate-x-[550px] translate-y-[510px]"
    },
    {
      src: emailImg,
      alt: "Email Icon",
      width: "90",
      height: "90",
      className: "absolute -translate-x-[541px] translate-y-[519px]"
    },
  ];

  return (
    <div className="items-center ml-[200px]">
      <h1 className="font-['Syne'] font-bold text-[96px] text-[#3C2F2F] -translate-x-[540px] translate-y-[110px]">
        {t("headline")}
      </h1>
      <p className="absolute w-300 font-plus font-bold text-[64px] text-[#3C2F2F] -translate-x-[540px] translate-y-[120px] tracking-wide">
        {t("title")}
      </p>
      
      <span className="absolute font-['Caveat'] font-bold text-[128px] text-[#0057FF] rotate-[-3deg] -translate-x-[250px] translate-y-[220px] inline-block min-h-[140px]">
        {displayedText}
      </span>

      {/* Khu vực Email: Chuyển sang thẻ button, thêm hover hiệu ứng và sự kiện click */}
      <button 
        onClick={handleCopyEmail}
        className="absolute font-plus text-[#3C2F2F] text-[25px] -translate-x-[410px] translate-y-[540px] cursor-pointer hover:text-[#0057FF] active:scale-95 transition-all group flex items-center gap-2"
        title="Click to copy email"
      >
        <span>{t("email")}</span>
        
        {/* Nhãn Tooltip nhỏ hiển thị chữ "Copied!" nổi lên khi click thành công */}
        <span className={`absolute left-full ml-3 text-sm font-bold bg-[#3C2F2F] text-white px-2 py-1 rounded-md shadow-md transition-all duration-300 ${
          copied ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"
        }`}>
          Copied!
        </span>
      </button>

      {contactImg.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          className={img.className}
        />
      ))}
    </div>
  );
};

export default ContactInfo;