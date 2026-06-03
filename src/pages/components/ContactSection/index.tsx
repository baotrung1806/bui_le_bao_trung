import ContactInfo from "./ContactInfo";
import ContactItemIcon from "./ContactItemIcon";

export const ContactSection = () => {
  return (
    <div className="flex flex-row inset-0 h-screen gap-40">
      <ContactInfo />
      <ContactItemIcon />
    </div>
  );
};
