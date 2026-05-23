import { cn } from '@/utils/cn';

type ButtonCustomProps = {
  value: string;
  className?: string;
};

export const ButtonCustom = ({
    value,
    className
}: ButtonCustomProps) => {
  return (
    <button className={cn('text-[32px] px-4 py-2 rounded-[20px] font-bold shadow-lg', className)}>
      {value}
    </button>
  );
};
