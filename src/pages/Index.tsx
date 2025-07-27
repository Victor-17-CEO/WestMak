import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import AboutSection from '@/components/AboutSection';
import ValuesSection from '@/components/ValuesSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhyChooseUsSection />
      <AboutSection />
      <ValuesSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
