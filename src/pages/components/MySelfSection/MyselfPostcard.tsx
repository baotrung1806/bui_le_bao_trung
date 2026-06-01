import cardBg from '../../../assets/images/myself/Postcard.webp';
import tapeImg1 from '../../../assets/images/myself/Label1.webp';
import tapeImg2 from '../../../assets/images/myself/Label2.webp';
import cameraIcon from '../../../assets/images/myself/Camera.webp';
import postmarkIcon from '../../../assets/images/myself/Stamp.webp';
import vnMapImg from '../../../assets/images/myself/MapVN.webp';
import vnFlagStampImg from '../../../assets/images/myself/Flag.webp';
import portraitImg from '../../../assets/images/myself/BaoTrung.webp';
import aroundImg from '../../../assets/images/myself/around.webp';
import { useTranslation } from '@/utils';

const EDUCATION_KEYS = [
  { key: 'first', className: '' },
  { key: 'second', className: 'mr-[15px]' },
  { key: 'third', className: 'mr-[175px]' },
];

const MyselfPostcard = () => {
  const t = useTranslation('main.myself');

  return (
    <div className="relative text-[#3C2F2F]">
      {/* --- BACKGROUND & Decorative Layers --- */}
      <img
        src={tapeImg1}
        alt="Tape Left"
        className="absolute inset-0 z-40 -top-12 -left-12 w-[210px] ml-[-17px] mt-[31px]"
      />
      <img
        src={tapeImg2}
        alt="Tape Right"
        className="absolute z-40 -top-12 right-[-35px] w-[200px]"
      />
      <img
        src={cameraIcon}
        alt="Camera"
        className="absolute inset-0 top-2 left-6 z-50 w-[390px] mt-[-60px] ml-[-70px]"
      />
      <img
        src={postmarkIcon}
        alt="Postmark"
        className="absolute right-6 z-10 w-[250px] mr-[60px] mt-[20px]"
      />

      {/* Base Postcard Canvas */}
      <img
        src={cardBg}
        alt="Postcard"
        className="w-full h-[720px] object-cover rotate-[-3deg]"
      />

      {/* --- CONTENT LAYERS --- */}
      {/* Vietnam Map */}
      <img
        src={vnMapImg}
        alt="Vietnam Map"
        className="absolute z-1 w-[350px] mt-[-515px] ml-[145px]"
      />

      {/* Portrait Photo */}
      <img
        src={portraitImg}
        alt="Portrait"
        className="absolute inset-0 z-3 w-[400px] h-[720px] mt-[190px] ml-[-55px] object-cover"
      />

      {/* --- TEXT CONTENT AREA --- */}
      <div className="absolute inset-0 z-20 mt-[145px] ml-[465px] p-10">

        {/* Sender Info */}
        <div className="w-[420px] rotate-[-3deg] ml-[2px]">
          <p className="flex gap-2 text-[23px]">
            <span className="font-semibold font-['Syne']">From:</span>
            <span className="font-plus mt-[4px] ml-auto text-right">{t('fullname')}</span>
          </p>
          <hr className="h-1 w-full rounded-full bg-[#3C2E2E] opacity-60 mt-1 mb-[40px]" />
        </div>

        {/* Nickname Row */}
        <div className="flex items-center gap-4 ml-[7px] relative">
          <p className="font-plus rotate-[-3deg] text-[19px]">but you can call me:</p>
          <span className="absolute text-[48px] font-['Caveat'] font-bold rotate-[-7.4deg] ml-[290px] mt-[-32px]">
            {t('nickname')}
          </span>
          <img
            src={aroundImg}
            alt="around"
            className="absolute ml-[250px] mt-[-31px]"
          />
        </div>

        {/* Address Info */}
        <div className="w-[420px] rotate-[-3deg] mt-4 ml-[10px]">
          <p className="flex gap-2 text-[23px]">
            <span className="font-semibold font-['Syne']">Address:</span>
            <span className="font-plus mt-[4px] ml-auto text-right">{t('address')}</span>
          </p>
          <hr className="h-1 w-full rounded-full bg-[#3C2E2E] opacity-60 mt-1 mb-8" />
        </div>

        {/* Educational Background */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold font-['Syne'] text-[23px] rotate-[-3deg] mb-2 ml-[10px]">
            Educational background:
          </h3>

          <div className="flex flex-col gap-6 text-[19px] mr-[22px]">
            {EDUCATION_KEYS.map(({ key, className }) => (
              <p
                key={key}
                className={`flex flex-col items-end tracking-wide font-plus rotate-[-3deg] ${className}`}
              >
                <span className="before:content-['•'] before:mr-1 before:opacity-60 text-right leading-tight">
                  {t(`education.${key}.label`)}
                  <span className="block">{t(`education.${key}.subLabel`)}</span>
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Stamp (Top Layer) */}
      <img
        src={vnFlagStampImg}
        alt="Vietnam Flag Stamp"
        className="absolute right-0 z-50 w-[300px] mt-[-180px] mr-[-60px] ml-[300px]"
      />
    </div>
  );
};

export default MyselfPostcard;