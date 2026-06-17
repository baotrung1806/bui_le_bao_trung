import type { CSSProperties } from 'react';

/**
 * Chuyển chuỗi vị trí CSS dạng Tailwind-like (ví dụ "top-[20px] left-[285px]")
 * thành object CSSProperties ({ top: '20px', left: '285px' }).
 *
 * Hỗ trợ: top, bottom, left, right — kể cả giá trị âm.
 */
export const parsePosition = (posClass: string): CSSProperties => {
  const styles: CSSProperties = {};

  const topMatch = posClass.match(/top-\[?(-?\d+px)\]?/);
  if (topMatch) styles.top = topMatch[1];

  const bottomMatch = posClass.match(/bottom-\[?(-?\d+px)\]?/);
  if (bottomMatch) styles.bottom = bottomMatch[1];

  const leftMatch = posClass.match(/left-\[?(-?\d+px)\]?/);
  if (leftMatch) styles.left = leftMatch[1];

  const rightMatch = posClass.match(/right-\[?(-?\d+px)\]?/);
  if (rightMatch) styles.right = rightMatch[1];

  return styles;
};
