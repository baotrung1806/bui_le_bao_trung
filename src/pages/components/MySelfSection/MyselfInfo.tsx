// import brushPenImg from '../../../assets/images/myself/BrushPen.webp';
import penImg from '../../../assets/images/myself/Pen.webp';
import { ButtonCustom } from '@/components/ButtonCustom';
import SignatureIcon from '@/components/Icons/SignatureIcon';
import { useTranslation } from '@/utils';

const MyselfInfo = () => {
  const t = useTranslation('main.myself');
  const classes = {
    container: 'flex flex-col w-full md:w-2/5 items-center mt-[-75px] text-[#3C2F2F] translate-x-[60px]',
    content: 'mr-[180px] block',
    headline: 'text-[48px] font-plus',
    pen: 'absolute w-[80px] mt-[-10px] ml-[-30px]',
    nameWrap: 'mt-[10px]',
    name: "text-[80px] font-['Caveat'] font-bold",
    signature: 'absolute mt-[-60px] ml-[-50px]',
    title: 'text-[32px] font-plus mt-[100px]',
    subTitle: "text-[48px] font-['Caveat'] font-bold text-[#0057FF] text-center w-full",
    actions: 'flex gap-25 mt-[50px] mr-[170px]',
  };
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <p className={classes.headline}>{t('headline')}</p>
        <img
          src={penImg}
          alt="Pen"
          className={classes.pen}
        />
        <div className={classes.nameWrap}>
          <h1 className={classes.name}>
            {t('fullname')}
          </h1>
          <SignatureIcon className={classes.signature} />
        </div>
        <p className={classes.title}>{t('title')}</p>
        <p className={classes.subTitle}>{t('subTitle')}</p>
      </div>
      <div className={classes.actions}>
        <ButtonCustom className="bg-[#E9D4B9]" value={t('downloadCV')} />
        <ButtonCustom className="bg-[#E9D4B9]" value={t('contact')} />
      </div>
    </div>
  );
};

export default MyselfInfo;
