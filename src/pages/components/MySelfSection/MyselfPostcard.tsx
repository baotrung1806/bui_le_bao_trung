import cardBg from '../../../assets/images/myself/Postcard.webp';
import tapeImg1 from '../../../assets/images/myself/Label1.webp';
import tapeImg2 from '../../../assets/images/myself/Label2.webp';
import cameraIcon from '../../../assets/images/myself/Camera.webp';
import postmarkIcon from '../../../assets/images/myself/Stamp.webp';
import vnMapImg from '../../../assets/images/myself/MapVN.webp';
import vnFlagStampImg from '../../../assets/images/myself/flag.webp';
import portraitImg from '../../../assets/images/myself/BaoTrung.webp';
import { useTranslation } from '@/utils';

const MyselfPostcard = () => {
  const t = useTranslation('main.myself');

  return (
    <div className="relative">
      <img 
        src={tapeImg1}
        alt="Tape Left"
        className="absolute inset-0 w-[210px] ml-[-17px] mt-[31px] z-40 -top-12 -left-12"
      />

      <img 
        src={tapeImg2}
        alt="Tape Right"
        className="absolute w-[200px] z-40 -top-12 right-[-35px]"
      />

      <img
        src={cameraIcon}
        alt="Camera"
        className="absolute inset-0 w-[390px] mt-[-60px] ml-[-70px] top-2 left-6 z-50"
      />

      <img
        src={postmarkIcon}
        alt="postmark"
        className="absolute top-6 right-6 w-[240px] z-10"
      />

      <img
        src={cardBg}
        alt="Postcard"
        className="w-full h-[720px] object-cover rotate-[-3deg]"
      />

      <img
        src={portraitImg}
        alt="Full Name"
        className="absolute inset-0 w-[400px] h-[720px] mt-[190px] ml-[-55px] object-cover"
      />
    </div>
    // <div className="relative w-full aspect-[16/11] max-w-7xl mx-auto flex items-center justify-center p-10 font-main text-brand-dark">
    //   {/* 1. Bưu thiếp chính */}
    //   <div className="relative w-full h-full">
    //     {/* -- Các chi tiết trang trí -- */}
    //     {/* Băng dính trái + máy ảnh */}
    //     <div className="absolute -top-12 -left-12 w-44 z-40 rotate-[-8deg]">
    //       <img src={tapeImg1} alt="tape" className="w-full" />
    //       <img src={cameraIcon} alt="camera" className="absolute top-2 left-6 w-16" />
    //     </div>

    //     {/* Băng dính phải */}
    //     <div className="absolute -top-10 -right-10 w-44 z-40 rotate-[8deg]">
    //       <img src={tapeImg2} alt="tape" className="w-full" />
    //     </div>

    //     {/* Dấu bưu điện */}
    //     <img
    //       src={postmarkIcon}
    //       alt="postmark"
    //       className="absolute top-6 right-6 w-24 opacity-60 rotate-[10deg] z-10"
    //     />

    //     {/* -- Khu vực nội dung bưu thiếp -- */}
    //     <div className="relative z-20 h-full p-12 pt-32 grid grid-cols-[1fr,2fr] gap-x-10">
    //       {/* Cột trái: Ảnh chân dung + Bản đồ */}
    //       <div className="flex flex-col items-center">
    //         {/* Ảnh chân dung (absolute so với container) */}
    //         <div className="absolute top-28 left-[-110px] w-[320px] h-[450px] z-30">
    //           <div className="relative w-full h-full p-2 border-2 border-brand-border shadow-xl rotate-[-2deg]">
    //             <img
    //               src={portraitImg}
    //               alt="Bui Le Bao Trung"
    //               className="object-cover w-full h-full torn-edge-mask"
    //             />
    //           </div>
    //         </div>
    //         <img src={vnMapImg} alt="Vietnam Map" className="w-32 mt-auto" />
    //       </div>

    //       {/* Cột phải: Thông tin */}
    //       <div className="space-y-4 pt-10">
    //         <p className="flex gap-2">
    //           <span className="font-semibold text-brand-dark/80">From:</span>
    //           <span>{t('fullname')}</span>
    //         </p>
    //         <div className="flex items-center gap-4">
    //           <p className="font-semibold text-brand-dark/80">but you can call me:</p>
    //           <span className="border-2 border-brand-dark px-4 py-1.5 rounded-full text-base font-mono font-medium">
    //             {t('nickname')}
    //           </span>
    //         </div>
    //         <p className="flex gap-2">
    //           <span className="font-semibold text-brand-dark/80">Address:</span>
    //           <span>{t('address')}</span>
    //         </p>
    //         <div className="pt-8 space-y-4">
    //           <h3 className="font-semibold text-lg text-brand-dark/90">Educational background:</h3>
    //           <ul className="list-disc list-outside pl-6 space-y-2">
    //             <li>
    //               {t('education.first.label')}{' '}
    //               <span className="font-mono text-sm opacity-80">
    //                 {t('education.first.subLabel')}
    //               </span>
    //             </li>
    //             <li>
    //               {t('education.second.label')}{' '}
    //               <span className="font-mono text-sm opacity-80">
    //                 {t('education.second.subLabel')}
    //               </span>
    //             </li>
    //             <li>
    //               {t('education.third.label')}{' '}
    //               <span className="font-mono text-sm opacity-80">
    //                 {t('education.third.subLabel')}
    //               </span>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Tem cờ VN */}
    //     <div className="absolute -bottom-16 -right-16 w-36 z-50 rotate-[10deg] shadow-lg">
    //       <img src={vnFlagStampImg} alt="Vietnam Flag Stamp" className="w-full" />
    //     </div>
    //   </div>
    // </div>
  );
};

export default MyselfPostcard;
