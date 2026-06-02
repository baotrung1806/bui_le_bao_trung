import MyselfInfo from './MyselfInfo';
import MyselfPostcard from './MyselfPostcard';

const MySelfSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ml-[90px] mt-[-70px] p-10 translate-x-[90px]">
        {/* Khu vực bưu thiếp (Trái) */}
        <MyselfPostcard />
        {/* Khu vực thông tin (Phải) */}
        <MyselfInfo />
    </div>
  );
};

export default MySelfSection;
