import ContactInfo from "./ContactInfo";
import ContactItemIcon from "./ContactItemIcon";

const ContactSection = () => {
  return (
    <div id="contact" className="flex flex-row inset-0 h-screen gap-40" >
      <ContactInfo />
      <ContactItemIcon />
    </div>
  );
};

export default ContactSection;