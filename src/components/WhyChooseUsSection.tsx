import { Clock, Award, Globe, Headphones } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Award,
      title: "10+ Years of Experience",
      description: "Proven track record in logistics excellence"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Reliable service you can count on"
    },
    {
      icon: Globe,
      title: "Serving Southern Africa",
      description: "Extensive regional network coverage"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose WM Logistics?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses across Southern Africa for reliable and professional logistics solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-white border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-green/10 rounded-full mb-4">
                  <IconComponent className="text-brand-green" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;