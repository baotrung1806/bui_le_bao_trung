import ContactInfo from "./ContactInfo";
import ContactItemIcon from "./ContactItemIcon";

const ContactSection = () => {
  return (
    <div className="flex flex-row inset-0 h-screen gap-40" id="contact-section">
      <ContactInfo />
      <ContactItemIcon />
    </div>
  );
};

export default ContactSection;