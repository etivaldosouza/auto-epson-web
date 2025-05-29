
import SupportHeader from "@/components/support/SupportHeader";
import SupportOptions from "@/components/support/SupportOptions";
import ContactForm from "@/components/support/ContactForm";
import FAQSection from "@/components/support/FAQSection";
import EmergencyContact from "@/components/support/EmergencyContact";

const Support = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SupportHeader />
        <SupportOptions />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <ContactForm />
          <FAQSection />
        </div>

        <EmergencyContact />
      </div>
    </div>
  );
};

export default Support;
