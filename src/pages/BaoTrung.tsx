import MySelfSection from "./components/MySelfSection";
import MyselfInfo from "./components/MySelfSection/MyselfInfo";

export const BaoTrung = () => {
  return (
    <div className="flex flex-row items-center">
      <MySelfSection />
      <MyselfInfo />
    </div>
  );
};
