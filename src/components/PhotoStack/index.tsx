import React from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import Pick from '@/assets/images/job/pick.webp';

interface PhotoStackProps {
  cardId?: string;
  imageSrc?: string;
  videoSrc?: string;
  href?: string;
  title?: string;
  className?: string;
  hoveredCardId?: string | null;
  onHoverChange?: (cardId: string | null) => void;
}

const SHARED_SWING = [0, -4, 3, -2, 1, 0];

const CARD_EFFECTS: Record<
  string,
  {
    baseRotate: number;
    hover: Record<string, unknown>;
    media?: { idle: Record<string, unknown>; hover: Record<string, unknown> };
  }
> = {
  'content-creator': {
    baseRotate: -2.2,
    hover: {
      y: -12,
      scale: 1.05,
      rotateZ: SHARED_SWING,
      transition: {
        duration: 0.8,
        times: [0, 0.18, 0.42, 0.65, 0.84, 1],
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  },
  'thumbnail-designer': {
    baseRotate: 1.25,
    hover: {
      y: -13,
      scale: 1.08,
      rotateZ: SHARED_SWING,
      filter: 'brightness(1.05)',
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  },
  'video-editor': {
    baseRotate: -1.35,
    hover: {
      y: -12,
      scale: 1.06,
      rotateZ: SHARED_SWING,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    media: {
      idle: {
        filter: 'grayscale(1) saturate(0.9)',
        scale: 1,
      },
      hover: {
        filter: 'grayscale(0) saturate(1.05)',
        scale: 1.15,
        transition: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      },
    },
  },
  'ai-architect': {
    baseRotate: 0.95,
    hover: {
      y: -12,
      scale: 1.05,
      rotateZ: SHARED_SWING,
      boxShadow: '0 26px 48px rgba(48, 72, 115, 0.18), 0 10px 22px rgba(58, 41, 29, 0.12)',
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  },
  'camera-operator': {
    baseRotate: -1.65,
    hover: {
      y: -12,
      scale: 1.06,
      rotateZ: SHARED_SWING,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    media: {
      idle: {
        filter: 'contrast(0.98) brightness(0.98)',
        scale: 1,
      },
      hover: {
        filter: 'contrast(1.06) brightness(1.04)',
        scale: 1.08,
        transition: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      },
    },
  },
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const PhotoStack: React.FC<PhotoStackProps> = ({
  cardId,
  imageSrc,
  videoSrc,
  href,
  title,
  className,
  hoveredCardId,
  onHoverChange,
}) => {
  const mediaSrc = videoSrc ?? imageSrc;
  const isVideoSrc = videoSrc ? true : imageSrc ? /\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i.test(imageSrc) : false;
  const videoType = mediaSrc ? mediaSrc.match(/\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i)?.[1]?.toLowerCase() : undefined;
  const resolvedVideoType = videoType === 'mov' ? 'video/quicktime' : videoType ? `video/${videoType}` : undefined;

  const effect = CARD_EFFECTS[cardId ?? ''] ?? {
    baseRotate: 0,
    hover: {
      y: -12,
      scale: 1.05,
      rotateZ: SHARED_SWING,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const isHovered = hoveredCardId === cardId;
  const isDimmed = hoveredCardId !== null && hoveredCardId !== cardId;

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const smoothTiltX = useSpring(tiltX, { stiffness: 180, damping: 18, mass: 0.2 });
  const smoothTiltY = useSpring(tiltY, { stiffness: 180, damping: 18, mass: 0.2 });

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (!isHovered) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = clamp(((offsetX - centerX) / centerX) * 8, -8, 8);
    const rotateX = clamp(-((offsetY - centerY) / centerY) * 8, -8, 8);

    tiltX.set(rotateX);
    tiltY.set(rotateY);
  };

  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const cardAnimate: any = isDimmed
    ? {
        y: 0,
        scale: 0.95,
        rotateZ: effect.baseRotate,
        opacity: 0.6,
        filter: 'blur(1px)',
        boxShadow: '0 12px 26px rgba(58, 41, 29, 0.12)',
        transition: {
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      }
    : isHovered
      ? {
          ...effect.hover,
          opacity: 1,
          filter: 'blur(0px)',
        }
      : {
          y: 0,
          scale: 1,
          rotateZ: effect.baseRotate,
          opacity: 1,
          filter: 'blur(0px)',
          boxShadow: 'none',
          transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  const mediaAnimate: any = isDimmed
    ? isVideoSrc
      ? { scale: 1, filter: 'grayscale(0.2) brightness(0.9)' }
      : { scale: 1, filter: 'blur(0px) grayscale(0.25) opacity(0.8)' }
    : isHovered
      ? isVideoSrc
        ? (effect.media?.hover ?? { scale: 1.15, filter: 'grayscale(0)' })
        : { scale: 1.15, filter: 'blur(0px) grayscale(0) brightness(1.02)' }
      : isVideoSrc
        ? (effect.media?.idle ?? { scale: 1, filter: 'none' })
        : { scale: 1, filter: 'blur(0px) grayscale(0)' };

  const Container = href ? motion.a : motion.div;

  return (
    <Container
      className={`relative inline-flex flex-col items-center ${className ?? ''}`}
      href={href}
      target={href ? '_blank' : undefined}
      rel={href ? 'noreferrer' : undefined}
      style={{
        transformOrigin: '50% 0%',
        perspective: 1400,
        rotateX: smoothTiltX,
        rotateY: smoothTiltY,
      }}
      animate={cardAnimate}
      onHoverStart={() => onHoverChange?.(cardId ?? null)}
      onHoverEnd={() => {
        onHoverChange?.(null);
        resetTilt();
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      initial={false}
      whileTap={{ scale: 0.99 }}
    >
      <div className="relative z-10 flex flex-col items-center will-change-transform">
        <img
          src={Pick}
          alt="Clip"
          className="absolute -top-[50px] left-1/2 z-30 w-[75px] -translate-x-1/2 select-none drop-shadow-[0_4px_5px_rgba(53,35,20,0.25)]"
        />

        <div className="relative mt-[16px] flex h-[450px] w-[296px] items-center justify-center rounded-[2px] border border-[#ddd0c4]/85 bg-[linear-gradient(180deg,#f3f3f3_0%,#ebebeb_48%,#ebebeb_100%)] px-[14px] pb-[14px] pt-[18px] shadow-none">

          <div className="relative flex bottom-7 h-[350px] w-full items-center justify-center overflow-hidden border border-[#ddd0c4] bg-[linear-gradient(180deg,#e6e4e1_0%,#d9d7d4_100%)] shadow-[inset_0_1px_6px_rgba(0,0,0,0.08)]">
            {mediaSrc ? (
              isVideoSrc ? (
                <motion.video
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  animate={mediaAnimate}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  <source src={mediaSrc} type={resolvedVideoType} />
                </motion.video>
              ) : (
                <motion.img
                  src={mediaSrc}
                  alt={title}
                  className="h-full w-full object-cover"
                  animate={mediaAnimate}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                />
              )
            ) : null}

            <AnimatePresence>
              {isHovered ? (
                <motion.div
                  key={`${cardId}-shine`}
                  className="pointer-events-none absolute inset-y-0 left-0 z-30 w-[42%] bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.08)_30%,rgba(255,255,255,0.62)_50%,rgba(255,255,255,0.1)_70%,transparent_100%)] mix-blend-screen"
                  initial={{ x: '-140%', opacity: 0 }}
                  animate={{ x: '140%', opacity: [0, 0.6, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
              ) : null}
            </AnimatePresence>
          </div>
        </div>

        <p className="z-9999 -mt-[53px] font-plus text-[28px] leading-none text-[#3C2F2F] [text-shadow:0_1px_0_rgba(255,255,255,0.35)]">
          <span className="inline-block">{title}</span>
        </p>
      </div>
    </Container>
  );
};

export default PhotoStack;
