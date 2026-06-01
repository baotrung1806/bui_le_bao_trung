import brushPenImg from '../../../assets/images/myself/BrushPen.webp';
import { ButtonCustom } from '@/components/ButtonCustom';
import { useTranslation } from '@/utils';

const MyselfInfo = () => {
  const t = useTranslation('main.myself');
  return (
    <div className="flex flex-col w-full md:w-2/5 items-center font-main text-brand-dark space-y-8 pr-10 text-[#3C2F2F]">
      <p className="text-[48px] font-plus">{t('headline')}</p>
      <div className="relative text-center">
        <img
          src={brushPenImg}
          alt="Pen"
          className="absolute w-[100px]"
        />
        <h1 className="text-[80px] font-['Caveat'] font-bold pb-2">
          {t('fullname')}
        </h1>
      </div>
      <p className="text-[32px] font-plus">{t('title')}</p>
      <p className="text-[48px] font-['Caveat'] font-bold text-[#0057FF]">{t('subTitle')}</p>
      <div className="flex gap-10">
        <ButtonCustom className="bg-[#E9D4B9]" value={t('downloadCV')} />
        <ButtonCustom className="bg-[#E9D4B9]" value={t('contact')} />
      </div>
    </div>
  );
};

export default MyselfInfo;
