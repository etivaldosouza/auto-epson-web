
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import MapSection from "@/components/contact/MapSection";
import CTASection from "@/components/contact/CTASection";

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Entre em <span className="text-brand-400">Contato</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para ajudar! Entre em contato conosco e nossa equipe especializada 
            irá atendê-lo com a máxima agilidade e qualidade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information */}
          <ContactInfo />
        </div>

        {/* Map Section */}
        <MapSection />

        {/* CTA Section */}
        <CTASection />
      </div>
    </div>
  );
};

export default Contact;
