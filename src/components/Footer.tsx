import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
    <footer className="bg-gradient-to-br from-primary via-primary to-brand-green text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/5a5e514e-216a-4c06-84c7-7cc7b1d98146.png" 
                alt="WESTMAK LOGISTICS" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Your trusted logistics partner providing comprehensive supply chain solutions. 
              We deliver excellence through innovation, reliability, and customer-focused service.
            </p>
            <div className="flex space-x-2 text-sm">
              <span className="bg-white/10 px-3 py-1 rounded-full">PICKUP</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">DELIVER</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">OFFLOAD</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'values', label: 'Our Values' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone size={16} className="text-brand-green-foreground mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-white/80">+27 7744 498950</div>
                  <div className="text-white/80">+263 774 332 504</div>
                  <div className="text-white/80">+263 773 658 379</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-brand-green-foreground flex-shrink-0" />
                <div className="text-sm text-white/80">
                  westmakinvestments@gmail.com
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-brand-green-foreground mt-1 flex-shrink-0" />
                <div className="text-sm text-white/80">
                  Stand No. 6555 Ruvimbo<br />
                  Chinhoyi, Zimbabwe
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <h3 className="text-lg font-semibold mb-4 text-center">Our Services</h3>
          <div className="grid md:grid-cols-6 gap-4 text-center text-sm">
            {[
              'Contract Logistics',
              'Project Logistics', 
              'On-site Logistics',
              'Freight Forwarding',
              'Land Transportation',
              'Supply Chain Consultation'
            ].map((service, index) => (
              <div key={index} className="bg-white/10 rounded-lg py-2 px-3">
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white/60 mb-4 md:mb-0">
            © 2024 Westmak Logistics. All rights reserved. | Established September 2019
          </div>
          
          <Button
            onClick={scrollToTop}
            size="sm"
            variant="outline"
            className="border-white/30 text-white hover:bg-white hover:text-primary bg-transparent"
          >
            Back to Top
            <ArrowUp size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;