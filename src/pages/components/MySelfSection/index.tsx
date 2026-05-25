import MyselfPostcard from './MyselfPostcard';

const MySelfSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ml-[90px] mt-[-70px] p-10 overflow-x-hidden">
      <div className="relative w-full max-w-screen-2xl flex flex-col md:flex-row items-center">
        {/* Khu vực bưu thiếp (Trái) */}
          <MyselfPostcard />
        {/* Khu vực thông tin (Phải) */}
        {/* <MyselfInfo /> */}
      </div>
    </div>
  );
};

export default MySelfSection;
