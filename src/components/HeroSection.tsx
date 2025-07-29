import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import truckHighwayImage from '@/assets/truck-highway.jpg';
import westmakLogo from '@/assets/WhatsApp_Image_2025-07-22_at_15.00.27_cb85b778-removebg-preview.png';

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
        style={{ backgroundImage: `url(${truckHighwayImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white pt-20">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-6">
          
          {/* Logo */}
          <img 
            src={westmakLogo}
            alt="WM Logistics Logo"
            className="mx-auto mb-8 w-48 sm:w-64 md:w-80"
          />

          {/* Main Headline */}
          <div className="space-y-6 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white px-2">
              Your Logistics Partner
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
              Your trusted partner for comprehensive logistics solutions, delivering excellence 
              across road transport, freight forwarding, and supply chain management.
            </p>
          </div>

          {/* Tagline */}
          <div className="text-lg md:text-2xl lg:text-3xl font-semibold text-white/95 py-4">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm sm:text-base">PICKUP</span>
              <span className="text-xl sm:text-2xl">•</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm sm:text-base">DELIVER</span>
              <span className="text-xl sm:text-2xl">•</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm sm:text-base">OFFLOAD</span>
            </div>
          </div>


          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center py-6 sm:py-8">
            <Button 
              variant="hero-primary"
              size="lg" 
              onClick={scrollToContact}
              className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-xl w-full sm:w-auto"
            >
              Get Free Quote
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button 
              variant="hero-secondary"
              size="lg" 
              onClick={scrollToServices}
              className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-xl w-full sm:w-auto"
            >
              Our Services
            </Button>
          </div>

          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto pt-6 sm:pt-8">
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-2 sm:mb-3">
                <Phone className="text-white" size={24} />
              </div>
              <div className="text-center">
                <div className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Call Us</div>
                <div className="text-xs sm:text-sm text-white/90">+27 7744 498950</div>
              </div>
            </div>
            
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-2 sm:mb-3">
                <Mail className="text-white" size={24} />
              </div>
              <div className="text-center">
                <div className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Email Us</div>
                <div className="text-xs sm:text-sm text-white/90">quotes@wmlogistics.com</div>
              </div>
            </div>
            
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-2 sm:mb-3">
                <MapPin className="text-white" size={24} />
              </div>
              <div className="text-center">
                <div className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Visit Us</div>
                <div className="text-xs sm:text-sm text-white/90">Ruvimbo, Chinhoyi, Zimbabwe</div>
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