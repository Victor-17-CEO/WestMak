import containerPortImage from '@/assets/container-port.jpg';
import supplyChainImage from '@/assets/supply-chain.jpg';
import globalNetworkImage from '@/assets/global-network.jpg';
import airFreightImage from '@/assets/air-freight.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={containerPortImage} 
                alt="Container Port Operations" 
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-brand-green/20"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border-l-4 border-brand-green">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2019</div>
                <div className="text-sm text-muted-foreground">Established</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-sm font-semibold">
                  Our Story
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                HISTORY
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-brand-green rounded-full"></div>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Westmark logistics was registered as <strong className="text-foreground">Westmak Investments (Private) Limited</strong> on 
                <strong className="text-primary"> 4th September 2019</strong> with a limited resources but within a very short period 
                of time we were able to rise through dedicated service and the strong spirit of our experienced team.
              </p>
              
              <p>
                We identify the way of achieving a sustainable growth of the company by offering 
                <strong className="text-brand-green"> innovative and tailor made solutions</strong> to the demand of customers 
                by using updated knowledge with reliability.
              </p>
              
              <p>
                The Westbank Logistics is committed to service according to the requirements of the clients with 
                <strong className="text-foreground"> respect and dedication</strong>. We are providing high standard of quality service 
                to all our customers by offering innovative supply chain solutions through road.
              </p>
              
              <p>
                It is the <strong className="text-primary">hidden story behind the sustainable growth</strong> & the success of our business.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-primary/5 rounded-xl border border-primary/20">
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center p-4 bg-brand-green/5 rounded-xl border border-brand-green/20">
                <div className="text-2xl font-bold text-brand-green mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Service Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Image Section */}
        <div className="mt-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl shadow-xl group">
              <img 
                src={globalNetworkImage} 
                alt="Global Logistics Network" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Global Network</h4>
                <p className="text-sm text-white/90">Worldwide logistics connections</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-xl group">
              <img 
                src={airFreightImage} 
                alt="Air Freight Operations" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Air Freight</h4>
                <p className="text-sm text-white/90">Fast international shipping</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;