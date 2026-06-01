import cardBg from '../../../assets/images/myself/Postcard.webp';
import tapeImg1 from '../../../assets/images/myself/Label1.webp';
import tapeImg2 from '../../../assets/images/myself/Label2.webp';
import cameraIcon from '../../../assets/images/myself/Camera.webp';
import postmarkIcon from '../../../assets/images/myself/Stamp.webp';
import vnMapImg from '../../../assets/images/myself/MapVN.webp';
import vnFlagStampImg from '../../../assets/images/myself/Flag.webp';
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
        className="absolute right-6 w-[250px] mr-[60px] mt-[20px] z-10"
      />

      <img src={cardBg} alt="Postcard" className="w-full h-[720px] object-cover rotate-[-3deg]" />

      <img
        src={vnMapImg}
        alt="Vietnam Map"
        className="absolute w-[350px] mt-[-515px] ml-[145px] z-1"
      />

      <img
        src={portraitImg}
        alt="Full Name"
        className="absolute inset-0 w-[400px] h-[720px] mt-[190px] ml-[-55px] object-cover z-3"
      />

      <div className="absolute inset-0 ml-[300px] z-20 p-10 text-[#3C2F2F]">
        <p className="flex gap-2">
          <span className="font-semibold font-['Syne'] rotate-[-3deg]">From:</span>
          <span className="font-plus rotate-[-3deg]">{t('fullname')}</span>
        </p>
        <div className="flex items-center gap-4">
          <p className="font-plus rotate-[-3deg]">but you can call me:</p>
          <span className="border-2 border-brand-dark px-4 py-1.5 rounded-full text-base font-['Caveat'] font-bold">
            {t('nickname')}
          </span>
        </div>
        <p className="flex gap-2">
          <span className="font-semibold font-['Syne'] rotate-[-3deg]">Address:</span>
          <span className="font-plus rotate-[-3deg]">{t('address')}</span>
        </p>
        <div className="pt-8">
          <h3 className="font-semibold font-['Syne'] text-lg rotate-[-3deg]">
            Educational background:
          </h3>
          <div className="text-[20px]">
            <p className="flex flex-col items-end">
                <span className="font-plus rotate-[-3deg] font-Regular text-right leading-tight">
                  {t('education.first.label')}
                  <span className="text-sm block">{t('education.first.subLabel')}</span>
                </span>
            </p>
            <p className="flex flex-col items-end">
              <span className="font-plus rotate-[-3deg] font-Regular text-right leading-tight">
                {t('education.second.label')}
                <span className="text-sm block">{t('education.second.subLabel')}</span>
              </span>
            </p>
            <p className="flex flex-col items-end">
              <span className="font-plus rotate-[-3deg] font-Regular text-right leading-tight">
                {t('education.third.label')}
                <span className="text-sm block">{t('education.third.subLabel')}</span>
              </span>
            </p>
          </div>
        </div>
      </div>

      <img
        src={vnFlagStampImg}
        alt="Vietnam Flag Stamp"
        className="absolute w-[300px] mt-[-180px] mr-[-60px] ml-[300px] right-0 z-50"
      />
    </div>
  );
};

export default MyselfPostcard;
