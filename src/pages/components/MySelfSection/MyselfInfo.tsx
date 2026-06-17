import { useState, useEffect } from 'react';
import { ButtonCustom } from '@/components/ButtonCustom';
import SignatureIcon from '@/components/Icons/SignatureIcon';
import { useTranslation } from '@/utils';
import { useLenis } from 'lenis/react';
import penImg from '../../../assets/images/myself/Pen.webp';
import myCV from '../../../assets/CV - BUI LE BAO TRUNG.pdf';

const SCROLL_CONFIG = {
  target: '#contact',
  duration: 4,
  easing: (t: number) => {
    return t < 0.5 ? 16 * Math.pow(t, 5) : 1 - Math.pow(-2 * t + 2, 5) / 2;
  },
  immediate: false,
};

const MyselfInfo = () => {
  const t = useTranslation('main.myself');
  const lenis = useLenis();

  // Ép kiểu tường minh tránh lỗi any type từ file ngôn ngữ
  const fullNameText = (t('fullname') as string) || 'Bui Le Bao Trung';

  // State tạo vòng lặp tái khởi động animation đồng bộ
  const [loopKey, setLoopKey] = useState<number>(0);

  useEffect(() => {
    // 5.5 giây reset hiệu ứng viết chữ/ký một lần (3s chạy hiệu ứng + 2.5s giữ nguyên để nhìn)
    const interval = setInterval(() => {
      setLoopKey((prev) => prev + 1);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  // ─── STYLES DEFINITION ───────────────────────────────────────────────────
  const classes = {
    container:
      'flex flex-col w-full md:w-2/5 items-center mt-[-75px] text-[#3C2F2F] translate-x-[60px]',
    content: 'mr-[180px] block',
    headline: 'text-[48px] font-plus',
    pen: 'absolute w-[80px] mt-[-10px] ml-[-30px]',
    nameWrap: 'mt-[10px] relative inline-block',
    name: "text-[80px] font-['Caveat'] font-bold flex flex-wrap tracking-wide",
    signature: 'absolute mt-[-60px] ml-[-30px] pointer-events-none',
    title: 'text-[32px] font-plus mt-[100px]',
    subTitle: "text-[48px] font-['Caveat'] font-bold text-[#0057FF] text-center w-full",
    actions: 'flex gap-25 mt-[50px] mr-[170px]',
  };

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
      <style>{`
        @keyframes writeLetter {
          0% {
            opacity: 0;
            transform: translateY(6px) scale(0.9) rotate(-2deg);
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
            filter: blur(0);
          }
        }
        /* Hiệu ứng mờ dần cụm chữ trước khi reset vòng lặp mới */
        @keyframes containerFadeOut {
          0%, 88% { opacity: 1; filter: blur(0); }
          96%, 100% { opacity: 0; filter: blur(2px); }
        }
        .letter-anim {
          opacity: 0;
          display: inline-block;
          animation: writeLetter 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .loop-wrapper {
          animation: containerFadeOut 5.5s infinite ease-in-out;
        }
      `}</style>

      <div className={`${classes.content}`}>
        <p className={classes.headline}>{t('headline')}</p>
        <img src={penImg} alt="Pen" className={classes.pen} />

        <div key={loopKey} className={classes.nameWrap} loop-wrapper>
          <h1 className={classes.name}>
            {/* Đã bổ sung kiểu dữ liệu rõ ràng để fix lỗi ts(7006) */}
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
