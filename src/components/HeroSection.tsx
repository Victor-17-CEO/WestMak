import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-logistics.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/75 via-primary/60 to-brand-green/70"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white pt-20">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Logo/Company Name */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/5a5e514e-216a-4c06-84c7-7cc7b1d98146.png" 
                alt="WESTMAK LOGISTICS" 
                className="h-32 md:h-48 lg:h-56 w-auto drop-shadow-2xl filter brightness-110"
              />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Your Logistics Partner
            </h1>
          </div>

          {/* Tagline */}
          <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/95 py-4">
            <div className="flex items-center justify-center space-x-4">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">PICKUP</span>
              <span className="text-2xl">•</span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">DELIVER</span>
              <span className="text-2xl">•</span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">OFFLOAD</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for comprehensive logistics solutions, delivering excellence 
            across road transport, freight forwarding, and supply chain management.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center py-8">
            <Button 
              variant="hero-primary"
              size="lg" 
              onClick={scrollToContact}
              className="px-8 py-4 text-lg rounded-xl"
            >
              Get Free Quote
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button 
              variant="hero-outline"
              size="lg" 
              onClick={scrollToServices}
              className="px-8 py-4 text-lg rounded-xl"
            >
              Our Services
            </Button>
          </div>

          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <Phone className="text-white" size={28} />
              </div>
              <div className="text-center">
                <div className="font-semibold text-lg mb-2">Call Us</div>
                <div className="text-sm text-white/90">+27 7744 498950</div>
              </div>
            </div>
            
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <Mail className="text-white" size={28} />
              </div>
              <div className="text-center">
                <div className="font-semibold text-lg mb-2">Email Us</div>
                <div className="text-sm text-white/90">westmakinvestments@gmail.com</div>
              </div>
            </div>
            
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <MapPin className="text-white" size={28} />
              </div>
              <div className="text-center">
                <div className="font-semibold text-lg mb-2">Visit Us</div>
                <div className="text-sm text-white/90">Ruvimbo, Chinhoyi</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;