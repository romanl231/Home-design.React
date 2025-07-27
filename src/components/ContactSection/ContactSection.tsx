import InfoPanel from "./InfoPanel";
import SubmitForm from "./SubmitForm";

const ContactSection = () => {
  return (
    <section className="bg-[#f4eee9] min-h-screen flex items-center justify-center px-6 py-16">
      <div className="flex flex-col lg:flex-row items-start gap-10 max-w-6xl w-full">
        <InfoPanel />
        <SubmitForm />
      </div>
    </section>
  );
};

export default ContactSection;
