import { ButtonCustom } from "@/components/ButtonCustom";
import { useTranslation } from "@/utils";

export const BaoTrung = () => {
  const t = useTranslation();
  return (
    <>
      <ButtonCustom value={t("hello_bao_trung")} />
    </>
  );
};



