import { ButtonCustom } from '@/components/ButtonCustom';
import { useTranslation } from '@/utils';

export const MySelfSection = () => {
  const t = useTranslation('main.myself');

  return (
    <>
      <div>
        <form>
          <p>{t('fullname')}</p>
          <p>{t('nickname')}</p>
          <p>{t('address')}</p>
          <p>{t('education.first.label')}</p>
          <span>{t('education.first.subLabel')}</span>
          <p>{t('education.second.label')}</p>
          <span>{t('education.second.subLabel')}</span>
          <p>{t('education.third.label')}</p>
          <span>{t('education.third.subLabel')}</span>
        </form>
      </div>
      <div>
        <p>{t('headline')}</p>
        <p>{t('fullname')}</p>
        <p>{t('title')}</p>
        <span>{t('subTitle')}</span>
        <ButtonCustom className="bg-[#E9D4B9] text-[#3C2F2F]" value={t('downloadCV')} />
        <ButtonCustom className="bg-[#E9D4B9] text-[#3C2F2F]" value={t('contact')} />
      </div>
    </>
  );
};
