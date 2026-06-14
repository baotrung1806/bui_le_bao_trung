import React from 'react';

// Định nghĩa kiểu dữ liệu cho từng object card bên trong mảng
interface CardConfig {
  rotateClass: string;
  translateClass?: string;
  bgClass?: string;
  hasImg: boolean;
  imgSrc?: string;
  classNameImg?: string;
}

// Định nghĩa kiểu dữ liệu cho các Props của PhotoStack
interface PhotoStackProps {
  pickImg: string;
  pickX: string;
  pickY: string;
  containerX: string;
  containerY: string;
  cards?: CardConfig[];
  title?: string;
  className?: string;
}

const PhotoStack: React.FC<PhotoStackProps> = ({
  pickImg,
  pickX,
  pickY,
  containerX,
  containerY,
  cards = [],
  title,
  className
}) => {
  return (
    <div>
      {/* Ghim ảnh (pickImg) */}
      <img
        src={pickImg}
        alt="Pick"
        width={80}
        height={80}
        style={{
          transform: `translate(${pickX}, ${pickY})`
        }}
        className="absolute z-[11]"
      />

      {/* Cụm các tấm ảnh xếp chồng */}
      <div
        style={{
          transform: `translate(${containerX}, ${containerY})`
        }}
        className="relative"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`absolute w-70 h-95 bg-[#ededeb] p-5 pt-5 pb-14 rounded-[2px] 
              shadow-[2px_4px_16px_rgba(0,0,0,0.12),-1px_2px_4px_rgba(0,0,0,0.05)] 
              border border-stone-300/40 select-none ${card.rotateClass} ${card.translateClass || ''}`}
          >
            <div className={`relative w-full h-75 aspect-square shadow-[inset_0_1px_5px_rgba(0,0,0,0.1)] overflow-hidden flex items-center justify-center group ${card.bgClass || 'bg-white'}`}>
              {card.hasImg && (
                <img src={card.imgSrc || ""} alt="Nội dung" className={`object-cover ${card.classNameImg || ''}`} />
              )}
            </div>
          </div>
        ))}
      </div>

      <p className={`absolute font-plus text-[36px] text-[#3C2F2F] z-1 ${className}`}>
        {title}
      </p>
    </div>
  );
};

export default PhotoStack;