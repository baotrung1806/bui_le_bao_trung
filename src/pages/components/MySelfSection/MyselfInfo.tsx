import { useState, useEffect } from 'react';
import { ButtonCustom } from '@/components/ButtonCustom';
import SignatureIcon from '@/components/Icons/SignatureIcon';
import { useTranslation } from '@/utils';
import { useLenis } from 'lenis/react';
import myCV from '@/assets/CV - BUI LE BAO TRUNG.pdf';

const SCROLL_CONFIG = {
  target: '#contact',
  duration: 4,
  easing: (t: number) => {
    return t < 0.5 ? 16 * Math.pow(t, 5) : 1 - Math.pow(-2 * t + 2, 5) / 2;
  },
  immediate: false,
};

/** Styles tập trung — dễ tìm & sửa */
const classes = {
  container:
    'flex flex-col w-full md:w-2/5 items-center mt-[-75px] text-[#3C2F2F] translate-x-[60px]',
  content: 'mr-[180px] block',
  headline: 'text-[48px] font-plus',
  nameWrap: 'mt-[10px] relative inline-block',
  name: "text-[80px] font-['Caveat'] font-bold flex flex-wrap tracking-wide",
  signature: 'absolute mt-[-60px] ml-[-30px] pointer-events-none',
  title: 'text-[32px] font-plus mt-[100px]',
  subTitle: "text-[48px] font-['Caveat'] font-bold text-[#0057FF] text-center w-full",
  actions: 'flex gap-25 mt-[50px] mr-[170px]',
} as const;

const MyselfInfo = () => {
  const t = useTranslation('main.myself');
  const lenis = useLenis();

  const fullNameText = (t('fullname') as string) || 'Bui Le Bao Trung';

  // Vòng lặp tái khởi động animation chữ viết tay
  const [loopKey, setLoopKey] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoopKey((prev) => prev + 1);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToContact = () => {
    if (!lenis) return;
    lenis.scrollTo(SCROLL_CONFIG.target, {
      duration: SCROLL_CONFIG.duration,
      easing: SCROLL_CONFIG.easing,
      immediate: SCROLL_CONFIG.immediate,
    });
  };

  return (
    <div className={classes.container}>
      {/* Animations đã chuyển sang main.css: .letter-anim, .loop-wrapper */}

      <div className={classes.content}>
        <p className={classes.headline}>{t('headline')}</p>
        <div key={loopKey} className={`${classes.nameWrap} loop-wrapper`}>
          <h1 className={classes.name}>
            {fullNameText.split('').map((char: string, index: number) => (
              <span
                key={index}
                className="letter-anim"
                style={{
                  animationDelay: `${index * 0.08}s`,
                  whiteSpace: char === ' ' ? 'pre' : 'normal',
                }}
              >
                {char}
              </span>
            ))}
          </h1>

          <SignatureIcon className={classes.signature} />
        </div>

        <p className={classes.title}>{t('title')}</p>
        <p className={classes.subTitle}>{t('subTitle')}</p>
      </div>

      <div className={classes.actions}>
        <a href={myCV} download="CV_BuiLeBaoTrung.pdf">
          <ButtonCustom
            className="bg-[#E9D4B9] transition-all duration-500 ease-out hover:scale-107 hover:text-black active:scale-95"
            value={t('downloadCV')}
          />
        </a>
        <ButtonCustom
          className="bg-[#E9D4B9] transition-all duration-500 ease-out hover:scale-107 hover:text-black active:scale-95"
          value={t('contact')}
          onClick={handleScrollToContact}
        />
      </div>
    </div>
  );
};

export default MyselfInfo;
