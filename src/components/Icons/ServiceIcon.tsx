import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  title?: string;
};

const SERVICE_ICON_STYLE = `
  .hand {
    stroke-dasharray: 1200;
    stroke-dashoffset: 1200;
    animation: drawHand 1.4s ease forwards;
  }

  .user {
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
    animation:
      drawUser 1s ease forwards 0.9s,
      glowUser 2s ease-in-out infinite alternate 2s;
  }

  @keyframes drawHand {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes drawUser {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes glowUser {
    from {
      stroke: #397bff;
      filter: drop-shadow(0 0 0px #397bff);
    }

    to {
      stroke: #0057FF;
      filter: drop-shadow(0 0 10px #0057FF);
    }
  }
`;

export default function ServiceIcon(props: IconProps) {
  const {
    title,
    width = 512,
    height = 512,
    "aria-label": ariaLabelProp,
    ...rest
  } = props;
  const ariaLabel = title ?? ariaLabelProp;
  const ariaHidden = ariaLabel ? undefined : true;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      focusable="false"
      {...rest}
    >
      <style>{SERVICE_ICON_STYLE}</style>

      <path
        className="hand"
        d="M70 400V335L160 265H305
        C330 265 345 280 345 305
        C345 330 330 345 305 345H210
        M345 305L410 240
        C425 225 450 225 465 240
        C480 255 480 280 465 295
        L390 370
        C370 390 345 400 315 400
        H180L120 440H70V400"
        stroke="black"
        strokeWidth="28"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        className="user"
        cx="255"
        cy="90"
        r="45"
        stroke="#000000"
        strokeWidth="18"
      />

      <path
        className="user"
        d="M195 205
        C195 165 225 140 255 140
        C285 140 315 165 315 205"
        stroke="#000000"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}