import { 
  FileText, 
  Package, 
  MapPin, 
  Plane, 
  Truck, 
  Users,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import truckImage from '@/assets/truck-highway.jpg';
import forkliftImage from '@/assets/forklift-warehouse.jpg';
import supplyChainImage from '@/assets/supply-chain.jpg';
import freightImage from '@/assets/freight-forwarding.jpg';
import cargoShipImage from '@/assets/cargo-ship-port.jpg';
import truckFleetImage from '@/assets/truck-fleet.jpg';
import airFreightImage from '@/assets/air-freight.jpg';
import automatedWarehouseImage from '@/assets/automated-warehouse.jpg';

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "CONTRACT LOGISTICS",
      description: "Comprehensive logistics contracts tailored to your business needs with flexible terms and reliable service delivery."
    },
    {
      icon: Package,
      title: "PROJECT LOGISTICS", 
      description: "Specialized handling of complex projects requiring customized logistics solutions and expert coordination."
    },
    {
      icon: MapPin,
      title: "ON-SITE LOGISTICS",
      description: "Dedicated on-site logistics management ensuring seamless operations at your facility."
    },
    {
      icon: Plane,
      title: "FREIGHT FORWARDING",
      description: "International freight forwarding services connecting your business to global markets efficiently."
    },
    {
      icon: Truck,
      title: "LAND TRANSPORTATION", 
      description: "Reliable road transport solutions covering local and long-distance deliveries with modern fleet."
    },
    {
      icon: Users,
      title: "SUPPLY CHAIN CONSULTATION",
      description: "Expert consultation to optimize your supply chain processes and improve operational efficiency."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            OUR SOLUTIONS
          </h2>
          <h3 className="text-2xl lg:text-3xl font-semibold text-brand-green mb-6">
            TAILOR-MADE SOLUTIONS FOR YOUR INDUSTRY
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-brand-green rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            As a logistics company covering road transport including international freight forwarding & supply chain 
            development Westmak Logistics is well positioned to supply your diverse supply chain needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <img 
                src={truckFleetImage} 
                alt="Contract Logistics" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <FileText className="text-white" size={32} />
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                CONTRACT LOGISTICS
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive logistics contracts tailored to your business needs with flexible terms and reliable service delivery.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <img 
                src={automatedWarehouseImage} 
                alt="Project Logistics" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <Package className="text-white" size={32} />
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                PROJECT LOGISTICS
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Specialized handling of complex, time-sensitive projects with detailed planning and execution.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <img 
                src={forkliftImage} 
                alt="On-site Logistics" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <MapPin className="text-white" size={32} />
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                ON-SITE LOGISTICS
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Direct logistics support at your location with our team managing operations on your premises.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <img 
                src={cargoShipImage} 
                alt="Freight Forwarding" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <Plane className="text-white" size={32} />
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                FREIGHT FORWARDING
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                International freight forwarding services connecting your business to global markets efficiently.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <img 
                src={truckImage} 
                alt="Land Transportation" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <Truck className="text-white" size={32} />
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                LAND TRANSPORTATION
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Reliable road transport solutions covering local and long-distance deliveries with modern fleet.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <img 
                src={supplyChainImage} 
                alt="Supply Chain Consultation" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <Users className="text-white" size={32} />
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                SUPPLY CHAIN CONSULTATION
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Expert consultation to optimize your supply chain processes and improve operational efficiency.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Featured Service - Land Transportation */}
        <div className="bg-gradient-to-r from-primary to-brand-green rounded-2xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-8 lg:p-12 text-white">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                LAND TRANSPORTATION
              </h3>
              <p className="text-lg mb-8 text-white/90 leading-relaxed">
                Depending on your trucking requirements, we can provide you either a bespoke 
                solution for your requirements or an integration covering from point to offloading 
                to the point of delivery
              </p>
              <Button 
                variant="hero-outline"
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Get Transportation Quote
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
            <div className="h-64 lg:h-full">
              <img 
                src={truckImage} 
                alt="Land Transportation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;