import cardBg from '../../../assets/images/myself/Postcard.webp';
import tapeImg1 from '../../../assets/images/myself/Label1.webp';
import tapeImg2 from '../../../assets/images/myself/Label2.webp';
import cameraIcon from '../../../assets/images/myself/Camera.webp';
import postmarkIcon from '../../../assets/images/myself/Stamp.webp';
import vnMapImg from '../../../assets/images/myself/MapVN.webp';
import vnFlagStampImg from '../../../assets/images/myself/Flag.webp';
import portraitImg from '../../../assets/images/myself/BaoTrung.webp';
import cricleNicknameImg from '../../../assets/images/myself/CricleNickname.webp';
import { useTranslation } from '@/utils';

const EDUCATION_KEYS = [
  { key: 'first', className: '' },
  { key: 'second', className: 'mr-[15px]' },
  { key: 'third', className: 'mr-[180px]' },
];

const DECORATIVE_IMAGES = [
  {
    src: tapeImg1,
    alt: 'Tape Left',
    className: 'absolute inset-0 z-40 -top-12 -left-12 w-[210px] ml-[-17px] mt-[31px]',
  },
  {
    src: tapeImg2,
    alt: 'Tape Right',
    className: 'absolute z-40 -top-12 right-[-35px] w-[200px]',
  },
  {
    src: cameraIcon,
    alt: 'Camera',
    className: 'absolute inset-0 top-2 left-6 z-50 w-[390px] mt-[-60px] ml-[-70px]',
  },
  {
    src: postmarkIcon,
    alt: 'Postmark',
    className: 'absolute right-6 z-10 w-[250px] mr-[60px] mt-[20px]',
  },
];

const CONTENT_IMAGES = [
  {
    src: vnMapImg,
    alt: 'Vietnam Map',
    className: 'absolute z-1 w-[350px] mt-[-515px] ml-[145px]',
  },
  {
    src: portraitImg,
    alt: 'Portrait',
    className: 'absolute inset-0 z-3 w-[400px] h-[720px] mt-[190px] ml-[-55px] object-cover',
  },
];

const MyselfPostcard = () => {
  const t = useTranslation('main.myself');
  const classes = {
    root: 'relative text-[#3C2F2F]',
    card: 'w-full h-[720px] object-cover rotate-[-3deg]',
    textArea: 'absolute inset-0 z-20 mt-[145px] ml-[465px] p-10',
    infoBlock: 'w-[420px] rotate-[-3deg]',
    infoRow: 'flex gap-2 text-[23px]',
    infoLabel: "font-semibold font-['Syne']",
    infoValue: 'font-plus mt-[4px] ml-auto text-right',
    divider: 'h-1 w-full rounded-full bg-[#3C2E2E] opacity-60 mt-1',
    nicknameRow: 'flex items-center gap-4 ml-[7px] relative',
    nicknameLabel: 'font-plus rotate-[-3deg] text-[19px]',
    nicknameValue:
      "absolute text-[48px] font-['Caveat'] font-bold rotate-[-7.4deg] ml-[290px] mt-[-32px]",
    nicknameCricle: 'absolute ml-[134px] mt-[-3px]',
    addressBlock: 'w-[420px] rotate-[-3deg] mt-4 ml-[10px]',
    educationWrap: 'flex flex-col gap-4',
    educationTitle: "font-semibold font-['Syne'] text-[23px] rotate-[-3deg] mb-2 ml-[10px]",
    educationList: 'flex flex-col gap-6 text-[19px] mr-[7px]',
    educationItem: 'flex flex-col items-end tracking-wide font-plus rotate-[-3deg]',
    educationText: "before:content-['•'] before:mr-1 before:opacity-60 text-right leading-tight",
    stamp: 'absolute right-0 z-50 w-[300px] mt-[-180px] mr-[-60px] ml-[300px]',
  };

  return (
    <div className={`hover:rotate-[3deg] duration-500 transform transition-transform ${classes.root}`}>
      {DECORATIVE_IMAGES.map((image) => (
        <img
          key={image.alt}
          src={image.src}
          alt={image.alt}
          className={image.className}
        />
      ))}

      <img src={cardBg} alt="Postcard" className={classes.card} />

      {CONTENT_IMAGES.map((image) => (
        <img
          key={image.alt}
          src={image.src}
          alt={image.alt}
          className={image.className}
        />
      ))}

      <div className={classes.textArea}>
        <div className={`${classes.infoBlock} ml-[2px]`}>
          <p className={classes.infoRow}>
            <span className={classes.infoLabel}>From:</span>
            <span className={classes.infoValue}>{t('fullname')}</span>
          </p>
          <hr className={`${classes.divider} mb-[40px]`} />
        </div>

        <div className={classes.nicknameRow}>
          <p className={classes.nicknameLabel}>but you can call me:</p>
          <span className={classes.nicknameValue}>{t('nickname')}</span>
          <img src={cricleNicknameImg} alt="Cricle Nickname" className={classes.nicknameCricle} />
        </div>

        <div className={classes.addressBlock}>
          <p className={classes.infoRow}>
            <span className={classes.infoLabel}>Address:</span>
            <span className={classes.infoValue}>{t('address')}</span>
          </p>
          <hr className={`${classes.divider} mb-8`} />
        </div>

        <div className={classes.educationWrap}>
          <h3 className={classes.educationTitle}>Educational background:</h3>
          <div className={classes.educationList}>
            {EDUCATION_KEYS.map(({ key, className }) => (
              <p
                key={key}
                className={`${classes.educationItem} ${className}`}
              >
                <span className={classes.educationText}>
                  {t(`education.${key}.label`)}
                  <span className="block">{t(`education.${key}.subLabel`)}</span>
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <img
        src={vnFlagStampImg}
        alt="Vietnam Flag Stamp"
        className={classes.stamp}
      />
    </div>
  );
};

export default MyselfPostcard;