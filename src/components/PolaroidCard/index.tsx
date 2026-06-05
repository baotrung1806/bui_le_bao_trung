import React from 'react';

interface PolaroidCardProps {
  imageSrc?: string;
  imageAlt?: string;
  labelImgSrc?: string;
  title?: string;
  className?: string;
  classNameTitle?: string;
}

const PolaroidCard: React.FC<PolaroidCardProps> = ({
  imageSrc = "",
  imageAlt = "Nội dung",
  labelImgSrc,
  title = "Tiêu đề",
  className = "",
  classNameTitle = ""
}) => {
  return (
    <div className={`absolute ${className}`}>
      {/* Lớp Shadow phía dưới */}
      <div className="absolute w-100 h-72 shadow-[15px_15px_30px_rgba(0,0,0,0.15)] rotate-[3.44deg] rounded-br-[95px] translate-x-[-60px] translate-y-[110px]"></div>

      {/* Khung ảnh Polaroid */}
      <div className="absolute w-100 h-72 bg-[#ededeb] p-5 pt-5 pb-14 rounded-[2px] rotate-[3.44deg] border border-stone-300/40 select-none translate-x-[-60px] translate-y-[110px]">
        <div className="relative w-full h-61 bg-white shadow-[inset_0_1px_5px_rgba(0,0,0,0.1)] border border-stone-300/40">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Label bên trái */}
      {labelImgSrc && (
        <img
          src={labelImgSrc}
          alt="Label Left"
          width={80}
          height={80}
          className="translate-x-[-66px] translate-y-[91px]"
        />
      )}

      {/* Label bên phải */}
      {labelImgSrc && (
        <img
          src={labelImgSrc}
          alt="Label Right"
          width={110}
          height={110}
          className="translate-x-[245px] translate-y-[260px] rotate-[-5deg]"
        />
      )}

      {/* Đoạn text tiêu đề */}
      <p className={`absolute w-[200px] font-plus text-[36px] text-[#3C2F2F] z-1 translate-x-[20px] translate-y-[250px] ${classNameTitle}`}>
        {title}
      </p>
    </div>
  );
};

export default PolaroidCard;