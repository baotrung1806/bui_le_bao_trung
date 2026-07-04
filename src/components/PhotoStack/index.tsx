import React from 'react';
import Pick from '@/assets/images/job/pick.webp';

interface PhotoStackProps {
  imageSrc?: string;
  title?: string;
  className?: string;
}

const PhotoStack: React.FC<PhotoStackProps> = ({ imageSrc, title, className }) => {
  return (
    <div className={`relative inline-flex flex-col items-center ${className ?? ''}`}>
      <div className="relative z-10 flex flex-col items-center">
        <img
          src={Pick}
          alt="Clip"
          className="absolute -top-[50px] left-1/2 z-20 w-[75px] -translate-x-1/2 select-none drop-shadow-[0_4px_5px_rgba(53,35,20,0.25)]"
        />

        <div className="relative mt-[16px] flex h-[450px] w-[296px] items-center justify-center rounded-[2px] border border-[#ddd0c4]/85 bg-[linear-gradient(180deg,#f3f3f3_0%,#ebebeb_48%,#ebebeb_100%)] px-[14px] pb-[14px] pt-[18px] shadow-[0_18px_34px_rgba(58,41,29,0.18),0_3px_0_rgba(255,255,255,0.7)_inset]">
          <div className="pointer-events-none absolute inset-[1px] rounded-[1px] shadow-[inset_0_1px_0_rgba(255,255,255,0.78),inset_0_-18px_25px_rgba(95,66,41,0.05)]" />
          <div className="pointer-events-none absolute inset-0 rounded-[2px] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(154,107,63,0.08),transparent_55%)] opacity-90" />

          <div className="relative flex bottom-7 h-[350px] w-full items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#e6e4e1_0%,#d9d7d4_100%)] shadow-[inset_0_1px_6px_rgba(0,0,0,0.08)]">
            {imageSrc ? (
              <img src={imageSrc} alt={title} className="h-full w-full object-cover" />
            ) : null}
          </div>
        </div>

        <p className="z-9999 -mt-[53px] font-plus text-[28px] leading-none text-[#3C2F2F] [text-shadow:0_1px_0_rgba(255,255,255,0.35)]">
          <span className="inline-block">{title}</span>
        </p>
      </div>
    </div>
  );
};

export default PhotoStack;
