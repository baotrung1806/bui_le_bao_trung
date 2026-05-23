import { cn } from '@/utils/cn';

type ButtonCustomProps = {
  value: string;
  className?: string;
};

export const ButtonCustom = ({ value, className }: ButtonCustomProps) => {
  return (
    <button
      className={cn('text-[32px] w-[236px] h-[64px] rounded-[20px] shadow-lg', className)}
      style={{
        fontFamily: 'Caveat, cursive',
        fontWeight: 700,
      }}
    >
      {value}
    </button>
  );
};
