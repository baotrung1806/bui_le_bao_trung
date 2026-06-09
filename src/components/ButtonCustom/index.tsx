import { cn } from '@/utils/cn';

type ButtonCustomProps = {
  value: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; 
};

export const ButtonCustom = ({ value, className, onClick }: ButtonCustomProps) => {
  return (
    <button
      className={cn('text-[32px] w-[236px] h-[64px] rounded-[20px] shadow-lg cursor-pointer', className)}
      style={{
        fontFamily: 'Caveat, cursive',
        fontWeight: 700,
      }}
      onClick={onClick}
    >
      {value}
    </button>
  );
};